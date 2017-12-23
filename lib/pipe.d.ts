import { A1Function, A1SyncFunction } from "./types";
export declare const pipe: <T, U>(...fns: A1SyncFunction<any, any>[]) => (a: T) => U;
export declare const pipeAsync: <T, U>(...fns: A1Function<any, any>[]) => (a: T | Promise<T>) => U;
