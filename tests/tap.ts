import { tap } from "../lib";

describe("tap", () => {
    it("returns a function that returns original value", () => {
        const expected = 5;

        const actual = tap<number>(x => x * 2)(5);

        expect(actual).toBe(expected);
    });

    it("calls supplied function with argument", () => {
        const f = jest.fn();

        tap(f)(5);

        expect(f).toBeCalledWith(5);
    });
});
