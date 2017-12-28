export declare type AnyFunction<T> = (...a: any[]) => T;
export declare type A1Function<T, U> = (a: T) => U | Promise<U>;
export declare type A1SyncFunction<T, U> = (a: T) => U;
export declare type A2Function<T, U, V> = (a: T, b: U) => V | Promise<V>;
export declare type A2SyncFunction<T, U, V> = (a: T, b: U) => V;
export declare type A3Function<T, U, V, W> = (a: T, b: U, c: V) => W | Promise<W>;
export declare type A3SyncFunction<T, U, V, W> = (a: T, b: U, c: V) => W;
export interface CurriedA2Function<T, U, V> {
    (a: T): (b: U) => V;
    (a: T, b: U): V;
}
export interface CurriedA3Function<T, U, V, W> {
    (a: T): (b: U) => (c: V) => W;
    (a: T, b: U): (c: V) => W;
    (a: T): (b: U, c: V) => W;
    (a: T, b: U, c: V): W;
}
export declare type P<T> = T | Promise<T>;
export declare type Reducer<U, V, W = V> = (out: V, curr: U, currentIndex?: number, array?: U[]) => W;
export declare type Recordable<K extends string, KV extends string> = {
    [k in K]: KV;
} & IDictionary<any>;
export interface IDictionary<T> {
    [key: string]: T;
}
