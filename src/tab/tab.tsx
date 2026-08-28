import {
    Children,
    ReactElement,
    cloneElement,
    useEffect,
    useMemo,
    useState,
} from "react";
import { useId } from "../util";
import { TabContext, TabLinkProps, noop } from "./tab-context";
import { TabContextProvider } from "./tab-context-provider";
import { TabItem } from "./tab-item";
import { TabLinkChain } from "./tab-link-chain";
import { TabList } from "./tab-list";
import { TabListItem } from "./tab-list-item";
import { TabPanel } from "./tab-panel";
import { Wrapper } from "./tab.style";
import { TabItemProps, TabProps } from "./types";

const TabBase = ({
    children,
    currentActive: currentActiveIndex,
    initialActive = 0,
    onTabClick,
    "data-testid": testId,
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return cloneElement(child as ReactElement<any>, {
                key: index,
                index,
            });
        });
    };

    return (
        <Wrapper data-testid={testId} {...otherProps}>
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
        </Wrapper>
    );
};

TabBase.displayName = "Tab";

// =============================================================================
// EXPORTS
// =============================================================================
/**
 * A tabbed-panel layout that switches visible content by selecting a tab link.
 *
 * Use `Tab` to organise content into labelled panels where only one panel is
 * visible at a time. Compose with `Tab.Item` to define each panel.
 *
 * For cases where the tab bar and panels need to be positioned independently,
 * use the standalone composition: `Tab.Context`, `Tab.TabList`,
 * `Tab.TabListItem`, and `Tab.Panel`.
 */
export const Tab = Object.assign(TabBase, {
    /** Renders an individual content panel within a `Tab`. Inactive items are unmounted — inner state is not preserved across tab switches. */
    Item: TabItem,
    /** Context provider for the standalone TabList + Panel composition. */
    Context: TabContextProvider,
    /** Renders the tab link bar within a `Tab.Context`. */
    TabList,
    /** Declares a tab entry inside a `Tab.TabList`. */
    TabListItem,
    /** Renders a content panel within a `Tab.Context`. Inactive panels are unmounted — inner state is not preserved across tab switches. */
    Panel: TabPanel,
});
