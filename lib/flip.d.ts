import { A2SyncFunction, CurriedA2Function } from "./types";
/**
 * Reverses the argument order of an arity-two function
 * @param f The function to flip
 */
export declare const flip: <T, U, V>(f: A2SyncFunction<T, U, V>) => A2SyncFunction<U, T, V>;
/**
 * Reverses the argument order of an arity-two function and curries the result
 * @param f The function to flip and curry
 */
export declare const curryFlip: <T, U, V>(f: A2SyncFunction<T, U, V>) => CurriedA2Function<U, T, V>;
