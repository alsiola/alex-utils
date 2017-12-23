export declare type AnyFunction<T> = (...a: any[]) => T;
export declare type A1Function<T, U> = (a: T) => U | Promise<U>;
export declare type A1SyncFunction<T, U> = (a: T) => U;
export declare type A2Function<T, U, V> = (a: T, b: U) => V | Promise<V>;
export declare type A2SyncFunction<T, U, V> = (a: T, b: U) => V;
export declare type CurriedA2Function<T, U, V> = (a: T) => A1SyncFunction<U, V>;
export declare type Reducer<U, V, W = V> = (out: V, curr: U, currentIndex?: number, array?: U[]) => W;
export declare type Propable<T> = IDictionary<T | IDictionary<T>>;
export interface IDictionary<T> {
    [key: string]: T;
}
