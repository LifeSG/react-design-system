import { css } from "@linaria/core";
import type { ReactNode } from "react";
import { MediaQuery } from "src/theme";

interface WrapperProps {
    children: ReactNode;
}

export const AnimationDisplay = ({ children }: WrapperProps) => (
    <div className={animationDisplay}>{children}</div>
);

const animationDisplay = css`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 1.25rem;

    ${MediaQuery.MaxWidth.sm} {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

export const AnimationItem = ({ children }: WrapperProps) => (
    <div className={animationItem}>{children}</div>
);

const animationItem = css`
    grid-column: span 1;
    display: flex;
    flex-direction: column;
`;

export const AnimationPane = ({ children }: WrapperProps) => (
    <div className={animationPane}>{children}</div>
);

const animationPane = css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fbfcfe;
    height: 18rem;
`;

export const Content = ({ children }: WrapperProps) => (
    <div className={content}>{children}</div>
);

const content = css`
    margin-top: 1rem;
    font-family: "Nunito Sans";
    padding: 0 0.5rem;

    code {
        display: flex;
        padding: 0.5rem;
        margin-bottom: 1rem;
    }
`;
