import { Just, Nothing, Maybe } from "./maybe";

export const headM = <T>(arr: T[]): Maybe<T> => {
    return arr.length > 0 ? Just.from(arr[0]) : Nothing.from();
};
