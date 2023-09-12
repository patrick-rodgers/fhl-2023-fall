
export const ParserField = Symbol.for("parsers");

async function err(this: Response) {
    throw Error(await this.text());
}

export async function json<T>(response: Response): Promise<T> {
    if (response.ok) {
        return <T>response.json();
    } else {
        err.call(response);
    }
}

export async function str(response: Response): Promise<string> {
    if (response.ok) {
        return response.text();
    } else {
        err.call(response);
    }
}
