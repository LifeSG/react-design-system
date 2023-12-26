import { useContext, useEffect } from "react";
import { TabItemProps } from "./types";
import { TabContext } from "./tab-context";

export interface TabItemComponentProps extends TabItemProps {
    index?: number | undefined; // injected
}

export const TabItem = ({ index, show, children }: TabItemComponentProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const { setCurrentActiveIndex, currentActiveIndex } =
        useContext(TabContext);

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        if (show) {
            setCurrentActiveIndex(index);
        }
    }, [show]);

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return currentActiveIndex === index ? (
        <div role="tabpanel">{children}</div>
    ) : null;
};
