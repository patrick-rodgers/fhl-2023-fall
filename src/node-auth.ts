import { ConfidentialClientApplication } from "@azure/msal-node";
import { configuration, scopes } from "./node-auth-settings.js";

export async function getAuthorizationHeaderValue(): Promise<string> {

    const confidentialClient = new ConfidentialClientApplication(configuration);

    const token = await confidentialClient.acquireTokenByClientCredential({ scopes });

    return `${token.tokenType} ${token.accessToken}`;
}
