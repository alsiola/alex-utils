import { A2SyncFunction, CurriedA2Function, AnyFunction } from "./types";
export declare type CurryV = <T>(f: AnyFunction<T>) => (...args: any[]) => T | AnyFunction<T | AnyFunction<T>>;
export declare const curryV: CurryV;
export declare const curry2: <T, U, V>(f: A2SyncFunction<T, U, V>) => CurriedA2Function<T, U, V>;
