import { useEffect, useMemo, useState } from "react";

import { useId } from "../util";
import type { TabLinkProps } from "./tab-context";
import { TabContext } from "./tab-context";
import type { TabContextProps } from "./types";

// =============================================================================
// COMPONENT
// =============================================================================
export const TabContextProvider = ({
    children,
    currentActive: currentActiveIndex,
    initialActive = 0,
    onTabClick,
}: TabContextProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [currentActive, setCurrentActive] = useState<number>(
        currentActiveIndex ?? initialActive
    );
    const [tabLinks, setTabLinks] = useState<TabLinkProps[]>([]);
    const instanceId = useId();

    const tabContextValue = useMemo(
        () => ({
            instanceId,
            tabLinks,
            currentActiveIndex: currentActive,
            setCurrentActiveIndex: setCurrentActive,
            setTabLinks,
            controlledMode: typeof currentActiveIndex === "number",
            onTabClick,
            isContextProvided: true,
        }),
        [currentActive, currentActiveIndex, instanceId, onTabClick, tabLinks]
    );

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        if (typeof currentActiveIndex === "number") {
            setCurrentActive(currentActiveIndex);
        }
    }, [currentActiveIndex]);

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <TabContext.Provider value={tabContextValue}>
            {children}
        </TabContext.Provider>
    );
};

TabContextProvider.displayName = "Tab.Context";
