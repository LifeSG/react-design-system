import { css } from "@linaria/core";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

type DivProps = ComponentPropsWithoutRef<"div">;

// =============================================================================
// STYLING
// =============================================================================
const container = css`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;

    &:not(:last-child) {
        margin-bottom: 1.5rem;
    }

    button {
        flex: 0 fit-content;
    }
`;

export const Container = ({ className, ...props }: DivProps) => (
    <div {...props} className={clsx(container, className)} />
);
