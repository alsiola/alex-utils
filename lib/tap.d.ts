import { A1SyncFunction } from ".";
/**
 * Tap combinator
 * @param f Function to call with passed value
 */
export declare const tap: <T>(f: A1SyncFunction<T, any>) => (a: T) => T;
