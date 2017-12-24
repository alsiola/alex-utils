/**
 * Get an array of an objects keys
 * @param a An object
 */
export declare const keys: <K extends string>(a: {
    [k in K]: any;
}) => K[];
