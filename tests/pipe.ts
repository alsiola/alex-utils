import { pipe, pipeAsync } from "../lib";

const delay = <T>(x: T): Promise<T> =>
    new Promise(r => setTimeout(() => r(x), 1));

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

describe("pipeAsync", () => {
    it("combines async functions", async () => {
        const expected = 5;

        const actual = await pipeAsync<number, number>(
            x => delay(x + 1),
            x => delay(x + 2),
            x => delay(x * 2),
            x => delay(x - 1)
        )(0);

        expect(actual).toBe(expected);
    });

    it("combines mixed async and sync functions", async () => {
        const expected = 5;

        const actual = await pipeAsync<number, number>(
            x => x + 1,
            x => delay(x + 2),
            x => delay(x * 2),
            x => delay(x - 1)
        )(0);

        expect(actual).toBe(expected);
    });

    it("resolves a promise argument", async () => {
        const expected = 5;

        const actual = await pipeAsync<number, number>(
            x => x + 1,
            x => delay(x + 2),
            x => delay(x * 2),
            x => delay(x - 1)
        )(delay(0));

        expect(actual).toBe(expected);
    });
});
