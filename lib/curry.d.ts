import { A2SyncFunction, CurriedA2Function, AnyFunction } from "./types";
export declare const curryV: <T>(fn: AnyFunction<T>) => (...partialArgs: any[]) => any;
export declare const curry2: <T, U, V>(f: A2SyncFunction<T, U, V>) => CurriedA2Function<T, U, V>;
