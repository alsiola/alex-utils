import { Just, Nothing, Maybe } from "./maybe";

export const tailM = <T>(arr: T[]): Maybe<T[]> => {
    return arr.length > 1 ? Just.from(arr.slice(1)) : Nothing.from();
};
