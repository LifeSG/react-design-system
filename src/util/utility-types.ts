// recursively maps object property types to the specified type
export type PropertiesToType<Model, Type> = {
    [Key in keyof Model]: Model[Key] extends object
        ? PropertiesToType<Model[Key], Type>
        : Type;
};
