import { reduce } from "./reduce";
import { add } from ".";

export const sum = reduce(add, 0);
