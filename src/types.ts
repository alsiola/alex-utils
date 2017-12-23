export type AnyFunction<T> = (...a: any[]) => T;

export type A1Function<T, U> = (a: T) => U | Promise<U>;
export type A1SyncFunction<T, U> = (a: T) => U;

export type A2Function<T, U, V> = (a: T, b: U) => V | Promise<V>;
export type A2SyncFunction<T, U, V> = (a: T, b: U) => V;

export type CurriedA2Function<T, U, V> = (a: T) => A1SyncFunction<U, V>;

export type Reducer<U, V, W = V> = (
    out: V,
    curr: U,
    currentIndex?: number,
    array?: U[]
) => W;

export type Propable<T> = IDictionary<T | IDictionary<T>>;

export interface IDictionary<T> {
    [key: string]: T;
}
