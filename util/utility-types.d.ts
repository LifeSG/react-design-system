export type PropertiesToType<Model, Type> = {
    [Key in keyof Model]: Model[Key] extends object ? PropertiesToType<Model[Key], Type> : Type;
};
export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends {
        [P in K]: T[K];
    } ? never : K;
}[keyof T];
