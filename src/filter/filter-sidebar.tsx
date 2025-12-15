import { useRef } from "react";
import { FilterContext } from "./filter-context";
import {
    DesktopContainer,
    FilterClearButton,
    FilterHeader,
    FilterTitle,
} from "./filter-sidebar.styles";
import { FilterSidebarProps } from "./types";
import { FilterBody } from "./filter.styles";

export const FilterSidebar = ({
    customLabels,
    onClear,
    clearButtonDisabled = false,
    children,
    headerTitle: _headerTitle,
}: FilterSidebarProps) => {
    const nodeRef = useRef<HTMLDivElement>(null);

    const labels = {
        title: customLabels?.headerTitle || _headerTitle || "Filters",
        clear: customLabels?.clearButtonLabel || "Clear",
    };

    return (
        <FilterContext.Provider value={{ mode: "default", rootNode: nodeRef }}>
            <DesktopContainer
                data-id="filter-desktop"
                data-testid="filter-desktop"
                ref={nodeRef}
            >
                <FilterHeader>
                    <FilterTitle>{labels.title}</FilterTitle>
                    <FilterClearButton
                        styleType="link"
                        type="button"
                        onClick={() => onClear?.()}
                        disabled={clearButtonDisabled}
                        aria-label={`clear ${labels.title}`}
                    >
                        {labels.clear}
                    </FilterClearButton>
                </FilterHeader>
                <FilterBody>{children}</FilterBody>
            </DesktopContainer>
        </FilterContext.Provider>
    );
};

FilterSidebar.displayName = "Filter.Sidebar";
