/// <reference types="react" />
interface TableProps {
    $end: boolean;
    $scrollable: boolean;
    $stickyHeader: boolean;
}
interface TableBodyProps {
    $showLastRowBottomBorder: boolean;
}
interface HeaderCellProps {
    $clickable: boolean;
    $isCheckbox: boolean;
}
interface BodyRowProps {
    $alternating: boolean;
    $isSelected?: boolean;
    $isSelectable?: boolean;
}
interface BodyCellProps {
    $isCheckbox: boolean;
}
interface ActionBarWrapperProps {
    $fixed: boolean;
    $left?: number | undefined;
    $width?: number | undefined;
}
interface ActionBarProps {
    $float: boolean;
    $scrollable: boolean;
}
export declare const TableWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TableContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Table: import("styled-components").StyledComponent<"table", import("styled-components").DefaultTheme, TableProps, never>;
export declare const TableBody: import("styled-components").StyledComponent<"tbody", import("styled-components").DefaultTheme, TableBodyProps, never>;
export declare const ActionBarWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ActionBarWrapperProps, never>;
export declare const TextButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, import("../shared/input-wrapper").InputStyleProps, never>;
export declare const ActionBar: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ActionBarProps, never>;
export declare const HeaderRow: import("styled-components").StyledComponent<"tr", import("styled-components").DefaultTheme, {}, never>;
export declare const HeaderCell: import("styled-components").StyledComponent<"th", import("styled-components").DefaultTheme, HeaderCellProps, never>;
export declare const HeaderCellWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const BodyRow: import("styled-components").StyledComponent<"tr", import("styled-components").DefaultTheme, BodyRowProps, never>;
export declare const BodyCell: import("styled-components").StyledComponent<"td", import("styled-components").DefaultTheme, BodyCellProps, never>;
export declare const BodyCellContent: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../typography").TypographyProps, never>;
export declare const CheckBoxWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LoaderWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ErrorDisplayTitle: import("styled-components").StyledComponent<keyof JSX.IntrinsicElements, import("styled-components").DefaultTheme, import("../typography").TypographyProps, never>;
export declare const EmptyViewCell: import("styled-components").StyledComponent<"td", import("styled-components").DefaultTheme, {}, never>;
export {};
