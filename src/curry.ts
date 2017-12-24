import { A2SyncFunction, CurriedA2Function, AnyFunction } from "./types";

export type CurryV = <T>(
    f: AnyFunction<T>
) => (...args: any[]) => T | AnyFunction<T | AnyFunction<T>>;

export const curryV: CurryV = <T>(fn: AnyFunction<T>) => (
    ...partialArgs: any[]
) => {
    if (partialArgs.length < fn.length) {
        return (...restArgs: any[]) => curryV(fn)(...partialArgs, ...restArgs);
    }
    return fn.apply(null, partialArgs);
};

export const curry2 = <T, U, V>(f: A2SyncFunction<T, U, V>) =>
    curryV(f) as CurriedA2Function<T, U, V>;
