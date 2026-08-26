import { useContext, useEffect } from "react";

import { TabContext } from "./tab-context";
import type { TabPanelProps } from "./types";

// =============================================================================
// COMPONENT
// =============================================================================
// Inactive panels are unmounted — inner state is not preserved across tab switches
export const TabPanel = ({ index, children, ...otherProps }: TabPanelProps) => {
    const { currentActiveIndex, isContextProvided } = useContext(TabContext);

    useEffect(() => {
        if (process.env.NODE_ENV !== "production" && !isContextProvided) {
            console.error("Tab.Panel must be rendered inside Tab.Context.");
        }
    }, [isContextProvided]);

    return currentActiveIndex === index ? (
        <div role="tabpanel" tabIndex={0} {...otherProps}>
            {children}
        </div>
    ) : null;
};

TabPanel.displayName = "Tab.Panel";
