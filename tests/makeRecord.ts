import { makeRecord } from "../lib";

describe("makeRecord", () => {
    it("converts array to keyed object with provided prop", () => {
        const input = [{ a: "one", b: 4 }, { a: "two", b: 3 }];

        const expected = {
            one: { a: "one", b: 4 },
            two: { a: "two", b: 3 }
        };

        const actual = makeRecord("a")(input);

        expect(actual).toEqual(expected);
    });
});
