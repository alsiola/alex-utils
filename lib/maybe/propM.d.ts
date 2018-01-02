import { Maybe } from "./maybe";
export declare const propM: <K extends string>(p: K) => <T>(a: {
    [k in K]: T;
}) => Maybe<T, void>;
