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
    tabItemRenderMode = "default",
    className,
    onTabClick,
}: TabProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [currentActive, setCurrentActive] = useState<number>(0);
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
                    controlledMode={tabItemRenderMode === "controlled"}
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
