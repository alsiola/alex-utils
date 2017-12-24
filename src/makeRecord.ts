import { IDictionary, Recordable } from "./types";

export const makeRecord = <K extends string>(prop: K) => <
    KV extends string,
    T extends Recordable<K, KV, T>
>(
    arr: T[]
) => {
    return arr.reduce(
        (out, curr) => ({
            ...out,
            [curr[prop]]: curr
        }),
        {}
    ) as { [k in KV]: T };
};
