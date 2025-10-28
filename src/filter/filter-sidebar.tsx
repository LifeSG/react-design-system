import { useRef } from "react";
import { useFilterBase } from "./use-filter-base";
import { FilterContext } from "./filter-context";
import {
    DesktopContainer,
    FilterBody,
    FilterClearButton,
    FilterHeader,
    FilterTitle,
} from "./filter.styles";
import { FilterSidebarProps } from "./types";

export const FilterSidebar = ({
    customLabels,
    onClear,
    clearButtonDisabled = false,
    insets,
    children,
}: FilterSidebarProps) => {
    const { handleClear, labels } = useFilterBase({
        onClear,
        customLabels,
        insets,
    });

    const nodeRef = useRef<HTMLDivElement>(null);

    return (
        <FilterContext.Provider value={{ mode: "default", rootNode: nodeRef }}>
            <DesktopContainer
                data-id="filter-desktop"
                data-testid="filter-desktop"
                ref={nodeRef}
            >
                <FilterHeader $insetTop={insets?.top}>
                    <FilterTitle>{labels.title}</FilterTitle>
                    <FilterClearButton
                        styleType="link"
                        type="button"
                        onClick={handleClear}
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
