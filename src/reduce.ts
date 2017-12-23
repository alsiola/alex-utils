import { A2SyncFunction, Reducer } from "./types";
import { curry2 } from "./curry";

export const reduce = <U, V>(f: Reducer<U, V>, seed: V) => (a: U[]): V =>
    a.reduce(f, seed);

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
