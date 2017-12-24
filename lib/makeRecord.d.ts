import { Recordable } from "./types";
export declare const makeRecord: <K extends string>(prop: K) => <KV extends string, T extends Recordable<K, KV, T>>(arr: T[]) => {
    [k in KV]: T;
};
