import React, { Dispatch, SetStateAction } from "react";
import { TabLinkProps } from "./types";

export interface SetTabLinkProps {
    index: number;
    title: string;
    counter?: number | undefined;
}

interface TabContextProps {
    currentActiveIndex: number;
    tabLinks: TabLinkProps[];
    setCurrentActiveIndex: Dispatch<SetStateAction<number>>;
    setTabLinkProps: Dispatch<SetStateAction<SetTabLinkProps>>;
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
    setTabLinkProps: noop,
});
