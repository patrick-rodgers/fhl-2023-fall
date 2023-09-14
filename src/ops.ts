import { ITarget } from "./types.js";
import { getAuthorizationHeaderValue } from "./node-auth.js";
import { default as nodeFetch } from "node-fetch";
import { json, ParserField } from "./parsers.js";

export type ValidHttpMethod = "GET" | "POST" | "DELETE";
export const RequestHook = Symbol.for("RequestHook");
export type RequestHookFunc = (target: ITarget, method: string, userInit?: Partial<RequestInit>) => any;

export function toUrlAndMethod(target: ITarget, method: ValidHttpMethod): [method: ValidHttpMethod, url: string] {

    const query = [];
    for (const item of target._query) {
        query.push(`${item[0]}=${encodeURIComponent(item[1])}`);
    }

    return [method, `${combine(target._baseUrl, ...target._paths)}${query.length > 0 ? `?${query.join("&")}` : ""}`];
}

export async function request<T>(target: ITarget, method: ValidHttpMethod, userInit?: Partial<RequestInit>): Promise<T> {

    if (typeof target[RequestHook] === "function") {
        return target[RequestHook](target, method, userInit);
    }

    const query = [];
    for (const item of target._query) {
        query.push(`${item[0]}=${encodeURIComponent(item[1])}`);
    }

    const [, url] = toUrlAndMethod(target, method);

    console.log(`Request URL: ${method} ${url}`);

    const init = {
        method,
        cache: "default",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": await getAuthorizationHeaderValue(),
        },
        ...userInit
    }

    return nodeFetch(url, <any>init).then(result => <T>(target[ParserField] || json)(result));
}

export const opMap = new Map<string, (this: ITarget, ...args: any[]) => any>();

opMap.set("get", function <T>(this: ITarget, userInit: RequestInit): Promise<T> {
    return request<T>(this, "GET", userInit);
});

opMap.set("update", function <T>(this: ITarget, body: any): Promise<T> {
    return request<T>(this, "POST", { body: JSON.stringify(body) });
});

opMap.set("add", function <T>(this: ITarget, body: any): Promise<T> {
    return request<T>(this, "POST", { body: JSON.stringify(body) });
});

opMap.set("delete", function <T>(this: ITarget): Promise<T> {
    return request<T>(this, "DELETE");
});

export function combine(...paths: string[]): string {
    return paths
        .map(path => path!.replace(/^[\\|/]/, "").replace(/[\\|/]$/, ""))
        .join("/")
        .replace(/\\/g, "/");
}
