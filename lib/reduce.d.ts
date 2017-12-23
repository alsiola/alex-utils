import { Reducer } from "./types";
export declare const reduce: <U, V>(f: Reducer<U, V, V>, seed: V) => (a: U[]) => V;
export declare const reduceAsync: <U, V>(f: Reducer<U, V, V | Promise<V>>, seed: V | Promise<V>) => (a: (U | Promise<U>)[]) => Promise<V>;
