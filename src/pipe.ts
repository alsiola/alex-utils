import { A1Function, A1SyncFunction, A2SyncFunction } from "./types";

/**
 * Create a function that applies all passed functions in turn
 * I.e. pipe(f, g, h) = h . g . f
 * @param fns Functions to combine
 */
export const pipe = <T, U>(...fns: Array<A1SyncFunction<any, any>>) => (
    a: T
): U => fns.reduce((out, curr) => curr(out), a);

/**
 * Create a function that applies all passed (possibly async) functions in turn
 * @param fns Functions to combine
 */
export const pipeAsync = <T, U>(...fns: Array<A1Function<any, any>>) => (
    a: T | Promise<T>
): U =>
    fns.reduce(
        (out: any | Promise<any>, curr) => Promise.resolve(out).then(curr),
        a
    );
