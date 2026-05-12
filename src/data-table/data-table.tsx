import { ArrowDownIcon, ArrowUpIcon } from "@lifesg/react-icons";
import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useResizeDetector } from "react-resize-detector";

import { LoadingDotsSpinner } from "../animations";
import { Checkbox } from "../checkbox";
import { ErrorDisplay } from "../error-display";
import { concatIds, VisuallyHidden } from "../shared/accessibility";
import { useApplyStyle } from "../theme";
import { Typography } from "../typography";
import { useId } from "../util";
import { useEventListener } from "../util/use-event-listener";
import * as styles from "./data-table.styles";
import type { DataTableProps, HeaderProps, RowProps } from "./types";

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
    const tableEndRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef<HTMLTableSectionElement>(null);
    const actionBarRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const internalId = useId();
    const keyColumns = headers.filter(
        (header): header is Exclude<HeaderProps, string> => {
            return typeof header !== "string" && !!header.keyColumn;
        }
    );

    const [scrollable, setScrollable] = useState(false);
    const [scrollEnd, setScrollEnd] = useState(false);
    const [isFloatingActionBar, setIsFloatingActionBar] = useState(false);
    const [showLastBorder, setShowLastBorder] = useState(false);

    const { ref: endRef, inView: end } = useInView();

    useApplyStyle(actionBarRef, {
        [styles.dataTableInternalTokens.actionBarWrapperLeft]:
            isFloatingActionBar && tableRef.current
                ? `${tableRef.current.getBoundingClientRect().left}px`
                : undefined,
        [styles.dataTableInternalTokens.actionBarWrapperWidth]:
            isFloatingActionBar && tableRef.current
                ? `${tableRef.current.clientWidth}px`
                : undefined,
    });

    // =============================================================================
    // EFFECTS, EVENT LISTENERS
    // ============================================================================
    const onResize = useCallback(() => {
        if (!wrapperRef.current || !actionBarRef.current) {
            return;
        }
        const scrollable =
            wrapperRef.current.scrollHeight > wrapperRef.current.clientHeight;
        setScrollable(scrollable);

        if (scrollable) {
            actionBarRef.current.style.transform = `translateY(0)`;
        } else {
            calculateStickyInViewport();
        }
    }, []);

    useEffect(() => {
        onResize();
    }, []);

    useResizeDetector({ onResize });

    const scrollHandler = () => {
        requestAnimationFrame(() => {
            if (scrollable) {
                calculateFixedInViewport();
            } else {
                calculateStickyInViewport();
            }
        });
    };

    useEventListener("scroll", scrollHandler, "window");

    useEffect(() => {
        checkLastBorder();
    }, [rows]);

    // ===========================================================================
    // HELPER FUNCTIONS
    // ===========================================================================
    const isAllCheckboxSelected = (): boolean => {
        return selectedIds?.length === rows?.length;
    };

    const isIndeterminateCheckbox = (): boolean => {
        return (
            !!selectedIds &&
            selectedIds.length !== 0 &&
            !isAllCheckboxSelected()
        );
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

    const getHeaderWrapperId = (fieldKey: string) => {
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

    const calculateFixedInViewport = () => {
        if (!wrapperRef.current) {
            return;
        }
        const wrapperBounds = wrapperRef.current.getBoundingClientRect();
        setIsFloatingActionBar(
            wrapperBounds.bottom > window.innerHeight + 30 &&
                wrapperBounds.top < window.innerHeight - 200
        );
    };

    const calculateStickyInViewport = () => {
        if (
            !tableRef.current ||
            !tableEndRef.current ||
            !wrapperRef.current ||
            !actionBarRef.current ||
            !headerRef.current
        ) {
            return;
        }

        const endBounds = tableEndRef.current.getBoundingClientRect();

        if (endBounds.top > window.innerHeight) {
            const bottomOffset = endBounds.bottom - window.innerHeight;
            const bottomToHeaderOffset =
                tableRef.current.getBoundingClientRect().height -
                headerRef.current.clientHeight -
                32;
            const maxBottomOffset = Math.min(
                bottomOffset,
                bottomToHeaderOffset
            );

            actionBarRef.current.style.transform = `translateY(-${maxBottomOffset}px)`;
        } else {
            actionBarRef.current.style.transform = `translateY(0)`;
        }
    };

    const checkLastBorder = () => {
        if (!tableRef.current || !wrapperRef.current) {
            return;
        }
        // 56 pixels added due to the behavior of action bar
        setShowLastBorder(
            tableRef.current.clientHeight + (enableActionBar ? 56 : 0) <
                wrapperRef.current.clientHeight
        );
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderHeaders = () => (
        <thead ref={headerRef}>
            <styles.HeaderRow>
                {enableMultiSelect && renderHeaderCheckBox()}
                {headers.map(renderHeaderCell)}
            </styles.HeaderRow>
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
        const headerCellWrapperId = getHeaderWrapperId(fieldKey);

        return (
            <styles.HeaderCell
                data-testid={getDataTestId(`header-${fieldKey}`)}
                key={fieldKey}
                className={clsx(
                    clickable && styles.dataTableClassNames.headerCellClickable
                )}
                scope="col"
                aria-sort={getHeaderAriaSort(fieldKey)}
                style={style}
            >
                <styles.HeaderCellWrapper id={headerCellWrapperId}>
                    {typeof label === "string" ? (
                        <Typography.BodyBL weight="bold">
                            {label}
                        </Typography.BodyBL>
                    ) : (
                        label
                    )}
                    {renderSortedArrow(fieldKey)}
                </styles.HeaderCellWrapper>
                {(clickable || isSortable) && (
                    <VisuallyHidden>
                        <button onClick={() => onHeaderClick?.(fieldKey)}>
                            {isSortable && "Sort "}
                            <span aria-labelledby={headerCellWrapperId} />
                            {isSortable && getSortButtonAriaLabel(fieldKey)}
                        </button>
                    </VisuallyHidden>
                )}
            </styles.HeaderCell>
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
            <styles.HeaderCell
                data-testid={getDataTestId("header-selection")}
                className={styles.dataTableClassNames.headerCellCheckbox}
                scope="col"
            >
                <styles.CheckBoxWrapper>
                    <VisuallyHidden>Row selection</VisuallyHidden>
                    {enableSelectAll && (
                        <Checkbox
                            checked={isAllCheckboxSelected()}
                            indeterminate={isIndeterminateCheckbox()}
                            aria-label="Select all rows"
                            onClick={() => {
                                if (onSelectAll) {
                                    onSelectAll(isAllCheckboxSelected());
                                }
                            }}
                        />
                    )}
                </styles.CheckBoxWrapper>
            </styles.HeaderCell>
        );
    };

    const renderRows = () => {
        return !rows || rows.length < 1 ? (
            <tr>
                <styles.EmptyViewCell colSpan={getTotalColumns()}>
                    {renderCustomEmptyView
                        ? renderCustomEmptyView()
                        : renderBasicEmptyView()}
                </styles.EmptyViewCell>
            </tr>
        ) : (
            <>
                {rows?.map((row: RowProps, index: number) => (
                    <styles.BodyRow
                        data-testid={getDataTestId(`row-${row.id.toString()}`)}
                        key={row.id.toString()}
                        className={clsx(
                            isAlternatingRow(index) &&
                                styles.dataTableClassNames.bodyRowAlternating,
                            enableMultiSelect &&
                                styles.dataTableClassNames.bodyRowSelectable,
                            isRowSelected(row.id.toString()) &&
                                styles.dataTableClassNames.bodyRowSelected
                        )}
                    >
                        {enableMultiSelect && renderRowCheckBox(row)}

                        {headers.map((header) => renderRowCell(header, row))}
                    </styles.BodyRow>
                ))}
            </>
        );
    };

    const renderRowCell = (header: HeaderProps, row: RowProps) => {
        const style = typeof header !== "string" ? header.style : undefined;
        const fieldKey = typeof header === "string" ? header : header.fieldKey;
        const rowId = row.id.toString();
        const cellData = row[fieldKey];
        const cellId = `${rowId}-${fieldKey}`;

        return (
            <styles.BodyCell
                data-testid={getDataTestId(`row-${cellId}`)}
                key={cellId}
                id={getCellId(rowId, fieldKey)}
                style={style}
            >
                {typeof cellData === "string" ||
                typeof cellData === "number" ? (
                    <styles.BodyCellContent>{cellData}</styles.BodyCellContent>
                ) : typeof cellData === "function" ? (
                    cellData(row, { isSelected: isRowSelected(rowId) })
                ) : (
                    cellData
                )}
            </styles.BodyCell>
        );
    };

    const renderRowCheckBox = (row: RowProps) => {
        const rowId = row.id.toString();

        return (
            <styles.BodyCell
                data-testid={getDataTestId(`row-${rowId}-selection`)}
                className={styles.dataTableClassNames.bodyCellCheckbox}
            >
                <styles.CheckBoxWrapper>
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
                </styles.CheckBoxWrapper>
            </styles.BodyCell>
        );
    };

    const renderBasicEmptyView = () => {
        return (
            <ErrorDisplay
                type={"no-item-found"}
                {...emptyView}
                title={
                    emptyView?.title ? (
                        typeof emptyView.title === "string" ? (
                            <styles.ErrorDisplayTitle weight="bold">
                                {emptyView.title}
                            </styles.ErrorDisplayTitle>
                        ) : (
                            emptyView.title
                        )
                    ) : (
                        <styles.ErrorDisplayTitle weight="bold">
                            {"No <items> found"}
                        </styles.ErrorDisplayTitle>
                    )
                }
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
            <tr>
                <td colSpan={getTotalColumns()}>
                    <styles.LoaderWrapper
                        role="status"
                        aria-live="polite"
                        aria-label="Loading table"
                    >
                        {loadState === "loading" && <LoadingDotsSpinner />}
                    </styles.LoaderWrapper>
                </td>
            </tr>
        );
    };

    const renderSelectionBar = () => {
        const count = selectedIds?.length ?? 0;

        return (
            <styles.ActionBarWrapper
                ref={actionBarRef}
                className={clsx(
                    isFloatingActionBar &&
                        styles.dataTableClassNames.actionBarWrapperFixed
                )}
            >
                <styles.ActionBar
                    className={clsx(
                        ((scrollable ? !scrollEnd : !end) ||
                            isFloatingActionBar) &&
                            styles.dataTableClassNames.actionBarFloat
                    )}
                >
                    <Typography.BodyMD weight="semibold">{`${count} item${
                        count > 1 ? "s" : ""
                    } selected`}</Typography.BodyMD>
                    <styles.TextButton
                        type="button"
                        aria-label={`Clear selection of ${count} item${
                            count === 1 ? "" : "s"
                        }`}
                        onClick={onClearSelectionClick}
                    >
                        Clear selection
                    </styles.TextButton>
                    {actionBarContent}
                </styles.ActionBar>
            </styles.ActionBarWrapper>
        );
    };

    return (
        <styles.TableWrapper
            id={id || "table-wrapper"}
            data-testid={otherProps["data-testid"] || "table"}
            className={className}
            ref={wrapperRef}
            onScroll={() => {
                if (scrollable && wrapperRef.current) {
                    setScrollEnd(
                        wrapperRef.current.scrollTop +
                            wrapperRef.current.clientHeight >=
                            wrapperRef.current.scrollHeight
                    );
                }
            }}
            tabIndex={0} // scrollable container must be focusable to support keyboard users
        >
            <styles.TableContainer>
                <styles.Table
                    ref={tableRef}
                    className={clsx(
                        enableStickyHeader &&
                            styles.dataTableClassNames.tableStickyHeader
                    )}
                >
                    {renderHeaders()}
                    <styles.TableBody
                        className={clsx(
                            showLastBorder &&
                                styles.dataTableClassNames
                                    .tableBodyShowLastRowBottomBorder
                        )}
                    >
                        {loadState === "success"
                            ? renderRows()
                            : renderLoader()}
                    </styles.TableBody>
                </styles.Table>
            </styles.TableContainer>
            {enableActionBar &&
                selectedIds &&
                selectedIds.length > 0 &&
                renderSelectionBar()}
            <div
                ref={(r) => {
                    tableEndRef.current = r;
                    endRef(r);
                }}
            />
        </styles.TableWrapper>
    );
};
