import { A1SyncFunction, A2SyncFunction, P } from "./types";
export declare const fork: <T, U, V, W>(fCombine: A2SyncFunction<U, V, W>, fLeft: A1SyncFunction<T, U>, fRight: A1SyncFunction<T, V>) => (a: T) => W;
export declare const forkAsync: <T, U, V, W>(fCombine: A2SyncFunction<P<U>, P<V>, P<W>>, fLeft: A1SyncFunction<P<T>, P<U>>, fRight: A1SyncFunction<P<T>, P<V>>) => (a: P<T>) => Promise<W>;
