import { useEffect, useMemo, useState } from "react";

import { useId } from "../util";
import type { TabLinkProps } from "./tab-context";
import { noop, TabContext } from "./tab-context";
import type { TabContextProviderProps } from "./types";

// =============================================================================
// COMPONENT
// =============================================================================
export const TabContextProvider = ({
    children,
    currentActive: currentActiveIndex,
    initialActive = 0,
    onTabClick,
}: TabContextProviderProps) => {
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

// re-export noop so Tab.TabList can use it as setTabLinks default
export { noop };
