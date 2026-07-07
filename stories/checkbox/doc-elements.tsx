import { css } from "@linaria/core";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { Colour, Font } from "src/theme";

type DivProps = ComponentPropsWithoutRef<"div">;
type LabelProps = ComponentPropsWithoutRef<"label">;

// =============================================================================
// STYLING
// =============================================================================
export const SubOption = ({ className, ...props }: DivProps) => (
    <div {...props} className={clsx(subOption, className)} />
);

const subOption = css`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    margin-left: 2rem;
`;

export const Label = ({ className, children, ...props }: LabelProps) => (
    <label {...props} className={clsx(label, className)}>
        {children}
    </label>
);

const label = css`
    ${Font["body-baseline-regular"]}
    color: ${Colour.text};
    cursor: pointer;
`;

export const SelectAll = ({ className, ...props }: DivProps) => (
    <div {...props} className={clsx(selectAll, className)} />
);

const selectAll = css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;
