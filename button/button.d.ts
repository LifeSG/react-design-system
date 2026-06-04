import React from "react";
import type { ButtonProps } from "./types";
export declare const Button: ((props: ButtonProps & React.RefAttributes<HTMLButtonElement>) => React.ReactElement | null) & {
    /** @deprecated Use the `sizeType` prop instead: `<Button>` or `<Button sizeType="default">` */
    Default: (props: ButtonProps & React.RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
    /** @deprecated Use the `sizeType` prop instead: `<Button sizeType="small">` */
    Small: (props: ButtonProps & React.RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
    /** @deprecated Use the `sizeType` prop instead: `<Button sizeType="large">` */
    Large: (props: ButtonProps & React.RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
};
