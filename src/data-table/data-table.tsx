import { LoadingDotsSpinner } from "../animations";
import {
    BodyCell,
    BodyRow,
    CheckBox,
    CheckBoxWrapper,
    CustomErrorDisplay,
    HeaderCell,
    HeaderCellWrapper,
    HeaderRow,
    LoaderWrapper,
    Table,
    TableWrapper,
} from "./data-table.styles";
import { DataTableProps, HeaderProps, RowProps } from "./types";
import { ErrorDisplayAttributes } from "../error-display/types";
import { ArrowDownIcon, ArrowUpIcon } from "@lifesg/react-icons";

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
    // actionsConfig,
    alternatingRows,
    customEmptyView,
    loadState = "success",
    emptyView = DEFAULT_EMPTY_VIEW_OPTIONS,
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
            headers.length + (selectionConfig?.showCheckboxes ? 1 : 0)
            //  + (actionsConfig?.showActions ? 1 : 0)
        );
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderHeaders = () => (
        <HeaderRow className={headersConfig?.className}>
            {selectionConfig?.showCheckboxes && renderHeaderCheckBox()}
            {headers.map(renderHeaderCell)}
            {/* {actionsConfig?.showActions && (
                <HeaderCell
                    data-testid={getDataTestId("header-action")}
                    $clickable={false}
                    $maxWidth={actionsConfig.headerWidth}
                    className={actionsConfig.headerClassName}
                >
                    {actionsConfig.headerLabel}
                </HeaderCell>
            )} */}
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
                $clickable={clickable}
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
                <ArrowUpIcon
                    data-testid={getDataTestId(`header-${fieldKey}-arrowup`)}
                />
            );
        } else {
            return (
                <ArrowDownIcon
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
                $clickable={false}
                $maxWidth={selectionConfig?.headerWidth}
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

    const renderRows = () => {
        return rows?.length < 1 ? (
            <tr>
                <td colSpan={getTotalColumns()}>
                    {customEmptyView ? customEmptyView() : basicEmptyView()}
                </td>
            </tr>
        ) : (
            <>
                {rows?.map((row: RowProps, index: number) => (
                    <BodyRow
                        data-testid={getDataTestId(`row-${row.id.toString()}`)}
                        key={row.id.toString()}
                        className={
                            isAlternatingRow(index)
                                ? rowsConfig?.alternatingClassName
                                : rowsConfig?.className
                        }
                        $alternating={isAlternatingRow(index)}
                        $isSelectable={selectionConfig?.showCheckboxes}
                        $isSelected={isRowSelected(row.id.toString())}
                    >
                        {selectionConfig?.showCheckboxes &&
                            renderRowCheckBox(row.id.toString())}

                        {headers.map((header) => renderRowCell(header, row))}

                        {/* {actionsConfig?.showActions &&
                            actionsConfig.actions && (
                                <BodyCell
                                    data-testid={getDataTestId(
                                        `row-${row.id.toString()}-action`
                                    )}
                                    $width={actionsConfig.headerWidth}
                                    className={actionsConfig.className}
                                >
                                    {actionsConfig?.actions(
                                        row,
                                        isRowSelected(row.id.toString())
                                    )}
                                </BodyCell>
                            )} */}
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
                $width={selectionConfig?.headerWidth}
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
            <CustomErrorDisplay
                type="no-item-found"
                title={emptyView?.title ? emptyView?.title : "No data found"}
                description={
                    emptyView?.description
                        ? emptyView?.description
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

    return (
        <TableWrapper>
            <Table
                id={id || "table-wrapper"}
                data-testid={otherProps["data-testid"] || "table"}
                className={className}
                $addMarginToFirstColumn={!selectionConfig?.showCheckboxes}
                // $addMarginToLastColumn={!actionsConfig?.showActions}
            >
                <tbody>
                    {renderHeaders()}
                    {loadState === "success" && renderRows()}
                    {loadState === "loading" && renderLoader()}
                </tbody>
            </Table>
        </TableWrapper>
    );
};

const DEFAULT_EMPTY_VIEW_OPTIONS: ErrorDisplayAttributes = {
    title: "No results found",
    description: "No matching rows",
    actionButton: {
        children: "Reload",
        onClick: () => {
            console.log("Clicked on Reload button");
        },
    },
};
