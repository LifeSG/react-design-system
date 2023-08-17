import { Text } from "../text";
import { Button } from "../button";
import { LoadingDotsSpinner } from "../animations";
import {
    BodyCell,
    BodyRow,
    CheckBox,
    CheckBoxWrapper,
    EmptyDataElement,
    HeaderCell,
    HeaderCellWrapper,
    HeaderRow,
    LoaderWrapper,
    SortArrowDownIcon,
    SortArrowUpIcon,
    Table,
    TableWrapper,
} from "./data-table.styles";
import {
    DataTableProps,
    HeaderProps,
    RowProps,
    SortIndicatorProps,
} from "./types";

// eslint-disable-next-line max-lines-per-function
export const DataTable = ({
    id,
    headersConfig,
    headers,
    rowsConfig,
    rows,
    className,
    selectionConfig,
    selection,
    sortIndicators,
    actionsConfig,
    alternatingRows,
    customEmptyView,
    loadState = "success",
    ...otherProps
}: DataTableProps) => {
    // ===========================================================================
    // HELPER FUNCTIONS
    // ===========================================================================
    const isAllCheckBoxSelected = (): boolean => {
        return selection?.length === rows.length;
    };

    const isRowSelected = (rowId: string): boolean => {
        return !!selection?.includes(rowId);
    };

    const isAlternatingRow = (index: number): boolean => {
        return !!alternatingRows && index % 2 === 0;
    };

    const getDataTestId = (subStr: string) => {
        if (!otherProps["data-testid"]) return undefined;
        return `${otherProps["data-testid"]}-${subStr}`;
    };

    const getTotalColumns = (): number => {
        return (
            headers.length +
            (selectionConfig?.showCheckboxes ? 1 : 0) +
            (actionsConfig?.showActions ? 1 : 0)
        );
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    // Render the table headers
    const renderHeaders = () => (
        <HeaderRow className={headersConfig?.className}>
            {/* Checkboxes for selection */}
            {selectionConfig?.showCheckboxes && renderHeaderCheckBox()}
            {/* Render each header cell */}
            {headers.map(renderHeaderCell)}
            {/* Actions column */}
            {actionsConfig?.showActions && (
                <HeaderCell
                    data-testid={getDataTestId("header-action")}
                    clickable={false}
                    maxWidth={actionsConfig.headerWidth}
                    className={actionsConfig.headerClassName}
                >
                    {actionsConfig.headerLabel}
                </HeaderCell>
            )}
        </HeaderRow>
    );

    const renderHeaderCell = (header: HeaderProps) => {
        const {
            fieldKey,
            label,
            clickable = false,
            className: headerClassName,
            style,
        } = typeof header === "string"
            ? {
                  fieldKey: header,
                  label: header,
                  className: undefined,
                  style: undefined,
              }
            : header;

        return (
            <HeaderCell
                data-testid={getDataTestId(`header-${fieldKey}`)}
                key={fieldKey}
                clickable={clickable}
                className={headerClassName}
                onClick={() =>
                    clickable && headersConfig?.onClickHeader?.(fieldKey)
                }
                style={style}
            >
                <HeaderCellWrapper>
                    {label}
                    {renderSortedArrow(fieldKey)}
                </HeaderCellWrapper>
            </HeaderCell>
        );
    };

    const renderSortedArrow = (fieldKey: string) => {
        const isSorted = sortIndicators?.[fieldKey];

        if (!isSorted) {
            return <></>;
        } else if (isSorted === "asc") {
            return (
                <SortArrowUpIcon
                    data-testid={getDataTestId(`header-${fieldKey}-arrowup`)}
                />
            );
        } else {
            return (
                <SortArrowDownIcon
                    data-testid={getDataTestId(`header-${fieldKey}-arrowdown`)}
                />
            );
        }
    };

    const renderHeaderCheckBox = () => {
        return (
            <HeaderCell
                data-testid={getDataTestId("header-selection")}
                className={selectionConfig?.headerClassName}
                clickable={false}
                maxWidth={selectionConfig?.headerWidth}
            >
                <CheckBoxWrapper>
                    <CheckBox
                        displaySize="small"
                        checked={isAllCheckBoxSelected()}
                        onClick={() => {
                            selectionConfig?.onClickSelectAll?.(
                                isAllCheckBoxSelected()
                            );
                        }}
                    />
                </CheckBoxWrapper>
            </HeaderCell>
        );
    };

    // Render the table rows
    const renderRows = () => {
        return (
            <>
                {rows.map((row: RowProps, index: number) => (
                    <BodyRow
                        data-testid={getDataTestId(`row-${row.id.toString()}`)}
                        key={row.id.toString()}
                        className={
                            isAlternatingRow(index)
                                ? rowsConfig?.alternatingClassName
                                : rowsConfig?.className
                        }
                        alternating={isAlternatingRow(index)}
                        isSelectable={selectionConfig?.showCheckboxes}
                        isSelected={isRowSelected(row.id.toString())}
                    >
                        {/* Checkboxes for selection */}
                        {selectionConfig?.showCheckboxes &&
                            renderRowCheckBox(row.id.toString())}

                        {/* Render each data cell */}
                        {headers.map((header) => renderRowCell(header, row))}
                        {/* Actions row */}
                        {actionsConfig?.showActions &&
                            actionsConfig.actions && (
                                <BodyCell
                                    data-testid={getDataTestId(
                                        `row-${row.id.toString()}-action`
                                    )}
                                    width={actionsConfig.headerWidth}
                                    className={actionsConfig.className}
                                >
                                    {actionsConfig?.actions(
                                        row,
                                        isRowSelected(row.id.toString())
                                    )}
                                </BodyCell>
                            )}
                    </BodyRow>
                ))}
            </>
        );
    };

    const renderRowCell = (header: HeaderProps, row: RowProps) => {
        const style = typeof header !== "string" ? header.style : undefined;
        const fieldKey = typeof header === "string" ? header : header.fieldKey;
        const cellData = row[fieldKey];
        const cellId = `${row.id.toString()}-${fieldKey}`;

        return (
            <BodyCell
                data-testid={getDataTestId(`row-${cellId}`)}
                key={cellId}
                style={style}
            >
                {cellData}
            </BodyCell>
        );
    };

    const renderRowCheckBox = (rowId: string) => {
        return (
            <BodyCell
                data-testid={getDataTestId(`row-${rowId}-selection`)}
                className={selectionConfig?.className}
                width={selectionConfig?.headerWidth}
            >
                <CheckBoxWrapper>
                    <CheckBox
                        displaySize="small"
                        checked={isRowSelected(rowId)}
                        onClick={() => {
                            selectionConfig?.onClickSelect?.(
                                "id",
                                rowId,
                                !isRowSelected(rowId)
                            );
                        }}
                    />
                </CheckBoxWrapper>
            </BodyCell>
        );
    };

    const basicEmptyView = () => {
        return (
            <EmptyDataElement>
                {/* <img src="/img/empty-data.svg"></img> */}
                <Text.H3>No items found</Text.H3>
                <Text.Body>This is a placeholder text</Text.Body>
                <Button.Default styleType="secondary"> Trigger</Button.Default>
            </EmptyDataElement>
        );
    };

    const renderEmptyView = () => {
        if (rows.length === 0)
            return (
                <tr>
                    <td style={{ padding: "4rem" }} colSpan={getTotalColumns()}>
                        {customEmptyView ? customEmptyView() : basicEmptyView()}
                    </td>
                </tr>
            );
    };

    const renderLoader = () => {
        return (
            <tr>
                <td style={{ padding: "4rem" }} colSpan={getTotalColumns()}>
                    <LoaderWrapper>
                        {loadState === "loading" && <LoadingDotsSpinner />}
                    </LoaderWrapper>
                </td>
            </tr>
        );
    };

    return (
        <TableWrapper>
            <Table
                id={id || "table-wrapper"}
                data-testid={otherProps["data-testid"] || "table"}
                className={className}
                $addMarginToFirstColumn={!selectionConfig?.showCheckboxes}
                $addMarginToLastColumn={!actionsConfig?.showActions}
            >
                <tbody>
                    {renderHeaders()}
                    {loadState === "success" && renderRows()}
                    {loadState === "success" && renderEmptyView()}
                    {loadState === "loading" && renderLoader()}
                </tbody>
            </Table>
        </TableWrapper>
    );
};
