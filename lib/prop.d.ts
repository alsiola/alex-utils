/**
 * Get the value of a particular property in an object
 * @param p Prop name
 */
export declare const prop: <K extends string>(p: K) => <T>(a: {
    [k in K]: T;
}) => T;
