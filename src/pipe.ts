import { A1Function, A1SyncFunction, A2SyncFunction } from "./types";

export const pipe = <T, U>(...fns: Array<A1SyncFunction<any, any>>) => (
    a: T
): U => fns.reduce((out, curr) => curr(out), a);

export const pipeAsync = <T, U>(...fns: Array<A1Function<any, any>>) => (
    a: T | Promise<T>
): U =>
    fns.reduce(
        (out: any | Promise<any>, curr) => Promise.resolve(out).then(curr),
        a
    );
