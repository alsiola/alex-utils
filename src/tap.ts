import { A1SyncFunction } from ".";

export const tap = <T>(f: A1SyncFunction<T, any>) => (a: T) => {
    f(a);
    return a;
};
