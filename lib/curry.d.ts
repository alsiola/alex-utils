import { A2SyncFunction, CurriedA2Function, AnyFunction } from "./types";
export declare type CurryV = <T>(f: AnyFunction<T>) => (...args: any[]) => T | AnyFunction<T | AnyFunction<T>>;
/**
 * Curries any function with well-defined (not rest) arguments
 * @param f The function to curry
 */
export declare const curryV: CurryV;
/**
 * Curries an arity-2 function
 * @param f Arity-2 function to curry
 */
export declare const curry2: <T, U, V>(f: A2SyncFunction<T, U, V>) => CurriedA2Function<T, U, V>;
