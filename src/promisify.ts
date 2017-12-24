export const promisify = <T, U, V>(
    f: (a: T, cb: (err: Error, result: U) => void) => V
) => (a: T): Promise<U> =>
    new Promise((resolve, reject) =>
        f(a, (err, res) => (err ? reject(err) : resolve(res)))
    );
