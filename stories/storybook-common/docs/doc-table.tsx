import { css } from "@linaria/core";
import clsx from "clsx";
import type { ReactNode } from "react";

export const docText = css`
    font-family: "Nunito Sans", -apple-system, ".SFNSText-Regular",
        "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue",
        Helvetica, Arial, sans-serif;
    font-size: 0.875rem;
    color: #2e3438;

    a {
        color: #1768be;
        cursor: pointer;
        text-decoration: none;
    }

    code {
        background-color: #f5f5f5;
        color: #d0021b;
        font-family: monospace;
        font-size: 0.725rem;
        font-weight: 400;
        padding: 0.25rem 0.5rem;
        white-space: pre-wrap;
    }
`;

interface DocTableProps {
    children: ReactNode;
    className?: string;
}

export const DocTable = ({ children, className }: DocTableProps) => {
    return (
        <table className={clsx(docText, docTable, className)}>{children}</table>
    );
};

const docTable = css`
    width: 100%;
    position: relative;
    border-collapse: collapse;
    border-spacing: 0;
    line-height: 1.5;

    td,
    th {
        padding: 0.5rem;
        text-align: left;
        vertical-align: top;
    }

    thead,
    th {
        font-weight: bold;
    }

    tbody {
        tr {
            border: none;
            border-bottom: 1px solid #dde1e2;
            &:nth-child(even) {
                background: #f9f9f9;
            }
        }
    }

    thead {
        tr {
            border-bottom: 2px solid #1768be;
        }

        th {
            color: #1768be;
        }
    }
`;
