import { identity } from "../lib";

describe("identity", () => {
    it("returns argument when called", () => {
        const expected = 5;

        const actual = identity(5);

        expect(actual).toBe(expected);
    });
});
