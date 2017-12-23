import { A1Function, A1SyncFunction } from "./types";
export declare const map: <T, U>(f: A1SyncFunction<T, U>) => (a: T[]) => U[];
export declare const mapAsync: <T, U>(f: A1Function<T, U>) => (a: T[] | Promise<T[]> | (T | Promise<T>)[]) => Promise<U[]>;
export declare const mapObject: <T, U>(f: A1SyncFunction<T, U>) => <K extends string>(a: {
    [k in K]: T;
}) => {
    [k in K]: U;
};
export declare const mapObjectAsync: <T, U>(f: A1Function<T, U>) => <K extends string>(a: {
    [k in K]: T | Promise<T>;
} | Promise<{
    [k in K]: T | Promise<T>;
}>) => Promise<{
    [k in K]: U;
}>;
