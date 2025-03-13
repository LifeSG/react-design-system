import {
    Children,
    ReactElement,
    cloneElement,
    useEffect,
    useState,
} from "react";
import { TabContext } from "./tab-context";
import { TabItem } from "./tab-item";
import { TabLinkChain } from "./tab-link-chain";
import { Wrapper } from "./tab.style";
import { TabItemProps, TabLinkProps, TabProps } from "./types";

// =============================================================================
// COMPONENT
// =============================================================================
const TabBase = ({
    children,
    currentActive: currentActiveIndex,
    initialActive = 0,
    onTabClick,
    "data-testid": testId,
    fullWidthIndicatorLine,
    ...otherProps
}: TabProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [currentActive, setCurrentActive] = useState<number>(
        currentActiveIndex || initialActive
    );
    const [tabLinks, setTabLinks] = useState<TabLinkProps[]>([]);

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        const validChildren = Children.toArray(children).filter(
            Boolean
        ) as ReactElement<TabItemProps>[];
        updateTabLinks(validChildren);
    }, [children]);

    useEffect(() => {
        if (typeof currentActiveIndex === "number") {
            setCurrentActive(currentActiveIndex);
        }
    }, [currentActiveIndex]);

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const updateTabLinks = (children: ReactElement<TabItemProps>[]) => {
        const tabLinks: TabLinkProps[] = children.map((child) => {
            return { title: child.props.title };
        });

        setTabLinks(tabLinks);
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderChildren = () => {
        const validChildren = Children.toArray(children).filter(Boolean);

        return validChildren.map((child, index) => {
            return cloneElement(child as ReactElement<any>, {
                key: index,
                index,
            });
        });
    };

    return (
        <Wrapper data-testid={testId} {...otherProps}>
            <TabContext.Provider
                value={{
                    tabLinks,
                    currentActiveIndex: currentActive,
                    setCurrentActiveIndex: setCurrentActive,
                }}
            >
                <TabLinkChain
                    controlledMode={typeof currentActiveIndex === "number"}
                    onTabClick={onTabClick}
                    data-testid={`${testId}-tabs`}
                    fullWidthIndicatorLine={fullWidthIndicatorLine}
                />
                {renderChildren()}
            </TabContext.Provider>
        </Wrapper>
    );
};

// =============================================================================
// EXPORTS
// =============================================================================
export const Tab = Object.assign(TabBase, {
    Item: TabItem,
});
