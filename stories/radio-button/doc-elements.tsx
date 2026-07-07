import { css } from "@linaria/core";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { Font } from "src/theme";

type DivProps = ComponentPropsWithoutRef<"div">;
type LabelProps = ComponentPropsWithoutRef<"label">;

// =============================================================================
// STYLING
// =============================================================================
const optionContainer = css`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:not(:last-of-type) {
        margin-bottom: 0.5rem;
    }
`;

export const OptionContainer = ({ className, ...props }: DivProps) => (
    <div {...props} className={clsx(optionContainer, className)} />
);
OptionContainer.displayName = "div";

const optionLabel = css`
    ${Font["body-baseline-regular"]}
    cursor: pointer;
`;

export const OptionLabel = ({ className, children, ...props }: LabelProps) => (
    <label {...props} className={clsx(optionLabel, className)}>
        {children}
    </label>
);
OptionLabel.displayName = "label";

const radioGroupLabel = css`
    ${Font["body-baseline-semibold"]}
    margin-bottom: 1rem;
`;

export const RadioGroupLabel = ({ className, ...props }: DivProps) => (
    <div {...props} className={clsx(radioGroupLabel, className)} />
);
RadioGroupLabel.displayName = "div";
