export declare const Table: (({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => import("react/jsx-runtime").JSX.Element) & {
    Container: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
    Table: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, never>> & string;
    Head: {
        ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Body: {
        ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Row: {
        ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Cell: {
        ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    HeaderCell: {
        ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
