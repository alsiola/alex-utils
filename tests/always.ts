import { always } from "../lib";

describe("always", () => {
    it("returns a function that returns argument", () => {
        const expected = 5;

        const actual = always(5)();

        expect(actual).toBe(expected);
    });
});
