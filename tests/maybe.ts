import { propM, Nothing, Just, lift, Maybe } from "../lib";

describe("maybe", () => {
    it("map applies fn to wrapped value in Just", () => {
        const input = Just.from(5);

        const actual = input.map(x => x + 1);

        expect(actual).toBeInstanceOf(Just);
        expect(actual.withDefault(100)).toBe(6);
    });

    it("map applies fn to wrapped value in Nothing", () => {
        const input: Maybe<number> = Nothing.from();

        const actual = input.map(x => x + 1);

        expect(actual).toBeInstanceOf(Nothing);
        expect(actual.withDefault(100)).toBe(100);
    });

    it("apply passes value to wrapped fn", () => {
        const input = Just.from((x: number) => x + 1);

        const actual = input.apply(5);

        expect(actual).toBeInstanceOf(Just);
        expect(actual.withDefault(500)).toBe(6);
    });

    it("apply throws if wrapped value is not function", () => {
        const input = Just.from(5);

        expect(() => input.apply(7)).toThrowErrorMatchingSnapshot();
    });
});

describe("propM", () => {
    it("propM returns just value if present", () => {
        const input = { a: 1 };

        const actual = propM("a")(input);

        const expected = 1;

        expect(actual).toBeInstanceOf(Just);
        expect(actual.withDefault(5)).toBe(expected);
    });

    it("propM returns nothing if not present", () => {
        const input = { a: 1 };

        const actual = propM("b" as any)(input);

        const expected = 100;

        expect(actual).toBeInstanceOf(Nothing);
    });
});

describe("lift", () => {
    it("converts arity-1 function to work on maybe", () => {
        const f = lift((x: number) => x + 1);

        const input = Just.from(5);

        const actual = f(input);

        expect(actual).toBeInstanceOf(Just);
        expect(actual.withDefault(500)).toBe(6);
    });
});
