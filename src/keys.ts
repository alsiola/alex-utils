/**
 * Get an array of an objects keys
 * @param a An object
 */
export const keys = <K extends string>(a: { [k in K]: any }): K[] => {
    return Object.keys(a) as K[];
};
