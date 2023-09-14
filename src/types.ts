import { GraphService } from "./generated-types.js";

export type BatchableFunc = (...args: any[]) => Promise<any>
export type Batchable = BatchableFunc | [BatchableFunc, [...args: any[]]];

export interface ITarget extends GraphService {
    _baseUrl: string;
    _paths: string[],
    _op: (...args: any[]) => Promise<any>;
    _query: Map<string, string>;
}