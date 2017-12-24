export declare type Delay = (ms: number) => Promise<void>;
/**
 * Returns a promise that resolves after ms milliseconds
 * @param ms Milliseconds to delay for
 */
export declare const delay: Delay;
