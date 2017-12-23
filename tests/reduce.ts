import { reduce, reduceAsync } from "../lib";

const delay = <T>(x: T): Promise<T> =>
    new Promise(r => setTimeout(() => r(x), 1));

describe("reduce", () => {
    it("applies a function to an array", () => {
        const expected = 6;

        const actual = reduce<number, number>((x, y) => x + y, 0)([1, 2, 3]);

        expect(actual).toEqual(expected);
    });
});

describe("reduceAsync", () => {
    it("applies an async function to an array", async () => {
        const expected = 6;

        const actual = await reduceAsync<number, number>(
            (x, y) => delay(x + y),
            0
        )([1, 2, 3]);

        expect(actual).toEqual(expected);
    });

    it("applies a sync function to an array of promises", async () => {
        const input = [delay(1), delay(2), delay(3)];

        const expected = 6;

        const actual = await reduceAsync<number, number>((x, y) => x + y, 0)(
            input
        );

        expect(actual).toEqual(expected);
    });

    it("applies an async function to an array of promises", async () => {
        const input = [delay(1), delay(2), delay(3)];

        const expected = 6;

        const actual = await reduceAsync<number, number>(
            (x, y) => delay(x + y),
            0
        )(input);

        expect(actual).toEqual(expected);
    });

    it("applies a sync function to an mixed array of promises and values", async () => {
        const input = [delay(1), delay(2), 3];

        const expected = 6;

        const actual = await reduceAsync<number, number>((x, y) => x + y, 0)(
            input
        );

        expect(actual).toEqual(expected);
    });

    it("applies an async function to an mixed array of promises and values", async () => {
        const input = [delay(1), delay(2), 3];

        const expected = 6;

        const actual = await reduceAsync<number, number>(
            (x, y) => delay(x + y),
            0
        )(input);

        expect(actual).toEqual(expected);
    });
});
