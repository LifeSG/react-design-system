// recursively maps object property types to the specified type
export type PropertiesToType<Model, Type> = {
    [Key in keyof Model]: Model[Key] extends object
        ? PropertiesToType<Model[Key], Type>
        : Type;
};

// get properties that are not marked optional
export type RequiredKeys<T> = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K;
}[keyof T];

// Gets a union of numbers from 1 to N e.g. Range<3> evaluates to 1 | 2 |3
export type Range<
    N extends number,
    Result extends number[] = []
> = Result["length"] extends N
    ? Exclude<Result[number] | N, 0>
    : Range<N, [...Result, Result["length"]]>;

//Increments a numeric literal e.g. AddOne<1> evaluates to 2
export type AddOne<
    N extends number,
    Result extends number[] = []
> = Result["length"] extends N
    ? [...Result, Result["length"]]["length"]
    : AddOne<N, [...Result, Result["length"]]>;

// Extract the string keys of an object
export type KeyOf<T extends object> = Extract<keyof T, string>;
