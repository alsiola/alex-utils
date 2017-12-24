import { A1Function, A1SyncFunction } from "./types";
/**
 * Create a function that applies all passed functions in turn
 * I.e. pipe(f, g, h) = h . g . f
 * @param fns Functions to combine
 */
export declare const pipe: <T, U>(...fns: A1SyncFunction<any, any>[]) => (a: T) => U;
/**
 * Create a function that applies all passed (possibly async) functions in turn
 * @param fns Functions to combine
 */
export declare const pipeAsync: <T, U>(...fns: A1Function<any, any>[]) => (a: T | Promise<T>) => U;
