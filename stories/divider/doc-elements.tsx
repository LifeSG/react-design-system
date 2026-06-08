import { css } from "@linaria/core";
import clsx from "clsx";
import type { ComponentProps } from "react";
import { Layout } from "src/layout";

type LayoutGridProps = ComponentProps<typeof Layout.Content>;

const layoutGrid = css`
    [data-id="container"] {
        gap: 1rem;
    }
`;

export const LayoutGrid = ({ className, ...props }: LayoutGridProps) => (
    <Layout.Content {...props} className={clsx(layoutGrid, className)} />
);

LayoutGrid.displayName = "Layout.Content";
