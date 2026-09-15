import type { SingpassButtonProps } from "./types";
/**
 * Call-to-action for Singpass authentication,
 * following the brand [guidelines](https://docs.developer.singpass.gov.sg/docs/products/login/singpass-button-guidelines-for-developers-and-designers).
 *
 * Use `SingpassButton` to let users log in with their Singpass account.
 * @keywords authentication, login
 */
export declare const SingpassButton: ((props: SingpassButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null) & {
    /** @deprecated Use the `sizeType` prop instead: `<SingpassButton>` or `<SingpassButton sizeType="default">` */
    Default: (props: SingpassButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
    /** @deprecated Use the `sizeType` prop instead: `<SingpassButton sizeType="small">` */
    Small: (props: SingpassButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
    /** @deprecated Use the `sizeType` prop instead: `<SingpassButton sizeType="large">` */
    Large: (props: SingpassButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
};
