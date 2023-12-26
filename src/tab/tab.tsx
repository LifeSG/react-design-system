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
    className,
    onTabClick,
}: TabProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [currentActive, setCurrentActive] = useState<number>(initialActive);
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
        setCurrentActive(currentActiveIndex || initialActive);
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
        <Wrapper className={className}>
            <TabContext.Provider
                value={{
                    tabLinks,
                    currentActiveIndex: currentActive,
                    setCurrentActiveIndex: setCurrentActive,
                }}
            >
                <TabLinkChain
                    controlledMode={!!currentActiveIndex}
                    onTabClick={onTabClick}
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
