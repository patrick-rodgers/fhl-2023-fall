# nanograph

An experimental graph client investigating how much logic can be included in [TypeScript](https://www.typescriptlang.org/) types to reduce the overall library size.

The goal is not 100% perfect coverage, but how close can we get with minimal code. The solution uses a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to interpret the calls and dynamically build and execute the requests. The total minimized, uncompressed package size is ~50k. If we remove the ability to call actions/functions we can reduce the size to < 4k which includes paging, batching, get, update, add, select, filter, expand, and full fluent UI support.

Considering most data access uses the core patterns of getting/updating collections and getting/updating individual items a similar approach could have significant impact on page load times and performance for clients, especially mobile and markets that do not have highspeed internet.

## setup

1. Add a `node-auth-settings.ts` file into `./src` with the form:

```
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
-----END RSA PRIVATE KEY-----
`;

export const configuration = {
    auth: {
        authority: "https://login.microsoftonline.com/{tenant}/",
        clientCertificate: {
            thumbprint: "{thumbprint}",
            privateKey,
        },
        clientId: "{client id}",
    }
}

export const scopes = ["https://graph.microsoft.com/.default"];
```

2. Run `npm install`
3. Update examples in main.ts then hit F5 to run

