import { A2Function, CurriedA2Function } from "./types";
import { A2SyncFunction } from "./index";

export const curry2 = <T, U, V>(
    f: A2SyncFunction<T, U, V>
): CurriedA2Function<T, U, V> => (a: T) => (b: U) => f(a, b);
