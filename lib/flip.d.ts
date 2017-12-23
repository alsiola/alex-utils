import { A2SyncFunction, CurriedA2Function } from "./types";
export declare const flip: <T, U, V>(f: A2SyncFunction<T, U, V>) => A2SyncFunction<U, T, V>;
export declare const curryFlip: <T, U, V>(f: A2SyncFunction<T, U, V>) => CurriedA2Function<U, T, V>;
