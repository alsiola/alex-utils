import { A1Function, A1SyncFunction } from "./types";
/**
 * Data-last map function
 * @param f Mapping function
 */
export declare const map: <T, U>(f: A1SyncFunction<T, U>) => (a: T[]) => U[];
/**
 * Data-last async map function where array elements, and map function return may be promises
 * @param f Mapping function
 */
export declare const mapAsync: <T, U>(f: A1Function<T, U>) => (a: T[] | Promise<T[]> | (T | Promise<T>)[]) => Promise<U[]>;
/**
 * Map the values of an object
 * @param f Mapping function
 */
export declare const mapObject: <T, U>(f: A1SyncFunction<T, U>) => <K extends string>(a: {
    [k in K]: T;
}) => {
    [k in K]: U;
};
/**
 * Map the values of an object with an async function
 * @param f Mapping function
 */
export declare const mapObjectAsync: <T, U>(f: A1Function<T, U>) => <K extends string>(a: {
    [k in K]: T | Promise<T>;
} | Promise<{
    [k in K]: T | Promise<T>;
}>) => Promise<{
    [k in K]: U;
}>;
