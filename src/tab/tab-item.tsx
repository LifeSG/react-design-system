import { useContext } from "react";
import { TabItemProps } from "./types";
import { TabContext } from "./tab-context";

export interface TabItemComponentProps extends TabItemProps {
    index?: number | undefined; // injected
}

export const TabItem = ({ index, children }: TabItemComponentProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const { currentActiveIndex } = useContext(TabContext);

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return currentActiveIndex === index ? (
        <div role="tabpanel">{children}</div>
    ) : null;
};
