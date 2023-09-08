import { LoadingDotsSpinner } from "../animations";
import {
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
    SelectionBar,
    Table,
    TableContainer,
    TableWrapper,
} from "./data-table.styles";
import { DataTableProps, HeaderProps, RowProps } from "./types";
import { ArrowDownIcon, ArrowUpIcon } from "@lifesg/react-icons";
import { Text } from "../text";
import { Checkbox } from "../checkbox";
import { Button } from "../button";
import { useEffect, useRef, useState } from "react";

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
    enableSelectAll,
    enableSelectionBar,
    emptyView,
    selectionBarContent,
    enableStickyHeader = false,
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
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [showLastBorder, setShowLastBorder] = useState(false);
    const tableRef = useRef<HTMLInputElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        scrollHandler();
        checkLastBorder();
    }, []);

    // ===========================================================================
    // HELPER FUNCTIONS
    // ===========================================================================
    const isAllCheckboxSelected = (): boolean => {
        return selectedIds?.length === rows.length;
    };

    const isIndeterminateCheckbox = (): boolean => {
        return selectedIds?.length !== 0 && !isAllCheckboxSelected();
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

    const scrollHandler = () => {
        if (!tableRef.current) return;
        const bottom =
            tableRef.current.scrollHeight -
                Math.ceil(tableRef.current.scrollTop) ===
            tableRef.current.clientHeight;
        setIsAtBottom(bottom);
    };

    const checkLastBorder = () => {
        setShowLastBorder(
            tableRef.current?.scrollHeight >
                (tableRef.current?.childNodes[0] as HTMLElement).clientHeight
        );
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderHeaders = () => (
        <thead>
            <HeaderRow $isSticky={enableStickyHeader}>
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
                        <Text.H3>{"No data found"}</Text.H3>
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
            <SelectionBar $isFloating={!isAtBottom}>
                <Text.H5 weight="semibold">{`${selectedIds.length} items selected`}</Text.H5>
                <Button.Small styleType="link" onClick={onClearSelectionClick}>
                    Clear Selection
                </Button.Small>
                {selectionBarContent}
            </SelectionBar>
        );
    };

    return (
        <TableWrapper
            id={id || "table-wrapper"}
            data-testid={otherProps["data-testid"] || "table"}
            className={className}
        >
            <TableContainer
                onScroll={scrollHandler}
                ref={tableRef}
                $isRoundBorder={
                    !enableSelectionBar || !isAtBottom || !selectedIds.length
                }
            >
                <Table $showBorder={showLastBorder}>
                    {renderHeaders()}
                    <tbody>
                        {loadState === "success"
                            ? renderRows()
                            : renderLoader()}
                    </tbody>
                </Table>
            </TableContainer>
            {enableSelectionBar &&
                selectedIds?.length > 0 &&
                renderSelectionBar()}
        </TableWrapper>
    );
};
