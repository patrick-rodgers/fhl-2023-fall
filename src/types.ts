import { GraphService } from "./generated-types.js";

/**
 * Essentially any call able async function
 */
export type BatchableFunc = (...args: any[]) => Promise<any>

/**
 * Either a function that is batched directly, or a function, arguments array pair that will be invoked within the batch operation
 */
export type Batchable = BatchableFunc | [BatchableFunc, [...args: any[]]];

/**
 * Defines the target of the proxy operations used internally
 */
export interface ITarget extends GraphService {
    /**
     * The base request url [<default>https://graph.microsoft.com/v1.0|https://graph.microsoft.com/beta]
     */
    _baseUrl: string;
    /**
     * The set of path segments that will be joined into the url
     */
    _paths: string[],
    /**
     * The operation function that will execute the request
     * 
     * @param args Catch-all for args
     * @returns The operation result (usually json)
     */
    _op: (...args: any[]) => Promise<any>;
    /**
     * query string params that will be appended to the request url
     */
    _query: Map<string, string>;
    /**
     * tracks if within one proxy cycle a member is being both accessed (get) and invoked (apply) indicating it is a function call
     */
    _flag: boolean;
    /**
     * tracks the last entity name that was set, explicitly or implicitly for example with byId
     */
    _lastEntity: string;
}