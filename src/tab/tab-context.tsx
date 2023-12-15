import React from "react";
import { TabContextProps } from "./types";

export const noop = () => {
    // does nothing
};

// =============================================================================
// CONTEXT
// =============================================================================
export const TabContext = React.createContext<TabContextProps>({
    currentActiveIndex: 0,
    setCurrentActiveIndex: noop,
    setLinkProps: noop,
});
