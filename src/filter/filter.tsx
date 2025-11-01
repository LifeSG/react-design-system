import { useContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "styled-components";
import { Breakpoint } from "../theme";
import { FilterItemCheckbox } from "./addons/filter-item-checkbox";
import { FilterItem } from "./filter-item";
import { FilterItemPage } from "./filter-item-page";
import { FilterProps } from "./types";
import { FilterModal } from "./filter-modal";
import { FilterSidebar } from "./filter-sidebar";

export const Filter = ({
    children,
    className,
    style,
    onDismiss,
    ...props
}: FilterProps) => {
    const theme = useContext(ThemeContext);
    const mobileBreakpoint = Breakpoint["lg-max"]({ theme });
    const isMobile = useMediaQuery({ maxWidth: mobileBreakpoint });

    useEffect(() => {
        if (!isMobile) {
            onDismiss?.();
        }
    }, [isMobile]);

    return (
        <div className={className} style={style}>
            {isMobile ? (
                <FilterModal onDismiss={onDismiss} {...props}>
                    {typeof children === "function"
                        ? children("mobile")
                        : children}
                </FilterModal>
            ) : (
                <FilterSidebar {...props}>
                    {typeof children === "function"
                        ? children("default")
                        : children}
                </FilterSidebar>
            )}
        </div>
    );
};

Filter.Sidebar = FilterSidebar;
Filter.Modal = FilterModal;
Filter.Item = FilterItem;
Filter.Page = FilterItemPage;
Filter.Checkbox = FilterItemCheckbox;
