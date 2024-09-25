export type TypographySizeType =
    | "header-xxl"
    | "header-xl"
    | "header-lg"
    | "header-md"
    | "header-sm"
    | "header-xs"
    | "body-baseline"
    | "body-lg"
    | "body-md"
    | "body-sm";

export interface TypographyStyleSpec {
    fontSize?: number | undefined;
    fontWeight?: number | undefined;
    lineHeight?: number | undefined;
    letterSpacing?: number | undefined;
}

export type TypographyWeight =
    | "regular"
    | "semibold"
    | "bold"
    | "light"
    | 400
    | 600
    | 700
    | 300;

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    // Can be any weight such as regular or 400
    weight?: TypographyWeight | undefined;
    // For consumer to choose if they want the text to be inline for example
    inline?: boolean | undefined;
    // For consumer to choose for block level style
    paragraph?: boolean | undefined;
}

export interface LinkProps extends TypographyProps {
    // If the link is external
    external?: boolean;
}
