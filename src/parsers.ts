export const ParserField = Symbol.for("parsers");

/**
 * json parser
 * 
 * @param response 
 * @returns 
 */
export async function json<T>(response: Response): Promise<T> {
    if (response.ok) {
        return <T>(response.status === 204 ? {} : response.json());
    } else {
        throw Error(await response.text());
    }
}

/**
 * string parser
 * 
 * @param response 
 * @returns 
 */
export async function str(response: Response): Promise<string> {
    if (response.ok) {
        return response.text();
    } else {
        throw Error(await response.text());
    }
}
