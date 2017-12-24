import { curry2 } from "./curry";
import { flip } from "./flip";
import { pipe } from "./pipe";
import { promisify } from "./promisify";

export type Delay = (ms: number) => Promise<void>;

/**
 * Returns a promise that resolves after ms milliseconds
 * @param ms Milliseconds to delay for
 */
export const delay = pipe<typeof setTimeout, Delay>(flip, promisify)(
    setTimeout
);
