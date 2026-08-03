export type PropertiesToType<Model, Type> = {
    [Key in keyof Model]: Model[Key] extends object ? PropertiesToType<Model[Key], Type> : Type;
};
export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends {
        [P in K]: T[K];
    } ? never : K;
}[keyof T];
export type Range<N extends number, Result extends number[] = []> = Result["length"] extends N ? Exclude<Result[number] | N, 0> : Range<N, [...Result, Result["length"]]>;
export type AddOne<N extends number, Result extends number[] = []> = Result["length"] extends N ? [...Result, Result["length"]]["length"] : AddOne<N, [...Result, Result["length"]]>;
export type KeyOf<T extends object> = Extract<keyof T, string>;
