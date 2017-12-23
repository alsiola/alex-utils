import { curry2 } from "./curry";
import { flip } from "./flip";

export const delay = (ms: number) =>
    new Promise<void>(curry2(flip(setTimeout))(ms));
