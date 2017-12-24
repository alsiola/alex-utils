import { curry2 } from "../lib/curry";

describe("curry", () => {
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
