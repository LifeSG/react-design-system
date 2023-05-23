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
