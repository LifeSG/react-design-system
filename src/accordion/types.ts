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
    title: string;
    children: JSX.Element | JSX.Element[];
    /**
     * Only for initial state, do not use to programmatically expand/collapse Accordion.Item after first load
     */
    expanded?: boolean | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    type?: AccordionItemType | undefined;
}

/**
 * Transient props are denoted with $
 * See more https://styled-components.com/docs/api#transient-props
 */

export interface TitleStyleProps {
    $showInMobile?: boolean | undefined;
}

export interface TitleWrapperStyleProps {
    $hasTitle: boolean;
}
