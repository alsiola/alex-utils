import { map, mapAsync, mapObject, mapObjectAsync } from "../lib";

const delay = <T>(x: T): Promise<T> =>
    new Promise(r => setTimeout(() => r(x), 1));

describe("map", () => {
    it("applies a function to an array", () => {
        const expected = [1, 2, 3];

        const actual = map<number, number>(x => x + 1)([0, 1, 2]);

        expect(actual).toEqual(expected);
    });
});

describe("mapObject", () => {
    it("applies a function to each value in an object", () => {
        const expected = {
            a: 2,
            b: 3,
            c: 4
        };

        const actual = mapObject<number, number>(x => x + 1)({
            a: 1,
            b: 2,
            c: 3
        });

        expect(actual).toEqual(expected);
    });
});

describe("mapAsync", () => {
    it("applies an async function to an array", async () => {
        const expected = [1, 2, 3];

        const actual = await mapAsync<number, number>(delay)([1, 2, 3]);

        expect(actual).toEqual(expected);
    });

    it("applies a sync function to an array of promises", async () => {
        const input = [delay(1), delay(2), delay(3)];

        const expected = [1, 2, 3];

        const actual = await mapAsync<number, number>(x => x)(input);

        expect(actual).toEqual(expected);
    });

    it("applies an async function to an array of promises", async () => {
        const input = [delay(1), delay(2), delay(3)];

        const expected = [1, 2, 3];

        const actual = await mapAsync<number, number>(x => delay(x))(input);

        expect(actual).toEqual(expected);
    });

    it("applies a sync function to an mixed array of promises and values", async () => {
        const input = [delay(1), delay(2), 3];

        const expected = [1, 2, 3];

        const actual = await mapAsync<number, number>(x => x)(input);

        expect(actual).toEqual(expected);
    });

    it("applies an async function to an mixed array of promises and values", async () => {
        const input = [delay(1), delay(2), 3];

        const expected = [1, 2, 3];

        const actual = await mapAsync<number, number>(x => delay(x))(input);

        expect(actual).toEqual(expected);
    });
});

describe("mapObjectAsync", () => {
    it("applies an async function to an object", async () => {
        const expected = {
            a: 2,
            b: 3,
            c: 4
        };

        const actual = await mapObjectAsync<number, number>(delay)({
            a: 2,
            b: 3,
            c: 4
        });

        expect(actual).toEqual(expected);
    });

    it("applies a sync function to an object of promises", async () => {
        const input = {
            a: delay(2),
            b: delay(3),
            c: delay(4)
        };

        const expected = {
            a: 2,
            b: 3,
            c: 4
        };

        const actual = await mapObjectAsync<number, number>(x => x)(input);

        expect(actual).toEqual(expected);
    });

    it("applies an async function to an object of promises", async () => {
        const input = {
            a: 2,
            b: 3,
            c: 4
        };

        const expected = {
            a: 2,
            b: 3,
            c: 4
        };

        const actual = await mapObjectAsync<number, number>(x => delay(x))(
            input
        );

        expect(actual).toEqual(expected);
    });

    it("applies a sync function to an mixed object of promises and values", async () => {
        const input = {
            a: 2,
            b: delay(3),
            c: 4
        };

        const expected = {
            a: 2,
            b: 3,
            c: 4
        };

        const actual = await mapObjectAsync<number, number>(x => x)(input);

        expect(actual).toEqual(expected);
    });

    it("applies an async function to an mixed object of promises and values", async () => {
        const input = {
            a: 2,
            b: delay(3),
            c: 4
        };

        const expected = {
            a: 2,
            b: 3,
            c: 4
        };

        const actual = await mapObjectAsync<number, number>(x => delay(x))(
            input
        );

        expect(actual).toEqual(expected);
    });
});
