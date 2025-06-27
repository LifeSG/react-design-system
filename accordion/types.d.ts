export interface AccordionProps {
    children: JSX.Element | JSX.Element[];
    title?: string | undefined;
    enableExpandAll?: boolean | undefined;
    initialDisplay?: "collapse-all" | "expand-all" | undefined;
    showTitleInMobile?: boolean | undefined;
    className?: string | undefined;
}
export type AccordionItemType = "default" | "small";
export interface AccordionItemProps {
    title: string | JSX.Element;
    children: JSX.Element | JSX.Element[];
    /**
     * Omit or set this to undefined to allow 'Hide All'/'Show All' in parent to take precedence
     * for cases where we want the default expand behaviour
     */
    expanded?: boolean | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    type?: AccordionItemType | undefined;
    collapsible?: boolean | undefined;
}
export interface AccordionItemApi {
    expand: () => void;
    collapse: () => void;
    isExpanded: () => boolean;
}
export type AccordionItemHandle = HTMLDivElement & AccordionItemApi;
/**
 * Transient props are denoted with $
 * See more https://styled-components.com/docs/api#transient-props
 */
export interface TitleStyleProps {
    $showInMobile?: boolean | undefined;
}
export interface TitleWrapperStyleProps {
    $showTitleInMobile: boolean;
    $hasExpandAll: boolean;
}
