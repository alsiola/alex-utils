import { pipe } from "../lib";

describe("pipe", () => {
    it("combines passed functions", () => {
        const expected = 5;

        const actual = pipe<number, number>(
            x => x + 1,
            x => x + 2,
            x => x * 2,
            x => x - 1
        )(0);

        expect(actual).toBe(expected);
    });
});
