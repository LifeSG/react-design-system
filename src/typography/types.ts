export type TypographySizeType =
    | "HeaderXXL"
    | "HeaderXL"
    | "HeaderLG"
    | "HeaderMD"
    | "HeaderSM"
    | "HeaderXS"
    | "BodyBL"
    | "BodyLG"
    | "BodyMD"
    | "BodySM"
    | "LinkBL"
    | "LinkMD"
    | "LinkLG"
    | "LinkSM";

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

export type TextStyleSetType = {
    [key in TypographySizeType]: TypographyStyleSpec;
};

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    // Can be any weight such as regular or 400
    weight?: TypographyWeight;
    // For consumer to choose if they want the text to be inline for example
    inline?: boolean;
    // For consumer to choose for block level style
    paragraph?: boolean;
}

export interface LinkProps extends TypographyProps {
    // If the link is external
    external?: boolean;
    textStyle?: TypographySizeType;
}
