import {
    A2Function,
    A1Function,
    A1SyncFunction,
    A2SyncFunction,
    P
} from "./types";

/**
 * Fork combinator
 * @param fCombine Combining function
 * @param fLeft Left branch function
 * @param fRight Right branch function
 */
export const fork = <T, U, V, W>(
    fCombine: A2SyncFunction<U, V, W>,
    fLeft: A1SyncFunction<T, U>,
    fRight: A1SyncFunction<T, V>
) => (a: T): W => fCombine(fLeft(a), fRight(a));

export const forkAsync = <T, U, V, W>(
    fCombine: A2SyncFunction<P<U>, P<V>, P<W>>,
    fLeft: A1SyncFunction<P<T>, P<U>>,
    fRight: A1SyncFunction<P<T>, P<V>>
) => (a: P<T>): Promise<W> =>
    Promise.resolve(a).then(ra =>
        Promise.all([fLeft(ra), fRight(ra)]).then(([l, r]) => fCombine(l, r))
    ) as any;
