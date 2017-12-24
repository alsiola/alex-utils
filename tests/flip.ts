import { flip, curryFlip } from "../lib";

describe("flip", () => {
    it("reverses argument order in arity-2 function", () => {
        const concat = (a: string, b: string) => a + b;

        const flipped = flip(concat);

        const actual = flipped("there", "hello ");

        expect(actual).toBe("hello there");
    });
});

describe("curryFlip", () => {
    it("reverses argument order and curries arity-2 function", () => {
        const concat = (a: string, b: string) => a + b;

        const curryFlipped = curryFlip(concat);

        const actual = curryFlipped("there")("hello ");

        expect(actual).toBe("hello there");
    });
});
