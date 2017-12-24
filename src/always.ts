/**
 * Creates a function that always returns a
 * @param a The value to return from returned function
 */
export const always = <T>(a: T) => (): T => a;
