export type AnyFunction<T> = (...a: any[]) => T;

export type A1Function<T, U> = (a: T) => U | Promise<U>;
export type A1SyncFunction<T, U> = (a: T) => U;

export type A2Function<T, U, V> = (a: T, b: U) => V | Promise<V>;
export type A2SyncFunction<T, U, V> = (a: T, b: U) => V;

export type A3Function<T, U, V, W> = (a: T, b: U, c: V) => W | Promise<W>;
export type A3SyncFunction<T, U, V, W> = (a: T, b: U, c: V) => W;

export interface CurriedA2Function<T, U, V> {
    (a: T): (b: U) => V;
    (a: T, b: U): V;
}

export type P<T> = T | Promise<T>;

export type Reducer<U, V, W = V> = (
    out: V,
    curr: U,
    currentIndex?: number,
    array?: U[]
) => W;

export type Propable<T> = IDictionary<T | IDictionary<T>>;

export type Recordable<K extends string, KV extends string, T> = {
    [k in K]: KV
} &
    IDictionary<any>;

export interface IDictionary<T> {
    [key: string]: T;
}
