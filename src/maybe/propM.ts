import { Just, Nothing, Maybe } from "./maybe";

export const propM = <K extends string>(p: K) => <T>(
    a: { [k in K]: T }
): Maybe<T> => (p in a ? Just.from(a[p]) : Nothing.from());
