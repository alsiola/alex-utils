import { A2SyncFunction, CurriedA2Function } from "./types";
import { curry2 } from "./curry";

/**
 * Reverses the argument order of an arity-two function
 * @param f The function to flip
 */
export const flip = <T, U, V>(
    f: A2SyncFunction<T, U, V>
): A2SyncFunction<U, T, V> => (a, b) => f(b, a);

/**
 * Reverses the argument order of an arity-two function and curries the result
 * @param f The function to flip and curry
 */
export const curryFlip = <T, U, V>(
    f: A2SyncFunction<T, U, V>
): CurriedA2Function<U, T, V> => curry2(flip(f));
