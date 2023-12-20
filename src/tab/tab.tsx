import { Children, cloneElement, useRef, useState } from "react";
import { SetTabLinkProps, TabContext } from "./tab-context";
import { TabItem } from "./tab-item";
import { TabLinkChain } from "./tab-link-chain";
import { Wrapper } from "./tab.style";
import { TabLinkProps, TabProps } from "./types";

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
    const [tabLinks, _setTabLinks] = useState<TabLinkProps[]>(
        Array<TabLinkProps>(Children.count(children))
    );

    const tabLinksRef = useRef<TabLinkProps[]>(
        Array<TabLinkProps>(Children.count(children))
    );

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const setLinkProps = ({ title, index }: SetTabLinkProps) => {
        tabLinksRef.current[index] = { title };
        _setTabLinks(tabLinksRef.current);
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderChildren = () => {
        return Children.map(children, (child, index) => {
            if (child) {
                return cloneElement(child, { index });
            }
        });
    };

    return (
        <Wrapper className={className}>
            <TabContext.Provider
                value={{
                    tabLinks,
                    currentActiveIndex: currentActive,
                    setCurrentActiveIndex: setCurrentActive,
                    setTabLinkProps: setLinkProps,
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
