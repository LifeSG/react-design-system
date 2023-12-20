import { useContext, useEffect } from "react";
import { TabItemProps } from "./types";
import { TabContext } from "./tab-context";

export interface TabItemComponentProps extends TabItemProps {
    index?: number | undefined; // injected
}

export const TabItem = ({
    index,
    title,
    show,
    children,
}: TabItemComponentProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const {
        setCurrentActiveIndex,
        currentActiveIndex,
        setTabLinkProps: setLinkProps,
    } = useContext(TabContext);

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        if (show) {
            setCurrentActiveIndex(index);
        }
    }, [show]);

    useEffect(() => {
        setLinkProps({ index, title });
    }, [title]);

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return currentActiveIndex === index ? <>{children}</> : null;
};
