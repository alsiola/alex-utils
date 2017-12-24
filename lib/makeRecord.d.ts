import { Recordable } from "./types";
/**
 * Transform an array of objects into an object keyed by a particular property
 * @param prop The property to use as the records key
 */
export declare const makeRecord: <K extends string>(prop: K) => <KV extends string, T extends Recordable<K, KV>>(arr: T[]) => Record<KV, T>;
