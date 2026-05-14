interface TableProps {
    $end: boolean;
    $scrollable: boolean;
    $stickyHeader: boolean | undefined;
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
export declare const TableWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const TableContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const Table: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, keyof TableProps> & TableProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, keyof TableProps> & TableProps, never>>> & string;
export declare const TableBody: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "$showLastRowBottomBorder"> & TableBodyProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "$showLastRowBottomBorder"> & TableBodyProps, never>>> & string;
export declare const ActionBarWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ActionBarWrapperProps> & ActionBarWrapperProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ActionBarWrapperProps> & ActionBarWrapperProps, never>>> & string;
export declare const TextButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../shared/input-wrapper").BasicButtonProps & import("react").RefAttributes<HTMLButtonElement>, never> & Partial<Pick<import("../shared/input-wrapper").BasicButtonProps & import("react").RefAttributes<HTMLButtonElement>, never>>> & string & Omit<(props: import("../shared/input-wrapper").BasicButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const ActionBar: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ActionBarProps> & ActionBarProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ActionBarProps> & ActionBarProps, never>>> & string;
export declare const HeaderRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, never>>> & string;
export declare const HeaderCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, keyof HeaderCellProps> & HeaderCellProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, keyof HeaderCellProps> & HeaderCellProps, never>>> & string;
export declare const HeaderCellWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const BodyRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, keyof BodyRowProps> & BodyRowProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, keyof BodyRowProps> & BodyRowProps, never>>> & string;
export declare const BodyCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "$isCheckbox"> & BodyCellProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "$isCheckbox"> & BodyCellProps, never>>> & string;
export declare const BodyCellContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, never> & Partial<Pick<Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, never>>> & string & Omit<(props: Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const CheckBoxWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const LoaderWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const ErrorDisplayTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLHeadingElement>, never> & Partial<Pick<Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLHeadingElement>, never>>> & string & Omit<(props: Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLHeadingElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const EmptyViewCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, never>>> & string;
export {};
