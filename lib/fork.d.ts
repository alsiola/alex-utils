import { A2Function, A1Function, A1SyncFunction, A2SyncFunction } from "./types";
export declare const fork: <T, U, V, W>(fCombine: A2SyncFunction<U, V, W>, fLeft: A1SyncFunction<T, U>, fRight: A1SyncFunction<T, V>) => (a: T) => W;
export declare const forkAsync: <T, U, V, W>(fCombine: A2Function<U | Promise<U>, V | Promise<V>, W | Promise<W>>, fLeft: A1Function<T | Promise<T>, U | Promise<U>>, fRight: A1Function<T | Promise<T>, V | Promise<V>>) => (a: T | Promise<T>) => W | Promise<W>;
