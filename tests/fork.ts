import { fork } from "../lib";
import { forkAsync } from "../lib/fork";

describe("fork", () => {
    it("calls and combines functions", () => {
        const expected = 5;

        const actual = fork<number, number, number, number>(
            (x, y) => x + y,
            a => a + 1,
            b => b + 2
        )(1);

        expect(actual).toBe(expected);
    });
});

describe("forkAsync", () => {
    it("resolves and combines functions", async () => {
        const delay = async <T>(x: T): Promise<T> =>
            new Promise<T>(r => setTimeout(() => r(x), 1));

        const actual = await forkAsync<number, number, number, number>(
            async (x, y) => (await delay(x)) + (await delay(y)),
            x => delay(x),
            y => delay(y)
        )(delay(1));

        expect(actual).toBe(2);
    });
});
