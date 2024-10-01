export type TypographyWeight = "regular" | "semibold" | "bold" | "light";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    /** Define the Weight prop such as regular, bold*/
    weight?: TypographyWeight | undefined;
    /** For Inline Styling of Typography text*/
    inline?: boolean | undefined;
    /** For Block Level Styling of Typography text*/
    paragraph?: boolean | undefined;
}

export interface LinkProps extends React.HTMLAttributes<HTMLElement> {
    /** Props such as weight for font weight and external for icon*/
    weight?: TypographyWeight | undefined;
    external?: boolean | undefined;
}
