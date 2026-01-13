import { FadeColorSet } from "../shared/fade-wrapper";

export interface TabProps {
    children: JSX.Element | JSX.Element[];
    /** Specify the initial tab index that is to be displayed */
    initialActive?: number | undefined;
    /**
     * Specify the current tab index that is to be displayed. By specifying
     * this prop, the tab rendering will be manually controlled by you
     */
    currentActive?: number;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    onTabClick?: ((title: string, index: number) => void) | undefined;
    fullWidthIndicatorLine?: boolean | undefined;
    fadeColor?: string[] | FadeColorSet | undefined;
}

export interface TabItemProps {
    title: string;
    children: JSX.Element | JSX.Element[];
    /** Custom addon content displayed next to the tab title */
    titleAddon?: TitleAddonProps | undefined;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    width?: string | undefined;
}

export interface TitleAddonProps {
    /** addon content */
    content: JSX.Element;
    /** position of the addon content, defaults to "right" */
    position?: "left" | "right" | undefined;
}
