import { A1SyncFunction } from "../types";
import { Maybe } from "./maybe";

export const lift = <T, U>(f: A1SyncFunction<T, U>) => (
    a: Maybe<T>
): Maybe<U> => {
    return a.map(f);
};
