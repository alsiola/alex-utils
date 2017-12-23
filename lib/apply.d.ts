import { AnyFunction } from "./types";
export declare const apply: <T>(f: AnyFunction<T>, thisArg?: any) => (...a: any[]) => T;
