import { ArrowDownIcon, ArrowUpIcon } from "@lifesg/react-icons";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";

import { LoadingDotsSpinner } from "../animations";
import { Checkbox } from "../checkbox";
import { ErrorDisplay } from "../error-display";
import { concatIds, VisuallyHidden } from "../shared/accessibility";
import { BasicButton } from "../shared/input-wrapper";
import { useApplyStyle } from "../theme";
import { Typography } from "../typography";
import { useEvent, useId } from "../util";
import { useEventListener } from "../util/use-event-listener";
import * as styles from "./data-table.styles";
import type { DataTableProps, HeaderProps, RowProps } from "./types";

/**
 * Renders a sortable, selectable data table with scroll-aware action bar and loading state support.
 *
 * Use `DataTable` when presenting structured multi-column data that users may need to sort by
 * column or select rows for bulk actions. Row selection, sort indicators, and the action bar
 * content are all externally controlled; the component manages scroll detection, sticky-header
 * positioning, and floating action bar behaviour internally.
 */
export const DataTable = ({
    id,
    headers,
    rows,
    className,
    sortIndicators,
    alternatingRows,
    loadState = "success",
    enableMultiSelect,
    selectedIds,
    disabledIds,
    enableActionBar,
    enableSelectAll,
    enableStickyHeader,
    emptyView,
    actionBarContent,
    renderCustomEmptyView,
    onHeaderClick,
    onSelect,
    onSelectAll,
    onClearSelectionClick,
    ...otherProps
}: DataTableProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const tableRef = useRef<HTMLTableElement>(null);
    const headerRef = useRef<HTMLTableSectionElement>(null);
    const actionBarWrapperRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const internalId = useId();
    const keyColumns = headers.filter(
        (header): header is Exclude<HeaderProps, string> => {
            return typeof header !== "string" && !!header.keyColumn;
        }
    );

    const [actionBarStrategy, setActionBarStrategy] = useState<
        "sticky" | "fixed" | "inline"
    >("inline");
    const [scrollable, setScrollable] = useState(false);
    const [isFloatingActionBar, setIsFloatingActionBar] = useState(false);

    useApplyStyle(actionBarWrapperRef, {
        [styles.tokens.actionBarWrapperLeft]:
            isFloatingActionBar && tableRef.current
                ? `${tableRef.current.getBoundingClientRect().left}px`
                : undefined,
        [styles.tokens.actionBarWrapperWidth]: tableRef.current
            ? `${tableRef.current.clientWidth}px`
            : undefined,
    });

    // =============================================================================
    // EFFECTS, EVENT LISTENERS
    // ============================================================================
    const useUpdateActionBarBehaviour = useEvent(() => {
        updateActionBarBehaviour();
    });

    useEffect(() => {
        useUpdateActionBarBehaviour();
    }, [useUpdateActionBarBehaviour]);

    useResizeDetector({
        targetRef: wrapperRef,
        onResize: () => {
            updateActionBarBehaviour();
        },
    });

    const scrollHandler = () => {
        updateActionBarBehaviour();
    };

    useEventListener("scroll", scrollHandler);
    useEventListener("scroll", scrollHandler, wrapperRef.current);

    // ===========================================================================
    // HELPER FUNCTIONS
    // ===========================================================================
    const isAllCheckboxSelected = (): boolean => {
        if (!rows || !rows.length || !selectedIds) {
            return false;
        }
        return selectedIds.length === rows.length;
    };

    const isIndeterminateCheckbox = (): boolean => {
        return (
            !!selectedIds &&
            selectedIds.length !== 0 &&
            !isAllCheckboxSelected()
        );
    };

    const isHeaderCheckboxDisabled = (): boolean => {
        return !rows || !rows.length || !selectedIds;
    };

    const isRowSelected = (rowId: string): boolean => {
        return !!selectedIds?.includes(rowId);
    };

    const isAlternatingRow = (index: number): boolean => {
        return !!alternatingRows && index % 2 === 1;
    };

    const isDisabledRow = (rowId: string): boolean => {
        return !!disabledIds?.includes(rowId);
    };

    const getDataTestId = (subStr: string) => {
        if (!otherProps["data-testid"]) return undefined;
        return `${otherProps["data-testid"]}-${subStr}`;
    };

    const getTotalColumns = (): number => {
        return headers.length + (enableMultiSelect ? 1 : 0);
    };

    const getSortDirection = (fieldKey: string) => {
        return sortIndicators?.[fieldKey];
    };

    const getHeaderAriaSort = (fieldKey: string) => {
        const sortDirection = getSortDirection(fieldKey);

        if (!sortDirection) {
            return undefined;
        }

        return sortDirection === "asc" ? "ascending" : "descending";
    };

    const getSortButtonAriaLabel = (fieldKey: string) => {
        const nextSortDirection =
            getSortDirection(fieldKey) === "asc" ? "descending" : "ascending";

        return ` by ${nextSortDirection} order`;
    };

    const getHeaderCellId = (fieldKey: string) => {
        return `${internalId}-header-${fieldKey}`;
    };
    const getCellId = (rowId: string, fieldKey: string) => {
        return `${internalId}-row-${rowId}-${fieldKey}-key-column`;
    };

    const getRowCheckboxAriaLabelledBy = (rowId: string) => {
        const keyColumnIds = keyColumns.map((header) =>
            getCellId(rowId, header.fieldKey)
        );

        return concatIds(...keyColumnIds);
    };

    const updateActionBarBehaviour = () => {
        if (
            !wrapperRef.current ||
            !headerRef.current ||
            !actionBarWrapperRef.current
        ) {
            return;
        }

        const wrapperBounds = wrapperRef.current.getBoundingClientRect();
        const headerBounds = headerRef.current.getBoundingClientRect();

        let strategy: typeof actionBarStrategy = "inline";

        const scrollable =
            wrapperRef.current.scrollHeight > wrapperRef.current.clientHeight;

        if (
            wrapperBounds.top > window.innerHeight ||
            wrapperBounds.bottom < 0
        ) {
            // if fully out of the viewport, disable floating
            strategy = "inline";
        } else if (scrollable) {
            if (
                wrapperBounds.top > 0 &&
                wrapperBounds.top < window.innerHeight &&
                wrapperBounds.bottom > 0 &&
                wrapperBounds.bottom < window.innerHeight
            ) {
                // if fully in the viewport, use the native sticky behaviour
                strategy = "sticky";
            } else if (
                wrapperBounds.top < 0 &&
                wrapperBounds.bottom > 0 &&
                wrapperBounds.bottom < window.innerHeight
            ) {
                // if partially offscreen at the top, use the native sticky behaviour
                strategy = "sticky";
            } else if (
                wrapperBounds.bottom > window.innerHeight &&
                Math.max(wrapperBounds.top, headerBounds.bottom) +
                    headerBounds.height <
                    window.innerHeight
            ) {
                // if offscreen at the bottom, pin to the viewport, up until the table/header
                strategy = "fixed";
            }
        } else if (
            wrapperBounds.bottom > window.innerHeight &&
            headerBounds.bottom + headerBounds.height < window.innerHeight
        ) {
            // if offscreen at the bottom, pin to the viewport, up until the header
            strategy = "fixed";
        }

        setScrollable(scrollable);
        setActionBarStrategy(strategy);

        if (strategy === "fixed") {
            setIsFloatingActionBar(true);
        } else if (strategy === "sticky") {
            const beforeScrollEnd =
                wrapperRef.current.scrollTop + wrapperRef.current.clientHeight <
                wrapperRef.current.scrollHeight;
            setIsFloatingActionBar(beforeScrollEnd);
        } else {
            setIsFloatingActionBar(false);
        }
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleHeaderClick = (fieldKey: string) => {
        onHeaderClick?.(fieldKey);
    };

    const handleHeaderButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
        fieldKey: string
    ) => {
        event.stopPropagation();
        onHeaderClick?.(fieldKey);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderHeaders = () => (
        <thead
            ref={headerRef}
            className={enableStickyHeader ? styles.stickyHeader : undefined}
        >
            <tr className={styles.headerRow}>
                {enableMultiSelect && renderHeaderCheckBox()}
                {headers.map(renderHeaderCell)}
            </tr>
        </thead>
    );

    const renderHeaderCell = (header: HeaderProps) => {
        const {
            fieldKey,
            label,
            clickable = false,
            style,
        } = typeof header === "string"
            ? {
                  fieldKey: header,
                  label: header,
                  style: undefined,
              }
            : header;

        const isSortable = !!getSortDirection(fieldKey);
        const headerCellId = getHeaderCellId(fieldKey);
        return (
            <th
                data-testid={getDataTestId(`header-${fieldKey}`)}
                key={fieldKey}
                className={clsx(
                    styles.headerCell,
                    clickable && styles.headerCellClickable
                )}
                scope="col"
                aria-sort={getHeaderAriaSort(fieldKey)}
                style={style}
                onClick={() => handleHeaderClick(fieldKey)}
            >
                <div className={styles.headerCellContent} id={headerCellId}>
                    {typeof label === "string" ? (
                        <Typography.BodyBL weight="bold">
                            {label}
                        </Typography.BodyBL>
                    ) : (
                        label
                    )}
                    {renderSortedArrow(fieldKey)}
                </div>
                {(clickable || isSortable) && (
                    <VisuallyHidden>
                        <button
                            onClick={(event) =>
                                handleHeaderButtonClick(event, fieldKey)
                            }
                        >
                            {isSortable && "Sort "}
                            <span aria-labelledby={headerCellId} />
                            {isSortable && getSortButtonAriaLabel(fieldKey)}
                        </button>
                    </VisuallyHidden>
                )}
            </th>
        );
    };

    const renderSortedArrow = (fieldKey: string) => {
        const isSorted = sortIndicators?.[fieldKey];

        if (!isSorted) {
            return <></>;
        }
        if (isSorted === "asc") {
            return (
                <ArrowUpIcon
                    aria-hidden
                    data-testid={getDataTestId(`header-${fieldKey}-arrowup`)}
                />
            );
        }
        return (
            <ArrowDownIcon
                aria-hidden
                data-testid={getDataTestId(`header-${fieldKey}-arrowdown`)}
            />
        );
    };

    const renderHeaderCheckBox = () => {
        return (
            <th
                data-testid={getDataTestId("header-selection")}
                className={clsx(styles.headerCell, styles.headerCellCheckbox)}
                scope="col"
            >
                <div className={styles.selectionCheckboxWrapper}>
                    <VisuallyHidden>Row selection</VisuallyHidden>
                    {enableSelectAll && (
                        <Checkbox
                            checked={isAllCheckboxSelected()}
                            indeterminate={isIndeterminateCheckbox()}
                            disabled={isHeaderCheckboxDisabled()}
                            aria-label="Select all rows"
                            onClick={() => {
                                if (onSelectAll) {
                                    onSelectAll(isAllCheckboxSelected());
                                }
                            }}
                        />
                    )}
                </div>
            </th>
        );
    };

    const renderRows = () => {
        return !rows || rows.length < 1 ? (
            <tr className={styles.bodyRow}>
                <td
                    className={styles.emptyStateCell}
                    colSpan={getTotalColumns()}
                >
                    {renderCustomEmptyView
                        ? renderCustomEmptyView()
                        : renderBasicEmptyView()}
                </td>
            </tr>
        ) : (
            <>
                {rows?.map((row: RowProps, index: number) => (
                    <tr
                        data-testid={getDataTestId(`row-${row.id.toString()}`)}
                        key={row.id.toString()}
                        className={clsx(
                            styles.bodyRow,
                            isFloatingActionBar &&
                                styles.bodyRowWithBottomBorder,
                            isAlternatingRow(index) &&
                                styles.bodyRowAlternating,
                            enableMultiSelect && styles.bodyRowSelectable,
                            isRowSelected(row.id.toString()) &&
                                styles.bodyRowSelected
                        )}
                    >
                        {enableMultiSelect && renderRowCheckBox(row)}

                        {headers.map((header) => renderRowCell(header, row))}
                    </tr>
                ))}
            </>
        );
    };

    const renderRowCell = (header: HeaderProps, row: RowProps) => {
        const style = typeof header === "string" ? undefined : header.style;
        const fieldKey = typeof header === "string" ? header : header.fieldKey;
        const rowId = row.id.toString();
        const cellData = row[fieldKey];
        const cellId = `${rowId}-${fieldKey}`;

        let cellContent: React.ReactNode;
        if (typeof cellData === "string" || typeof cellData === "number") {
            cellContent = (
                <Typography.BodyBL className={styles.bodyCellText}>
                    {cellData}
                </Typography.BodyBL>
            );
        } else if (typeof cellData === "function") {
            cellContent = cellData(row, { isSelected: isRowSelected(rowId) });
        } else {
            cellContent = cellData;
        }

        return (
            <td
                data-testid={getDataTestId(`row-${cellId}`)}
                key={cellId}
                id={getCellId(rowId, fieldKey)}
                className={styles.bodyCell}
                style={style}
            >
                {cellContent}
            </td>
        );
    };

    const renderRowCheckBox = (row: RowProps) => {
        const rowId = row.id.toString();

        return (
            <td
                data-testid={getDataTestId(`row-${rowId}-selection`)}
                className={clsx(styles.bodyCell, styles.bodyCellCheckbox)}
            >
                <div className={styles.selectionCheckboxWrapper}>
                    <Checkbox
                        checked={isRowSelected(rowId)}
                        aria-labelledby={getRowCheckboxAriaLabelledBy(rowId)}
                        onClick={() => {
                            if (onSelect) {
                                onSelect(rowId, !isRowSelected(rowId));
                            }
                        }}
                        disabled={isDisabledRow(rowId)}
                        focusableWhenDisabled={isDisabledRow(rowId)}
                    />
                </div>
            </td>
        );
    };

    const renderBasicEmptyView = () => {
        let emptyTitle: JSX.Element;
        if (!emptyView?.title) {
            emptyTitle = (
                <Typography.HeadingSM
                    className={styles.emptyStateTitle}
                    weight="bold"
                >
                    {"No <items> found"}
                </Typography.HeadingSM>
            );
        } else if (typeof emptyView.title === "string") {
            emptyTitle = (
                <Typography.HeadingSM
                    className={styles.emptyStateTitle}
                    weight="bold"
                >
                    {emptyView.title}
                </Typography.HeadingSM>
            );
        } else {
            emptyTitle = emptyView.title;
        }

        return (
            <ErrorDisplay
                type={"no-item-found"}
                {...emptyView}
                title={emptyTitle}
                description={
                    emptyView?.description
                        ? emptyView.description
                        : "No matching rows"
                }
            />
        );
    };

    const renderLoader = () => {
        return (
            <tr className={styles.bodyRow}>
                <td colSpan={getTotalColumns()}>
                    <div
                        className={styles.loadingStateWrapper}
                        role="status"
                        aria-live="polite"
                        aria-label="Loading table"
                    >
                        {loadState === "loading" && <LoadingDotsSpinner />}
                    </div>
                </td>
            </tr>
        );
    };

    const renderSelectionBar = () => {
        const count = selectedIds?.length ?? 0;
        const counter = `item${count > 1 ? "s" : ""}`;

        return (
            <>
                <div
                    ref={actionBarWrapperRef}
                    className={styles.actionBarWrapper}
                    data-strategy={actionBarStrategy}
                >
                    <div
                        className={clsx(
                            styles.actionBar,
                            isFloatingActionBar && styles.actionBarFloating
                        )}
                    >
                        <Typography.BodyMD weight="semibold">{`${count} ${counter} selected`}</Typography.BodyMD>
                        <BasicButton
                            className={styles.actionBarButton}
                            type="button"
                            aria-label={`Clear selection of ${count} ${counter}`}
                            onClick={onClearSelectionClick}
                        >
                            Clear selection
                        </BasicButton>
                        {actionBarContent}
                    </div>
                </div>
                {/* leave a fixed space when action bar floats to avoid layout shift */}
                {actionBarStrategy !== "sticky" && (
                    <div className={styles.actionBarSpacer} />
                )}
            </>
        );
    };

    return (
        <div
            id={id || "table-wrapper"}
            data-testid={otherProps["data-testid"] || "table"}
            className={clsx(
                styles.tableWrapper,
                scrollable && styles.tableWrapperScrollable,
                className
            )}
            ref={wrapperRef}
            tabIndex={0} // scrollable container must be focusable to support keyboard users
        >
            <div className={styles.tableContainer}>
                <table ref={tableRef} className={styles.table}>
                    {renderHeaders()}
                    <tbody>
                        {loadState === "success"
                            ? renderRows()
                            : renderLoader()}
                    </tbody>
                </table>
            </div>
            {enableActionBar &&
                selectedIds &&
                selectedIds.length > 0 &&
                renderSelectionBar()}
        </div>
    );
};
