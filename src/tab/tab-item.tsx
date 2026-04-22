import { useContext } from "react";
import { TabItemProps } from "./types";
import { TabContext } from "./tab-context";

export interface TabItemComponentProps extends TabItemProps {
    index?: number | undefined; // injected
}

/**
 * The content panel for a single tab within a `Tab` component.
 *
 * Renders its children only when its tab is active. The `index` prop is injected automatically
 * by the parent `Tab` — do not set it manually.
 * @example
 * ```tsx
 * <Tab.Item>Tab content here</Tab.Item>
 * ```
 */
export const TabItem = ({
    index,
    children,
    titleAddon: _titleAddon, // destructure so it doesn't get passed into the dom
    ...otherProps
}: TabItemComponentProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const { currentActiveIndex } = useContext(TabContext);

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return currentActiveIndex === index ? (
        <div role="tabpanel" tabIndex={0} {...otherProps}>
            {children}
        </div>
    ) : null;
};

TabItem.displayName = "Tab.Item";
