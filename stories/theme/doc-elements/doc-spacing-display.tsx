import { css } from "@linaria/core";
import clsx from "clsx";
import type { ThemeType } from "src/theme";
import { Spacing, ThemeProvider, useDesignToken } from "src/theme";

interface SpacingDisplayProps {
    theme: ThemeType;
}

export const SpacingDisplay = ({ theme }: SpacingDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <div className={display}>
                <div className={clsx(row, headerRow)}>
                    <div>Token</div>
                    <div>Value</div>
                    <div></div>
                </div>
                <SpacingCollection token="spacing-0" />
                <SpacingCollection token="spacing-4" />
                <SpacingCollection token="spacing-8" />
                <SpacingCollection token="spacing-12" />
                <SpacingCollection token="spacing-16" />
                <SpacingCollection token="spacing-20" />
                <SpacingCollection token="spacing-24" />
                <SpacingCollection token="spacing-32" />
                <SpacingCollection token="spacing-40" />
                <SpacingCollection token="spacing-48" />
                <SpacingCollection token="spacing-64" />
                <SpacingCollection token="spacing-72" />
                <div className={divider} />
                <SpacingCollection token="layout-xs" />
                <SpacingCollection token="layout-sm" />
                <SpacingCollection token="layout-md" />
                <SpacingCollection token="layout-lg" />
                <SpacingCollection token="layout-xl" />
                <SpacingCollection token="layout-xxl" />
                <SpacingCollection token="layout-xxxl" />
            </div>
        </ThemeProvider>
    );
};

export const LayoutDisplay = ({ theme }: SpacingDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <div className={display}>
                <div className={clsx(row, headerRow)}>
                    <div>Token</div>
                    <div>Value</div>
                    <div></div>
                </div>
            </div>
        </ThemeProvider>
    );
};

interface SpacingCollectionProps {
    token: keyof typeof Spacing;
}

const SpacingCollection = ({ token }: SpacingCollectionProps) => {
    const value = useDesignToken(Spacing[token]) as string;

    return (
        <div className={row} key={token}>
            <div>
                <code>{token}</code>
            </div>
            <div>{value}</div>
            <div>
                <div className={box} style={{ width: value }} />
            </div>
        </div>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const display = css`
    display: grid;
    grid-template-columns: repeat(3, minmax(max-content, 1fr));
    flex-wrap: wrap;

    margin-bottom: 2.5rem;

    &:last-child {
        margin-bottom: 1rem;
    }

    overflow-x: auto;
`;

const row = css`
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    justify-items: flex-start;
    align-items: center;
    gap: 0 3rem;
    margin-bottom: 2rem;
`;

const headerRow = css`
    margin-bottom: 1rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #dde1e2;
`;

const box = css`
    background: tomato;
    height: 24px;
`;

const divider = css`
    grid-column: 1 / -1;
    height: 1px;
    background: #dde1e2;
    margin-bottom: 2rem;
`;
