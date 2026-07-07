import clsx from "clsx";
import type { ReactElement } from "react";
import { Children, cloneElement, useEffect, useMemo, useState } from "react";

import * as styles from "./tab.styles";
import type { TabLinkProps } from "./tab-context";
import { TabContext } from "./tab-context";
import { TabItem } from "./tab-item";
import { TabLinkChain } from "./tab-link-chain";
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
            tabLinks,
            currentActiveIndex: currentActive,
            setCurrentActiveIndex: setCurrentActive,
        }),
        [currentActive, tabLinks]
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
export const Tab = Object.assign(TabBase, {
    Item: TabItem,
});
