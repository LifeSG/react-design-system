import { LoadingDotsSpinner } from "../animations";
import {
    BodyCell,
    BodyRow,
    CheckBoxWrapper,
    CheckboxElement,
    ErrorDisplayElement,
    HeaderCell,
    HeaderCellWrapper,
    HeaderRow,
    LoaderWrapper,
    Table,
    TableWrapper,
} from "./data-table.styles";
import { DataTableProps, HeaderProps, RowProps } from "./types";
import { ArrowDownIcon, ArrowUpIcon } from "@lifesg/react-icons";
import { Text } from "../text";

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
    enableSelectAll,
    emptyView,
    renderCustomEmptyView,
    onHeaderClick,
    onSelect,
    onSelectAll,
    ...otherProps
}: DataTableProps) => {
    // ===========================================================================
    // HELPER FUNCTIONS
    // ===========================================================================
    const isAllCheckBoxSelected = (): boolean => {
        return selectedIds?.length === rows.length;
    };

    const isRowSelected = (rowId: string): boolean => {
        return !!selectedIds?.includes(rowId);
    };

    const isAlternatingRow = (index: number): boolean => {
        return !!alternatingRows && index % 2 === 0;
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
            >
                <CheckBoxWrapper>
                    {enableSelectAll && (
                        <CheckboxElement
                            displaySize="small"
                            checked={isAllCheckBoxSelected()}
                            onClick={() => {
                                onSelectAll(isAllCheckBoxSelected());
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
                <td colSpan={getTotalColumns()}>
                    {renderCustomEmptyView
                        ? renderCustomEmptyView()
                        : renderBasicEmptyView()}
                </td>
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
            <BodyCell data-testid={getDataTestId(`row-${rowId}-selection`)}>
                <CheckBoxWrapper>
                    <CheckboxElement
                        displaySize="small"
                        checked={isRowSelected(rowId)}
                        onClick={() => {
                            onSelect(rowId, !isRowSelected(rowId));
                        }}
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

    return (
        <TableWrapper>
            <Table
                id={id || "table-wrapper"}
                data-testid={otherProps["data-testid"] || "table"}
                className={className}
            >
                <tbody>
                    {renderHeaders()}
                    {loadState === "success" ? renderRows() : renderLoader()}
                </tbody>
            </Table>
        </TableWrapper>
    );
};
