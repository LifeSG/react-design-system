// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref/58473012
import React from "react";

declare module "react" {
    function forwardRef<T, P = {}>(
        render: (props: P, ref: Ref<T>) => ReactElement | null
    ): (props: P & RefAttributes<T>) => ReactElement | null;

    interface HTMLAttributes<T> extends HTMLAttributes<T> {
        inert?: string | undefined;
    }
}
