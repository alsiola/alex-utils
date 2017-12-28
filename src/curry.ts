import {
    A2SyncFunction,
    CurriedA2Function,
    A3SyncFunction,
    CurriedA3Function,
    AnyFunction
} from "./types";

export type CurryV = <T>(
    f: AnyFunction<T>
) => (...args: any[]) => T | AnyFunction<T | AnyFunction<T>>;

/**
 * Curries any function with well-defined (not rest) arguments
 * @param f The function to curry
 */
export const curryV: CurryV = <T>(f: AnyFunction<T>) => (
    ...partialArgs: any[]
) => {
    if (partialArgs.length < f.length) {
        return (...restArgs: any[]) => curryV(f)(...partialArgs, ...restArgs);
    }
    return f.apply(null, partialArgs);
};

/**
 * Curries an arity-2 function
 * @param f Arity-2 function to curry
 */
export const curry2 = <T, U, V>(f: A2SyncFunction<T, U, V>) =>
    curryV(f) as CurriedA2Function<T, U, V>;

/**
 * Curries an arity-3 function
 * @param f Arity-3 function to curry
 */
export const curry3 = <T, U, V, W>(f: A3SyncFunction<T, U, V, W>) =>
    curryV(f) as CurriedA3Function<T, U, V, W>;
