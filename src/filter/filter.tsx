import { useEffect } from "react";

import { useMaxWidthMediaQuery } from "../theme";
import { FilterItemCheckbox } from "./addons/filter-item-checkbox";
import { FilterItem } from "./filter-item";
import { FilterItemPage } from "./filter-item-page";
import { FilterModal } from "./filter-modal";
import { FilterSidebar } from "./filter-sidebar";
import type { FilterProps } from "./types";

export const Filter = ({
    children,
    className,
    style,
    onDismiss,
    onDone,
    onModalOpen,
    toggleFilterButtonStyle,
    insets,
    id,
    "data-testid": testId,
    ...props
}: FilterProps) => {
    const isMobile = useMaxWidthMediaQuery("lg");

    useEffect(() => {
        if (!isMobile) {
            onDismiss?.();
        }
    }, [isMobile]);

    return (
        <div className={className} style={style} id={id} data-testid={testId}>
            {isMobile ? (
                <FilterModal
                    onDismiss={onDismiss}
                    onDone={onDone}
                    onModalOpen={onModalOpen}
                    toggleFilterButtonStyle={toggleFilterButtonStyle}
                    insets={insets}
                    {...props}
                >
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
