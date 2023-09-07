import { LoadingDotsSpinner } from "../animations";
import {
    BodyCell,
    BodyCellContent,
    BodyRow,
    CheckBoxWrapper,
    ClearSelectionAction,
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
    renderCustomEmptyView,
    onHeaderClick,
    onSelect,
    onSelectAll,
    onClearSelectionClick,
    ...otherProps
}: DataTableProps) => {
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
        return !!alternatingRows && index % 2 === 0;
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

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderHeaders = () => (
        <HeaderRow>
            {enableMultiSelect && renderHeaderCheckBox()}
            {headers.map(renderHeaderCell)}
        </HeaderRow>
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
            <SelectionBar>
                <Text.H5 weight="semibold">{`${selectedIds.length} items selected`}</Text.H5>
                <ClearSelectionAction onClick={onClearSelectionClick}>
                    Clear Selection
                </ClearSelectionAction>
                {selectionBarContent && selectionBarContent()}
            </SelectionBar>
        );
    };

    return (
        <TableWrapper
            id={id || "table-wrapper"}
            data-testid={otherProps["data-testid"] || "table"}
            className={className}
        >
            <TableContainer>
                <Table>
                    <tbody>
                        {renderHeaders()}
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
