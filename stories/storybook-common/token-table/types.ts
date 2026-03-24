import { ThemeStyleProps } from "src/theme";

export interface TokenTableAttributeRowProps {
    name: string;
    description: React.ReactNode;
    defaultValue?:
        | TokenTableDefaultValueColourTokenProps
        | TokenTableDefaultValueDefaultProps
        | undefined;
}

export interface TokenTableDefaultValueColourTokenProps {
    type: "colour-token";
    token: (props: ThemeStyleProps) => string;
}

export interface TokenTableDefaultValueDefaultProps {
    type: "default";
    token: (props: ThemeStyleProps) => string;
}

export interface TokenTableSectionProps {
    name?: string | undefined;
    attributes: TokenTableAttributeRowProps[];
}

export interface TokenTableProps {
    sections: TokenTableSectionProps[];
}
