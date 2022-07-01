export interface AccordionProps {
    children: JSX.Element | JSX.Element[];
    title?: string;
    enableExpandAll?: boolean;
    showTitleInMobile?: boolean;
    className?: string;
}

export type AccordionItemType = "default" | "small";

export interface AccordionItemProps {
    title: string;
    children: JSX.Element | JSX.Element[];
    expanded?: boolean;
    "data-testid"?: string;
    className?: string;
    type?: AccordionItemType;
}

export interface TitleStyleProps {
    showInMobile?: boolean;
}

export interface TitleWrapperStyleProps {
    hasTitle: boolean;
}
