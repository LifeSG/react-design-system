import { Children, cloneElement, useRef, useState } from "react";
import { TabContext } from "./tab-context";
import { TabItem } from "./tab-item";
import { TabLinkChain, TabLinkChainProps } from "./tab-link-chain";
import { Wrapper } from "./tab.style";
import { SetTabLinkProps, TabProps } from "./types";

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
    const tabLinksRef = useRef<TabLinkChainProps[]>(
        Array<TabLinkChainProps>(Children.count(children))
    );

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const setLinkProps = ({ title, index }: SetTabLinkProps) => {
        tabLinksRef.current[index] = { title };
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderChildren = () => {
        return Children.map(children, (child, index) => {
            return cloneElement(child, { index });
        });
    };

    return (
        <Wrapper className={className}>
            <TabContext.Provider
                value={{
                    currentActiveIndex: currentActive,
                    setCurrentActiveIndex: setCurrentActive,
                    setLinkProps,
                }}
            >
                <TabLinkChain
                    linkChainProps={tabLinksRef.current}
                    controlledMode={tabItemRenderMode === "controlled"}
                    onTabClick={onTabClick}
                />
                {renderChildren()}
            </TabContext.Provider>
        </Wrapper>
    );
};

export const Tab = Object.assign(TabBase, {
    Item: TabItem,
});
