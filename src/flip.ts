import { A2SyncFunction, CurriedA2Function } from "./types";
import { curry2 } from "./curry";

export const flip = <T, U, V>(
    f: A2SyncFunction<T, U, V>
): A2SyncFunction<U, T, V> => (a, b) => f(b, a);

export const curryFlip = <T, U, V>(
    f: A2SyncFunction<T, U, V>
): CurriedA2Function<U, T, V> => curry2(flip(f));
