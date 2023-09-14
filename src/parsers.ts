export const ParserField = Symbol.for("parsers");

async function err(this: Response) {
    if (!this.ok) {
        throw Error(await this.text());
    }
}

export async function json<T>(response: Response): Promise<T> {
    err.call(response);
    return <T>(response.status === 204 ? {} : response.json());
}

export async function str(response: Response): Promise<string> {
    err.call(response);
    return response.text();
}
