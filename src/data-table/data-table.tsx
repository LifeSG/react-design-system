import { ArrowDownIcon, ArrowUpIcon } from "@lifesg/react-icons";
import { useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { LoadingDotsSpinner } from "../animations";
import { Checkbox } from "../checkbox";
import { ErrorDisplay } from "../error-display";
import { VisuallyHidden, concatIds } from "../shared/accessibility";
import { Typography } from "../typography";
import { useEvent, useId } from "../util";
import { useEventListener } from "../util/use-event-listener";
import {
    ActionBar,
    ActionBarSpacer,
    ActionBarWrapper,
    BodyCell,
    BodyCellContent,
    BodyRow,
    CheckBoxWrapper,
    EmptyViewCell,
    ErrorDisplayTitle,
    HeaderCell,
    HeaderCellWrapper,
    HeaderRow,
    LoaderWrapper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableWrapper,
    TextButton,
} from "./data-table.styles";
import { DataTableProps, HeaderProps, RowProps } from "./types";

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
        <TableHead ref={headerRef} $stickyHeader={enableStickyHeader}>
            <HeaderRow>
                {enableMultiSelect && renderHeaderCheckBox()}
                {headers.map(renderHeaderCell)}
            </HeaderRow>
        </TableHead>
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
            <HeaderCell
                data-testid={getDataTestId(`header-${fieldKey}`)}
                key={fieldKey}
                $clickable={clickable}
                scope="col"
                aria-sort={getHeaderAriaSort(fieldKey)}
                style={style}
                $isCheckbox={false}
                onClick={() => handleHeaderClick(fieldKey)}
            >
                <HeaderCellWrapper id={headerCellWrapperId}>
                    {typeof label === "string" ? (
                        <Typography.BodyBL weight="bold">
                            {label}
                        </Typography.BodyBL>
                    ) : (
                        label
                    )}
                    {renderSortedArrow(fieldKey)}
                </HeaderCellWrapper>
                {(clickable || isSortable) && (
                    <VisuallyHidden>
                        <button
                            onClick={(event) =>
                                handleHeaderButtonClick(event, fieldKey)
                            }
                        >
                            {isSortable && "Sort "}
                            <span aria-labelledby={headerCellWrapperId} />
                            {isSortable && getSortButtonAriaLabel(fieldKey)}
                        </button>
                    </VisuallyHidden>
                )}
            </HeaderCell>
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
            <HeaderCell
                data-testid={getDataTestId("header-selection")}
                $clickable={false}
                $isCheckbox={true}
                scope="col"
            >
                <CheckBoxWrapper>
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
                </CheckBoxWrapper>
            </HeaderCell>
        );
    };

    const renderRows = () => {
        return !rows || rows.length < 1 ? (
            <BodyRow $alternating={false}>
                <EmptyViewCell colSpan={getTotalColumns()}>
                    {renderCustomEmptyView
                        ? renderCustomEmptyView()
                        : renderBasicEmptyView()}
                </EmptyViewCell>
            </BodyRow>
        ) : (
            <>
                {rows?.map((row: RowProps, index: number) => (
                    <BodyRow
                        data-testid={getDataTestId(`row-${row.id.toString()}`)}
                        key={row.id.toString()}
                        $showLastRowBottomBorder={isFloatingActionBar}
                        $alternating={isAlternatingRow(index)}
                        $isSelectable={enableMultiSelect}
                        $isSelected={isRowSelected(row.id.toString())}
                    >
                        {enableMultiSelect && renderRowCheckBox(row)}

                        {headers.map((header) => renderRowCell(header, row))}
                    </BodyRow>
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
            <BodyCell
                data-testid={getDataTestId(`row-${cellId}`)}
                key={cellId}
                id={getCellId(rowId, fieldKey)}
                style={style}
                $isCheckbox={false}
            >
                {typeof cellData === "string" ||
                typeof cellData === "number" ? (
                    <BodyCellContent>{cellData}</BodyCellContent>
                ) : typeof cellData === "function" ? (
                    cellData(row, { isSelected: isRowSelected(rowId) })
                ) : (
                    cellData
                )}
            </BodyCell>
        );
    };

    const renderRowCheckBox = (row: RowProps) => {
        const rowId = row.id.toString();

        return (
            <BodyCell
                data-testid={getDataTestId(`row-${rowId}-selection`)}
                $isCheckbox={true}
            >
                <CheckBoxWrapper>
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
                </CheckBoxWrapper>
            </BodyCell>
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
                            <ErrorDisplayTitle weight="bold">
                                {emptyView.title}
                            </ErrorDisplayTitle>
                        ) : (
                            emptyView.title
                        )
                    ) : (
                        <ErrorDisplayTitle weight="bold">
                            {"No <items> found"}
                        </ErrorDisplayTitle>
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
            <BodyRow $alternating={false}>
                <td colSpan={getTotalColumns()}>
                    <LoaderWrapper
                        role="status"
                        aria-live="polite"
                        aria-label="Loading table"
                    >
                        {loadState === "loading" && <LoadingDotsSpinner />}
                    </LoaderWrapper>
                </td>
            </BodyRow>
        );
    };

    const renderSelectionBar = () => {
        const count = selectedIds?.length ?? 0;
        const counter = `item${count > 1 ? "s" : ""}`;

        return (
            <>
                <ActionBarWrapper
                    ref={actionBarWrapperRef}
                    $strategy={actionBarStrategy}
                    $left={
                        isFloatingActionBar
                            ? tableRef?.current?.getBoundingClientRect()?.left
                            : 0
                    }
                    $width={tableRef?.current?.clientWidth}
                >
                    <ActionBar $float={isFloatingActionBar}>
                        <Typography.BodyMD weight="semibold">{`${count} ${counter} selected`}</Typography.BodyMD>
                        <TextButton
                            type="button"
                            aria-label={`Clear selection of ${count} ${counter}`}
                            onClick={onClearSelectionClick}
                        >
                            Clear selection
                        </TextButton>
                        {actionBarContent}
                    </ActionBar>
                </ActionBarWrapper>
                {/* leave a fixed space when action bar floats to avoid layout shift */}
                {actionBarStrategy !== "sticky" && <ActionBarSpacer />}
            </>
        );
    };

    return (
        <TableWrapper
            id={id || "table-wrapper"}
            data-testid={otherProps["data-testid"] || "table"}
            className={className}
            ref={wrapperRef}
            tabIndex={0} // scrollable container must be focusable to support keyboard users
            $scrollable={scrollable}
        >
            <TableContainer>
                <Table ref={tableRef}>
                    {renderHeaders()}
                    <TableBody>
                        {loadState === "success"
                            ? renderRows()
                            : renderLoader()}
                    </TableBody>
                </Table>
            </TableContainer>
            {enableActionBar &&
                selectedIds &&
                selectedIds.length > 0 &&
                renderSelectionBar()}
        </TableWrapper>
    );
};
