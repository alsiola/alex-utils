import { curry2, curryV, AnyFunction, A1SyncFunction } from "../lib";

describe("curryV", () => {
    it("converts arity-two function to partially applicable function", () => {
        const add = (a: number, b: number) => a + b;
        const curriedAdd = curryV(add);

        const expected = add(5, 6);
        const actual = (curriedAdd(5) as A1SyncFunction<number, number>)(6);

        expect(actual).toBe(expected);
    });

    it("converts arity-two function to fully applicable function", () => {
        const add = (a: number, b: number) => a + b;
        const curriedAdd = curryV(add);

        const expected = add(5, 6);
        const actual = curriedAdd(5, 6) as number;

        expect(actual).toBe(expected);
    });

    it("converts arity-two function to partially applicable function", () => {
        const add = (a: number, b: number) => a + b;
        const curriedAdd = curryV(add);

        const expected = add(5, 6);
        const actual = (curriedAdd(5) as A1SyncFunction<number, number>)(6);

        expect(actual).toBe(expected);
    });

    it("converts arity-three function to partially applicable function", () => {
        const add = (a: number, b: number, c: number) => a + b + c;
        const curriedAdd = curryV(add);

        const expected = add(5, 6, 7);

        const actual1 = ((curriedAdd(5) as A1SyncFunction<
            number,
            A1SyncFunction<number, number>
        >)(6) as A1SyncFunction<number, number>)(7);

        const actual2 = (curriedAdd(5, 6) as A1SyncFunction<number, number>)(7);

        expect(actual1).toBe(expected);
    });
});

describe("curry2", () => {
    it("converts arity-two function to partially-applicable function", () => {
        const add = (a: number, b: number) => a + b;
        const curriedAdd = curry2(add);

        const expected = add(5, 6);
        const actual = curriedAdd(5)(6);

        expect(actual).toBe(expected);
    });

    it("converts arity-two function to fully-applicable function", () => {
        const add = (a: number, b: number) => a + b;
        const curriedAdd = curry2(add);

        const expected = add(5, 6);
        const actual = curriedAdd(5, 6);

        expect(actual).toBe(expected);
    });
});
