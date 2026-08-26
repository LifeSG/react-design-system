import clsx from "clsx";
import type { ReactElement } from "react";
import { Children, cloneElement, useEffect, useMemo, useState } from "react";

import { useId } from "../util";
import * as styles from "./tab.styles";
import type { TabLinkProps } from "./tab-context";
import { noop, TabContext } from "./tab-context";
import { TabContextProvider } from "./tab-context-provider";
import { TabItem } from "./tab-item";
import { TabLinkChain } from "./tab-link-chain";
import { TabList } from "./tab-list";
import { TabListItem } from "./tab-list-item";
import { TabPanel } from "./tab-panel";
import type { TabItemProps, TabProps } from "./types";

// =============================================================================
// COMPONENT
// =============================================================================
const TabBase = ({
    children,
    currentActive: currentActiveIndex,
    initialActive = 0,
    onTabClick,
    "data-testid": testId,
    className,
    fullWidthIndicatorLine,
    fadeColor,
    ...otherProps
}: TabProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [currentActive, setCurrentActive] = useState<number>(
        currentActiveIndex || initialActive
    );

    const instanceId = useId();

    const tabLinks = useMemo(() => {
        const validChildren = Children.toArray(children).filter(
            Boolean
        ) as ReactElement<TabItemProps>[];

        return validChildren.map((child) => {
            return {
                title: child.props.title,
                width: child.props.width,
                titleAddon: child.props.titleAddon,
            };
        }) as TabLinkProps[];
    }, [children]);

    const tabContextValue = useMemo(
        () => ({
            instanceId,
            tabLinks,
            currentActiveIndex: currentActive,
            setCurrentActiveIndex: setCurrentActive,
            setTabLinks: noop,
            controlledMode: typeof currentActiveIndex === "number",
            onTabClick,
            isContextProvided: true,
        }),
        [currentActive, currentActiveIndex, instanceId, onTabClick, tabLinks]
    );

    // =========================================================================
    // Effects
    // =========================================================================
    useEffect(() => {
        if (typeof currentActiveIndex === "number") {
            setCurrentActive(currentActiveIndex);
        }
    }, [currentActiveIndex]);

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderChildren = () => {
        const validChildren = Children.toArray(children).filter(Boolean);

        return validChildren.map((child, index) => {
            const element = child as ReactElement<TabItemProps>;

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return cloneElement(child as ReactElement<any>, {
                key: element.key ?? element.props.title,
                index,
            });
        });
    };

    return (
        <div
            data-testid={testId}
            className={clsx(styles.wrapper, className)}
            {...otherProps}
        >
            <TabContext.Provider value={tabContextValue}>
                <TabLinkChain
                    controlledMode={typeof currentActiveIndex === "number"}
                    onTabClick={onTabClick}
                    data-testid={`${testId}-tabs`}
                    fullWidthIndicatorLine={fullWidthIndicatorLine}
                    fadeColor={fadeColor}
                />
                {renderChildren()}
            </TabContext.Provider>
        </div>
    );
};

TabBase.displayName = "Tab";

// =============================================================================
// EXPORTS
// =============================================================================
// @catalog
/**
 * A tabbed-panel layout that switches visible content by selecting a tab link.
 *
 * Use `Tab` to organise content into labelled panels where only one panel is
 * visible at a time. Compose with `Tab.Item` to define each panel.
 *
 * For cases where the tab bar and panels need to be positioned independently,
 * use the standalone composition: `Tab.Context`, `Tab.TabList`,
 * `Tab.TabListItem`, and `Tab.Panel`.
 *
 * Note: `Tab.Panel` unmounts inactive panels — inner component state is not
 * preserved across tab switches.
 * @keywords navigation, panel, tabbed, tabs
 */
export const Tab = Object.assign(TabBase, {
    /** Renders an individual content panel within a `Tab`. */
    Item: TabItem,
    /** Context provider for the standalone TabList + Panel composition. */
    Context: TabContextProvider,
    /** Renders the tab link bar within a `Tab.Context`. */
    TabList,
    /** Declares a tab entry inside a `Tab.TabList`. */
    TabListItem,
    /** Renders a content panel within a `Tab.Context`. */
    Panel: TabPanel,
});
