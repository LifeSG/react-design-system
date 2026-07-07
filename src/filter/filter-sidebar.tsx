import clsx from "clsx";
import { useRef } from "react";

import { Button } from "../button";
import * as filterStyles from "./filter.styles";
import { FilterBadge } from "./filter-badge";
import { FilterContext } from "./filter-context";
import * as styles from "./filter-sidebar.styles";
import type { FilterSidebarProps } from "./types";

export const FilterSidebar = ({
    customLabels,
    onClear,
    clearButtonDisabled = false,
    count,
    children,
    headerTitle: _headerTitle,
    className,
    ...otherProps
}: FilterSidebarProps) => {
    const nodeRef = useRef<HTMLDivElement>(null);

    const labels = {
        title: customLabels?.headerTitle || _headerTitle || "Filters",
        clear: customLabels?.clearButtonLabel || "Clear",
    };

    return (
        <FilterContext.Provider value={{ mode: "default", rootNode: nodeRef }}>
            <div
                data-id="filter-desktop"
                data-testid="filter-desktop"
                ref={nodeRef}
                className={clsx(styles.desktopContainer, className)}
                {...otherProps}
            >
                <div className={styles.filterHeader}>
                    <div className={styles.filterTitleGroup}>
                        <h2 className={styles.filterTitle}>{labels.title}</h2>
                        <FilterBadge count={count} />
                    </div>
                    <Button
                        className={styles.filterClearButton}
                        styleType="link"
                        type="button"
                        sizeType="small"
                        onClick={() => onClear?.()}
                        disabled={clearButtonDisabled}
                        aria-label={`clear ${labels.title}`}
                    >
                        {labels.clear}
                    </Button>
                </div>
                <div className={filterStyles.filterBody}>{children}</div>
            </div>
        </FilterContext.Provider>
    );
};

FilterSidebar.displayName = "Filter.Sidebar";
