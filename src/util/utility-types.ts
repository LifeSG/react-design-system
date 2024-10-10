import { DefaultTheme } from "styled-components";

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

// uses the range and if there is no max defined it just becomes a number
export type ColSpan<Max extends number | undefined> = Max extends number
    ? Range<Max> | [Range<AddOne<Max>>, Range<AddOne<Max>>] | undefined
    : number | [number, number] | undefined;

// using generic breakpointspan to extract column span for a specific breakpoint
export type BreakpointSpan<
    Breakpoint extends keyof DefaultTheme["maxColumns"]
> = DefaultTheme["maxColumns"] extends Record<
    Breakpoint,
    infer Max extends number
>
    ? ColSpan<Max>
    : number | [number, number] | undefined;
