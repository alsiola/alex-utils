import { A1SyncFunction } from "..";
export interface Maybe<T, U = void> {
    map: <V, W>(fn: (a: T) => V) => Maybe<V>;
    apply: (a: T) => Maybe<U>;
    withDefault: (def: T) => T;
    isNothing: () => boolean;
}
export declare class Just<T, U = void> implements Maybe<T, U> {
    private value;
    constructor(value: T | A1SyncFunction<T, U>);
    static from<V, W = void>(a: V | A1SyncFunction<V, W>): Just<V, W>;
    map<V>(fn: A1SyncFunction<T, V>): Maybe<V>;
    apply(a: T): Maybe<U>;
    isNothing(): boolean;
    withDefault(def: T): T;
}
export declare class Nothing<T, U = void> implements Maybe<T, U> {
    static from<U, V = void>(): Nothing<U, V>;
    map<V>(fn: (a: T) => V): Maybe<V>;
    apply(a: T): Maybe<U>;
    isNothing(): boolean;
    withDefault(def: T): T;
}
