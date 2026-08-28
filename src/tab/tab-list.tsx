import type { ReactElement } from "react";
import { Children, useContext, useEffect, useMemo } from "react";

import { useIsomorphicLayoutEffect } from "../util";
import type { TabLinkProps } from "./tab-context";
import { TabContext } from "./tab-context";
import { TabLinkChain } from "./tab-link-chain";
import type { TabListItemProps, TabListProps } from "./types";

export const TabList = ({
    children,
    fullWidthIndicatorLine,
    fadeColor,
    "data-testid": testId,
}: TabListProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const { setTabLinks, controlledMode, onTabClick, isContextProvided } =
        useContext(TabContext);

    const tabLinks = useMemo(() => {
        return (
            Children.toArray(children).filter(
                Boolean
            ) as ReactElement<TabListItemProps>[]
        ).map(({ props }) => ({
            title: props.title,
            width: props.width,
            titleAddon: props.titleAddon,
        })) as TabLinkProps[];
    }, [children]);

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useIsomorphicLayoutEffect(() => {
        setTabLinks(tabLinks);
    }, [setTabLinks, tabLinks]);

    useEffect(() => {
        if (process.env.NODE_ENV !== "production" && !isContextProvided) {
            console.error("Tab.TabList must be rendered inside Tab.Context.");
        }
    }, [isContextProvided]);

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <TabLinkChain
            controlledMode={controlledMode}
            onTabClick={onTabClick}
            data-testid={testId}
            fullWidthIndicatorLine={fullWidthIndicatorLine}
            fadeColor={fadeColor}
        />
    );
};

TabList.displayName = "Tab.TabList";
