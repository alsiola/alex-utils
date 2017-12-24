import { A2SyncFunction, Reducer } from "./types";
import { curry2 } from "./curry";

/**
 * Data-last reduce function
 * @param f The reducer
 * @param seed Initial value
 */
export const reduce = <U, V>(f: Reducer<U, V>, seed: V) => (a: U[]): V =>
    a.reduce(f, seed);

/**
 * Data last async reduce function
 * @param f The reducer (may be async)
 * @param seed Initial value (may be a promise)
 */
export const reduceAsync = <U, V>(
    f: Reducer<U, V, V | Promise<V>>,
    seed: V | Promise<V>
) => (a: Array<U | Promise<U>>): Promise<V> =>
    Promise.resolve(
        a.reduce(
            (out, curr) =>
                Promise.all([out, curr]).then(([out, curr]) => f(out, curr)),
            Promise.resolve(seed)
        )
    );
