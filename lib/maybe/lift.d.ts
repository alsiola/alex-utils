import { A1SyncFunction } from "../types";
import { Maybe } from "./maybe";
export declare const lift: <T, U>(f: A1SyncFunction<T, U>) => (a: Maybe<T, void>) => Maybe<U, void>;
