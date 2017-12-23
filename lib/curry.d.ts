import { CurriedA2Function } from "./types";
import { A2SyncFunction } from "./index";
export declare const curry2: <T, U, V>(f: A2SyncFunction<T, U, V>) => CurriedA2Function<T, U, V>;
