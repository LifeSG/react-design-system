export type TypographyWeight = "regular" | "semibold" | "bold" | "light";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    //Weight prop such as regular, bold
    weight?: TypographyWeight | undefined;
    // For consumer to choose if they want the text to be inline for example
    inline?: boolean | undefined;
    // For consumer to choose for block level style
    paragraph?: boolean | undefined;
}

export interface LinkProps extends React.HTMLAttributes<HTMLElement> {
    // If the link is external
    weight?: TypographyWeight | undefined;
    external?: boolean | undefined;
}
