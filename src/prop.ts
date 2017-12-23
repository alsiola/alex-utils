export const prop = <K extends string>(p: K) => <T>(a: { [k in K]: T }): T =>
    a[p];
