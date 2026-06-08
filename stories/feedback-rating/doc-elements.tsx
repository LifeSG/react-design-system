import { css } from "@linaria/core";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

type DivProps = ComponentPropsWithoutRef<"div">;

// =============================================================================
// STYLING
// =============================================================================
const modalBoxDiv = css`
    padding: 2rem;
`;

export const ModalBoxDiv = ({ className, ...props }: DivProps) => (
    <div {...props} className={clsx(modalBoxDiv, className)} />
);
