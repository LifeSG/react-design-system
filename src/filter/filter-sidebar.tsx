import { useRef } from "react";

import * as filterStyles from "./filter.styles";
import { FilterContext } from "./filter-context";
import * as styles from "./filter-sidebar.styles";
import type { FilterSidebarProps } from "./types";

export const FilterSidebar = ({
    customLabels,
    onClear,
    clearButtonDisabled = false,
    children,
    headerTitle: _headerTitle,
    ...otherProps
}: FilterSidebarProps) => {
    const nodeRef = useRef<HTMLDivElement>(null);

    const labels = {
        title: customLabels?.headerTitle || _headerTitle || "Filters",
        clear: customLabels?.clearButtonLabel || "Clear",
    };

    return (
        <FilterContext.Provider value={{ mode: "default", rootNode: nodeRef }}>
            <styles.DesktopContainer
                data-id="filter-desktop"
                data-testid="filter-desktop"
                ref={nodeRef}
                {...otherProps}
            >
                <styles.FilterHeader>
                    <styles.FilterTitle>{labels.title}</styles.FilterTitle>
                    <styles.FilterClearButton
                        styleType="link"
                        type="button"
                        sizeType="small"
                        onClick={() => onClear?.()}
                        disabled={clearButtonDisabled}
                        aria-label={`clear ${labels.title}`}
                    >
                        {labels.clear}
                    </styles.FilterClearButton>
                </styles.FilterHeader>
                <filterStyles.FilterBody>{children}</filterStyles.FilterBody>
            </styles.DesktopContainer>
        </FilterContext.Provider>
    );
};

FilterSidebar.displayName = "Filter.Sidebar";
