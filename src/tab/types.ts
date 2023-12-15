import { Dispatch, SetStateAction } from "react";

export interface SetTabLinkProps {
    index: number;
    title: string;
    counter?: number | undefined;
}

export interface TabContextProps {
    currentActiveIndex: number;
    setCurrentActiveIndex: Dispatch<SetStateAction<number>>;
    setLinkProps: Dispatch<SetStateAction<SetTabLinkProps>>;
}

export type TabItemRenderMode = "default" | "controlled";

export interface TabProps {
    children: JSX.Element | JSX.Element[];
    /**
     * Specifies the render mode of the tab items.
     *
     * Specify `"controlled"` if you want to control the
     * rendering of each time item.
     *
     * Leave undefined or specify `"default"` if you want
     * the `Tab` component to control instead.
     */
    tabItemRenderMode?: TabItemRenderMode | undefined;
    currentActive?: number;
    className?: string | undefined;
    onTabClick?: ((title: string, order: number) => void) | undefined;
}

export interface TabItemProps {
    title: string;
    show?: boolean | undefined;
    children: JSX.Element | JSX.Element[];
}
