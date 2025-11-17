// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref/58473012

import React from "react";

declare module "react" {
    function forwardRef<T, P = Record<string, never>>(
        render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
    ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;

    interface HTMLAttributes<T> extends HTMLAttributes<T> {
        inert?: boolean | string | undefined;
    }
}
