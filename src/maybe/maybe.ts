import { A1SyncFunction } from "..";

export interface Maybe<T, U = void> {
    map: <V, W>(fn: (a: T) => V) => Maybe<V>;
    apply: (a: T) => Maybe<U>;
    withDefault: (def: T) => T;
    isNothing: () => boolean;
}

export class Just<T, U = void> implements Maybe<T, U> {
    constructor(private value: T | A1SyncFunction<T, U>) {}

    static from<V, W = void>(a: V | A1SyncFunction<V, W>) {
        return new Just<V, W>(a);
    }

    map<V>(fn: A1SyncFunction<T, V>): Maybe<V> {
        return Just.from(fn(this.value as T));
    }

    apply(a: T): Maybe<U> {
        if (typeof this.value !== "function") {
            throw new Error(
                "Apply is only callable if wrapped value is a function"
            );
        }
        return Just.from(this.value(a));
    }

    isNothing() {
        return false;
    }

    withDefault(def: T): T {
        return this.value as T;
    }
}

export class Nothing<T, U = void> implements Maybe<T, U> {
    static from<U, V = void>() {
        return new Nothing<U, V>();
    }

    map<V>(fn: (a: T) => V): Maybe<V> {
        return Nothing.from<V>();
    }

    apply(a: T): Maybe<U> {
        return Nothing.from<U>();
    }

    isNothing() {
        return true;
    }

    withDefault(def: T): T {
        return def;
    }
}
