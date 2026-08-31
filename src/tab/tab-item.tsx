import { useContext } from "react";
import { TabItemProps } from "./types";
import { TabContext } from "./tab-context";

export interface TabItemComponentProps extends TabItemProps {
    index?: number | undefined; // injected
}

export const TabItem = ({
    index,
    children,
    titleAddon: _titleAddon, // destructure so it doesn't get passed into the dom
    ...otherProps
}: TabItemComponentProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const { currentActiveIndex, instanceId } = useContext(TabContext);

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
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

TabItem.displayName = "Tab.Item";
