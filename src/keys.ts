export const keys = <K extends string>(a: { [k in K]: any }): K[] => {
    return Object.keys(a) as K[];
};
