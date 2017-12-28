import { curry2 } from "./curry";
import { CurriedA2Function } from "./types";

export const divide = curry2((a: number, b: number) => b / a);
