import { css } from "@linaria/core";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

type DivProps = ComponentPropsWithoutRef<"div">;

const container = css`
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem;
`;

export const Container = ({ className, ...props }: DivProps) => (
    <div {...props} className={clsx(container, className)} />
);
