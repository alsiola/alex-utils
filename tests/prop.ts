import { prop } from "../lib";

describe("prop", () => {
    it("extracts an object property", () => {
        const expected = 5;

        const actual = prop("a")({ a: 5 });

        expect(actual).toBe(expected);
    });
});
