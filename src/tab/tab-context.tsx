import React, { Dispatch, SetStateAction } from "react";
import { TabItemProps } from "./types";

export type TabLinkProps = Pick<
    TabItemProps,
    "title" | "width" | "titleAddon" | "titleAddonPosition"
>;

interface TabContextProps {
    currentActiveIndex: number;
    tabLinks: TabLinkProps[];
    setCurrentActiveIndex: Dispatch<SetStateAction<number>>;
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
});
