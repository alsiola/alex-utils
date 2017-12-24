import { A2SyncFunction, CurriedA2Function, AnyFunction } from "./types";

export const curryV = <T>(fn: AnyFunction<T>) => (...partialArgs: any[]) => {
    if (partialArgs.length < fn.length) {
        return (...restArgs: any[]) => curryV(fn)(...partialArgs, ...restArgs);
    }
    return fn.apply(null, partialArgs);
};

export const curry2 = <T, U, V>(
    f: A2SyncFunction<T, U, V>
): CurriedA2Function<T, U, V> => curryV(f);
