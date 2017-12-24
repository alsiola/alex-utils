import { curry2 } from "./curry";
import { flip } from "./flip";
import { promisify } from "./promisify";

export type Delay = (ms: number) => Promise<void>;

export const delay: Delay = promisify(curry2(flip(setTimeout)));
