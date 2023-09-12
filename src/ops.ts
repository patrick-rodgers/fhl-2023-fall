import { combine } from "@pnp/core";
import { ITarget } from "./main.js";
import { getAuthorizationHeaderValue } from "./node-auth.js";
import { default as nodeFetch } from "node-fetch";
import { json, ParserField } from "./parsers.js";

const urlBase = "https://graph.microsoft.com/v1.0";

export async function get<T>(this: ITarget, init: RequestInit): Promise<T> {

    const url = combine(urlBase, ...this.paths);

    const authHeader = await getAuthorizationHeaderValue();

    const builtInit = {
        method: "GET",
        cache: "default",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json", 
            "Authorization": authHeader,
        },
        ...init
    };

    const result = await nodeFetch(url, <any>builtInit);

    return (this[ParserField] || json)(result);
}



