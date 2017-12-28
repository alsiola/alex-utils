import { curry2 } from "./curry";
import { CurriedA2Function } from "./types";

export const add = curry2((a: number, b: number) => a + b);
