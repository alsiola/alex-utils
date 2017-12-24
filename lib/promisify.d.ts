export declare const promisify: <T, U, V>(f: (a: T, cb: (err: Error, result: U) => void) => V) => (a: T) => Promise<U>;
