import { opMap, combine, RequestHook, toUrlAndMethod, ValidHttpMethod } from "./ops.js";
import { GraphService, paramMap } from "./generated-types.js";
import { Batchable, BatchableFunc, ITarget } from "./types.js";

export {
    json,
    str,
    ParserField,
} from "./parsers.js";

// this will export all the enums
export * from "./types.js";

export function graph(baseUrl = "https://graph.microsoft.com/v1.0") {

    const proxyBase = function () {
        console.log("this");
    };
    proxyBase._baseUrl = baseUrl;
    proxyBase._paths = [];
    proxyBase._op = opMap.get("get");
    proxyBase._query = new Map<string, string>();
    proxyBase._flag = false;
    proxyBase._lastEntity = null;

    return new Proxy<GraphService>(<any>proxyBase, {

        apply(target: ITarget, _thisArg, argArray) {

            // we are invoking a function that isn't one of our pre-handled ones
            if (target._flag) {

                const opName = target._paths[target._paths.length - 1];
                const params = paramMap.get(`${target._lastEntity}:${opName}`);

                // functions use get, actions use post w/ body args (https://learn.microsoft.com/en-us/odata/webapi-8/fundamentals/actions-functions)
                if (params[0]) {
                    target._op = opMap.get("get");
                    target._paths[target._paths.length - 1] += `(${params[1].map((v, i) => (`${v}='${argArray[i]}'`)).join(",")})`;
                } else {
                    target._op = opMap.get("update");
                    argArray = [params[1].reduce((a, v, i) => ({ ...a, [v]: argArray[i] }), {})];
                }
            }

            return target._op.call(target, ...argArray);
        },

        get(target: ITarget, p, receiver) {

            const name = String(p);

            // allow internal property access
            if (Reflect.has(target, name)) {
                return Reflect.get(target, name);
            }

            target._flag = false;

            switch (name) {
                case "get":
                case "update":
                case "add":
                case "delete":
                    target._op = opMap.get(name);
                    break;
                case "byId":
                    return (id: string) => {
                        target._lastEntity = target._paths[target._paths.length - 1].replace(/s$/i, "");
                        target._paths.push(id);
                        return receiver;
                    }
                case "select":
                case "filter":
                case "expand":
                case "top":
                    return (...fields: string[]) => {
                        target._query.set(`$${name}`, fields.join(","));
                        return receiver;
                    }
                case "Symbol(Symbol.asyncIterator)":

                    return () => ({

                        _next: receiver,

                        async next() {

                            if (this._next === null) {
                                return { done: true, value: undefined };
                            }

                            const result = await this._next();
                            const nextLink = result["@odata.nextLink"] || false;

                            if (nextLink) {
                                this._next = graph(nextLink);
                                return { done: false, value: result.value };
                            } else {
                                this._next = null;
                                return { done: false, value: result.value };
                            }
                        },

                    });
                default:
                    target._flag = true;
                    target._paths.push(name);
                    break;
            }

            // just keep giving the Proxy back
            return receiver;
        },
    });
}

export async function batch(...reqs: Batchable[]): Promise<any[]> {

    function makeUrlRelative(url: string): string {

        let index = url.indexOf("/v1.0/");

        if (index < 0) {

            index = url.indexOf("/beta/");

            if (index > -1) {

                // beta url
                return url.substring(index + 6);
            }

        } else {
            // v1.0 url
            return url.substring(index + 5);
        }

        // no idea
        return url;
    }

    const batchRequest = graph();
    (<any>batchRequest)._baseUrl = combine((<any>graph())._baseUrl, "$batch");
    // update does a post and support a body
    (<any>batchRequest)._op = opMap.get("update");

    const requests = [...await Promise.all(reqs.map(async (req, i) => {

        let _req: BatchableFunc = <any>req;
        let _args = [];
        let extraInit: <T>(o: T) => T = (o) => o;
        if (Array.isArray(req)) {
            _req = req[0];
            if (req.length > 1) {
                _args = req[1];
            }

            extraInit = (init: any) => {
                if (init?.body && typeof init.body === "string") {
                    // we need to parse the previously encoded
                    init.body = JSON.parse(init.body);
                }
                return {
                    ...init,
                    headers: {
                        ...init.headers,
                        "Content-Type": "application/json",
                    },
                };
            }
        }

        _req[RequestHook] = (target: ITarget, m: ValidHttpMethod, userInit?: Partial<RequestInit>) => [...toUrlAndMethod(target, m), userInit];
        const [method, url, init] = await _req(..._args);

        return extraInit({
            id: i + 1,
            method,
            url: makeUrlRelative(url),
            ...init,
        });

    }))];

    return (<any>batchRequest)({ requests }).then(response => response.responses);
}
