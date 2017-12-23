import {
    A2Function,
    A1Function,
    A1SyncFunction,
    A2SyncFunction
} from "./types";

export const fork = <T, U, V, W>(
    fCombine: A2SyncFunction<U, V, W>,
    fLeft: A1SyncFunction<T, U>,
    fRight: A1SyncFunction<T, V>
) => (a: T): W => fCombine(fLeft(a), fRight(a));

type P<T> = T | Promise<T>;

export const forkAsync = <T, U, V, W>(
    fCombine: A2Function<P<U>, P<V>, P<W>>,
    fLeft: A1Function<P<T>, P<U>>,
    fRight: A1Function<P<T>, P<V>>
) => (a: P<T>): P<W> =>
    Promise.resolve(a).then(a =>
        Promise.all([fLeft(a), fRight(a)]).then(([b, c]) => fCombine(b, c))
    ) as P<W>;
