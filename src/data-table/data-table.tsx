import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { LoadingDotsSpinner } from "../animations";
import {
    ActionBar,
    ActionBarWrapper,
    BodyCell,
    BodyCellContent,
    BodyRow,
    CheckBoxWrapper,
    EmptyViewCell,
    ErrorDisplayElement,
    HeaderCell,
    HeaderCellWrapper,
    HeaderRow,
    LoaderWrapper,
    Table,
    TableBody,
    TableContainer,
    TableWrapper,
} from "./data-table.styles";
import { DataTableProps, HeaderProps, RowProps } from "./types";
import { ArrowDownIcon, ArrowUpIcon } from "@lifesg/react-icons";
import { Text } from "../text";
import { Checkbox } from "../checkbox";
import { Button } from "../button";

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
    const tableEndRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLTableSectionElement>(null);
    const actionBarRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [scrollable, setScrollable] = useState(false);
    const [scrollEnd, setScrollEnd] = useState(false);
    const [tableEnd, setTableEnd] = useState(false);
    const [isFloatingActionBar, setIsFloatingActionBar] = useState(false);
    const [showLastBorder, setShowLastBorder] = useState(false);

    const { ref: endRef, inView: end } = useInView();

    // =============================================================================
    // EFFECTS
    // ============================================================================
    useEffect(() => {
        if (!wrapperRef.current) {
            return;
        }

        const observer = new ResizeObserver(() => {
            const scrollable =
                wrapperRef.current.scrollHeight >
                wrapperRef.current.clientHeight;
            setScrollable(scrollable);

            if (scrollable) {
                actionBarRef.current.style.transform = `translateY(0)`;
            } else {
                calculateStickyInViewport();
            }
        });

        observer.observe(wrapperRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const scrollHandler = () => {
            requestAnimationFrame(() => {
                if (scrollable) {
                    calculateFixedInViewport();
                } else {
                    calculateStickyInViewport();
                }
            });

            if (wrapperRef.current) {
                setTableEnd(
                    wrapperRef.current.getBoundingClientRect().bottom <=
                        window.innerHeight
                );
            }
        };
        window.addEventListener("scroll", scrollHandler);

        return () => window.removeEventListener("scroll", scrollHandler);
    }, [scrollable]);

    useEffect(() => {
        checkLastBorder();
    }, [rows]);

    // ===========================================================================
    // HELPER FUNCTIONS
    // ===========================================================================
    const isAllCheckboxSelected = (): boolean => {
        return selectedIds?.length === rows.length;
    };

    const isIndeterminateCheckbox = (): boolean => {
        return (
            selectedIds && selectedIds.length !== 0 && !isAllCheckboxSelected()
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
        setShowLastBorder(
            tableRef.current?.scrollHeight <
                (tableRef.current?.childNodes[0] as HTMLElement).clientHeight
        );
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderHeaders = () => (
        <thead ref={headerRef}>
            <HeaderRow>
                {enableMultiSelect && renderHeaderCheckBox()}
                {headers.map(renderHeaderCell)}
            </HeaderRow>
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

        return (
            <HeaderCell
                data-testid={getDataTestId(`header-${fieldKey}`)}
                key={fieldKey}
                $clickable={clickable}
                onClick={() => clickable && onHeaderClick?.(fieldKey)}
                style={style}
                $isCheckbox={false}
            >
                <HeaderCellWrapper>
                    {typeof label === "string" ? (
                        <Text.H4 weight="bold">{label}</Text.H4>
                    ) : (
                        label
                    )}
                    {renderSortedArrow(fieldKey)}
                </HeaderCellWrapper>
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
                    data-testid={getDataTestId(`header-${fieldKey}-arrowup`)}
                />
            );
        }
        return (
            <ArrowDownIcon
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
            >
                <CheckBoxWrapper>
                    {enableSelectAll && (
                        <Checkbox
                            displaySize="small"
                            checked={isAllCheckboxSelected()}
                            indeterminate={isIndeterminateCheckbox()}
                            onClick={() => {
                                onSelectAll(isAllCheckboxSelected());
                            }}
                        />
                    )}
                </CheckBoxWrapper>
            </HeaderCell>
        );
    };

    const renderRows = () => {
        return rows?.length < 1 ? (
            <tr>
                <EmptyViewCell colSpan={getTotalColumns()}>
                    {renderCustomEmptyView
                        ? renderCustomEmptyView()
                        : renderBasicEmptyView()}
                </EmptyViewCell>
            </tr>
        ) : (
            <>
                {rows?.map((row: RowProps, index: number) => (
                    <BodyRow
                        data-testid={getDataTestId(`row-${row.id.toString()}`)}
                        key={row.id.toString()}
                        $alternating={isAlternatingRow(index)}
                        $isSelectable={enableMultiSelect}
                        $isSelected={isRowSelected(row.id.toString())}
                    >
                        {enableMultiSelect &&
                            renderRowCheckBox(row.id.toString())}

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

    const renderRowCheckBox = (rowId: string) => {
        return (
            <BodyCell
                data-testid={getDataTestId(`row-${rowId}-selection`)}
                $isCheckbox={true}
            >
                <CheckBoxWrapper>
                    <Checkbox
                        displaySize="small"
                        checked={isRowSelected(rowId)}
                        onClick={() => {
                            onSelect(rowId, !isRowSelected(rowId));
                        }}
                        disabled={isDisabledRow(rowId)}
                    />
                </CheckBoxWrapper>
            </BodyCell>
        );
    };

    const renderBasicEmptyView = () => {
        return (
            <ErrorDisplayElement
                type={"no-item-found"}
                title={
                    emptyView?.title ? (
                        typeof emptyView.title === "string" ? (
                            <Text.H3>{emptyView.title}</Text.H3>
                        ) : (
                            emptyView.title
                        )
                    ) : (
                        <Text.H3>{"No <items> found"}</Text.H3>
                    )
                }
                description={
                    emptyView?.description
                        ? emptyView.description
                        : "No matching rows"
                }
                actionButton={emptyView?.actionButton}
                img={emptyView?.img}
            />
        );
    };

    const renderLoader = () => {
        return (
            <tr>
                <td colSpan={getTotalColumns()}>
                    <LoaderWrapper>
                        {loadState === "loading" && <LoadingDotsSpinner />}
                    </LoaderWrapper>
                </td>
            </tr>
        );
    };

    const renderSelectionBar = () => {
        return (
            <ActionBarWrapper
                ref={actionBarRef}
                $fixed={isFloatingActionBar}
                $left={tableRef?.current?.getBoundingClientRect()?.left}
                $width={tableRef?.current?.clientWidth}
            >
                <ActionBar
                    $float={
                        (scrollable ? !scrollEnd : !end) || isFloatingActionBar
                    }
                    $scrollable={scrollable}
                >
                    <Text.H5 weight="semibold">{`${selectedIds.length} item${
                        selectedIds.length > 1 ? "s" : ""
                    } selected`}</Text.H5>
                    <Button.Small
                        styleType="link"
                        onClick={onClearSelectionClick}
                    >
                        Clear selection
                    </Button.Small>
                    {actionBarContent}
                </ActionBar>
            </ActionBarWrapper>
        );
    };

    return (
        <TableWrapper
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
        >
            <TableContainer>
                <Table
                    $end={tableEnd}
                    $scrollable={scrollable}
                    ref={tableRef}
                    $stickyHeader={enableStickyHeader}
                >
                    {renderHeaders()}
                    <TableBody $showLastRowBottomBorder={showLastBorder}>
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
            <div
                ref={(r) => {
                    tableEndRef.current = r;
                    endRef(r);
                }}
            />
        </TableWrapper>
    );
};
