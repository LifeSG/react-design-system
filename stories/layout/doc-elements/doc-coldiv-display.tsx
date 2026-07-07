import { css } from "@linaria/core";
import clsx from "clsx";
import type { ComponentProps } from "react";
import { Layout } from "src/layout";

type ColDivProps = ComponentProps<typeof Layout.ColDiv>;
type ContentProps = ComponentProps<typeof Layout.Content>;

const column = css`
    background: #f9b5b2;
    border: 2px dotted #f26664;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`;

export const Column = ({ className, ...props }: ColDivProps) => (
    <Layout.ColDiv {...props} className={clsx(column, className)} />
);
Column.displayName = "Layout.ColDiv";

const grid = css`
    height: 100vh;
    background: #fdddd7;
    align-content: center;
`;

export const Grid = ({ className, ...props }: ContentProps) => (
    <Layout.Content {...props} className={clsx(grid, className)} />
);
Grid.displayName = "Layout.Content";
