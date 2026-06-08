import { css } from "@linaria/core";
import type { ReactNode } from "react";

// =============================================================================
// STYLING
// =============================================================================
interface ContainerProps {
    children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
    <div className={container}>{children}</div>
);

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
