import { A1SyncFunction, A3SyncFunction, P } from "./types";

export const trident = <T, U, V, W, X>(
    fCombine: A3SyncFunction<U, V, W, X>,
    fLeft: A1SyncFunction<T, U>,
    fMiddle: A1SyncFunction<T, V>,
    fRight: A1SyncFunction<T, W>
) => (a: T): X => fCombine(fLeft(a), fMiddle(a), fRight(a));

export const tridentAsync = <T, U, V, W, X>(
    fCombine: A3SyncFunction<P<U>, P<V>, P<W>, P<X>>,
    fLeft: A1SyncFunction<P<T>, P<U>>,
    fMiddle: A1SyncFunction<P<T>, P<V>>,
    fRight: A1SyncFunction<P<T>, P<W>>
) => (a: P<T>): Promise<X> =>
    Promise.resolve(a).then(ra =>
        Promise.all([fLeft(ra), fMiddle(ra), fRight(ra)]).then(([l, m, r]) =>
            fCombine(l, m, r)
        )
    );
