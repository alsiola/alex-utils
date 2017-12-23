import { delay } from "../lib/delay";

describe("delay", () => {
    it("resolves promise after delay", async () => {
        const start = process.hrtime();

        await delay(100);

        const time = process.hrtime(start);

        expect(time[1] / 1000000000).toBeCloseTo(0.1, 1);
    });
});
