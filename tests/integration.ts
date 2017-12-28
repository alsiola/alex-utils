import * as A from "../lib";

describe("alex-utils", () => {
    it("prop, pipe, fork and reduce work together", () => {
        const input = [{ a: 1, b: 2 }, { a: 2, b: 7 }, { a: 5, b: 4 }];

        const transform = A.pipe(
            A.map(A.fork(A.add, A.prop("a"), A.prop("b"))),
            A.fork(A.divide, A.count, A.sum)
        );

        expect(transform(input)).toBe(7);
    });
});
