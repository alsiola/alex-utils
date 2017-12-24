import { A1Function, A1SyncFunction } from "./types";
import { keys } from "./keys";

type P<T> = T | Promise<T>;

/**
 * Data-last map function
 * @param f Mapping function
 */
export const map = <T, U>(f: A1SyncFunction<T, U>) => (a: T[]) => a.map(f);

/**
 * Data-last async map function where array elements, and map function return may be promises
 * @param f Mapping function
 */
export const mapAsync = <T, U>(f: A1Function<T, U>) => (a: P<T[]> | P<T>[]) =>
    (Array.isArray(a) ? Promise.all(a) : Promise.resolve(a)).then(r =>
        Promise.all(map(f)(r))
    );

/**
 * Map the values of an object
 * @param f Mapping function
 */
export const mapObject = <T, U>(f: A1SyncFunction<T, U>) => <K extends string>(
    a: { [k in K]: T }
): { [k in K]: U } => {
    return Object.entries<T>(a).reduce(
        (out, [k, v]) => ({
            ...out,
            [k]: f(v)
        }),
        {} as any
    );
};

/**
 * Map the values of an object with an async function
 * @param f Mapping function
 */
export const mapObjectAsync = <T, U>(f: A1Function<T, U>) => <K extends string>(
    a: P<{ [k in K]: P<T> }>
): Promise<{ [k in K]: U }> => {
    return Promise.resolve(a).then(o =>
        Promise.all(
            keys(o).map(async key => ({
                key,
                value: await Promise.resolve(o[key] as P<T>).then(f)
            }))
        ).then(results => {
            return results.reduce(
                (out, { key, value }) =>
                    ({
                        ...(out as object),
                        [key]: value
                    } as { [k in K]: U }),
                {} as { [k in K]: U }
            );
        })
    );
};
