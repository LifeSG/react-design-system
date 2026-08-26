import type { Dispatch, SetStateAction } from "react";
import React from "react";

import type { TabItemProps } from "./types";

export type TabLinkProps = Pick<TabItemProps, "title" | "width" | "titleAddon">;

interface TabContextProps {
    currentActiveIndex: number;
    tabLinks: TabLinkProps[];
    setCurrentActiveIndex: Dispatch<SetStateAction<number>>;
    setTabLinks: (links: TabLinkProps[]) => void;
    controlledMode: boolean;
    onTabClick?: ((title: string, index: number) => void) | undefined;
    isContextProvided: boolean;
}

export const noop = () => {
    // does nothing
};

// =============================================================================
// CONTEXT
// =============================================================================
export const TabContext = React.createContext<TabContextProps>({
    currentActiveIndex: 0,
    tabLinks: [],
    setCurrentActiveIndex: noop,
    setTabLinks: noop,
    controlledMode: false,
    isContextProvided: false,
});
