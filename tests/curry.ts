import { curry2 } from "../lib/curry";

describe("curry", () => {
    it("converts arity-two function to curried function", () => {
        const add = (a: number, b: number) => a + b;
        const curriedAdd = curry2(add);

        const expected = add(5, 6);
        const actual = curriedAdd(5)(6);

        expect(actual).toBe(expected);
    });
});
