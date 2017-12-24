import { Reducer } from "./types";
/**
 * Data-last reduce function
 * @param f The reducer
 * @param seed Initial value
 */
export declare const reduce: <U, V>(f: Reducer<U, V, V>, seed: V) => (a: U[]) => V;
/**
 * Data last async reduce function
 * @param f The reducer (may be async)
 * @param seed Initial value (may be a promise)
 */
export declare const reduceAsync: <U, V>(f: Reducer<U, V, V | Promise<V>>, seed: V | Promise<V>) => (a: (U | Promise<U>)[]) => Promise<V>;
