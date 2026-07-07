import type { SingpassButtonProps } from "./types";
export declare const SingpassButton: ((props: SingpassButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null) & {
    /** @deprecated Use the `sizeType` prop instead: `<SingpassButton>` or `<SingpassButton sizeType="default">` */
    Default: (props: SingpassButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
    /** @deprecated Use the `sizeType` prop instead: `<SingpassButton sizeType="small">` */
    Small: (props: SingpassButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
    /** @deprecated Use the `sizeType` prop instead: `<SingpassButton sizeType="large">` */
    Large: (props: SingpassButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
};
