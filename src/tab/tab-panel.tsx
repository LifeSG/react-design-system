import { useContext, useEffect } from "react";

import { TabContext } from "./tab-context";
import type { TabPanelProps } from "./types";

export const TabPanel = ({ index, children, ...otherProps }: TabPanelProps) => {
    const { currentActiveIndex, isContextProvided, instanceId } =
        useContext(TabContext);

    useEffect(() => {
        if (process.env.NODE_ENV !== "production" && !isContextProvided) {
            console.error("Tab.Panel must be rendered inside Tab.Context.");
        }
    }, [isContextProvided]);

    return currentActiveIndex === index ? (
        <div
            role="tabpanel"
            aria-labelledby={`${instanceId}-tab-${index}`}
            tabIndex={0}
            {...otherProps}
        >
            {children}
        </div>
    ) : null;
};

TabPanel.displayName = "Tab.Panel";
