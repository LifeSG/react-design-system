import { css } from "@linaria/core";
import clsx from "clsx";
import type { ThemeType } from "src/theme";
import { Radius, ThemeProvider, useDesignToken } from "src/theme";

interface RadiusDisplayProps {
    theme: ThemeType;
}

export const RadiusDisplay = ({ theme }: RadiusDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <div className={display}>
                <div className={clsx(row, headerRow)}>
                    <div>Token</div>
                    <div>Value</div>
                    <div></div>
                </div>
                <RadiusCollection token="none" />
                <RadiusCollection token="xs" />
                <RadiusCollection token="sm" />
                <RadiusCollection token="md" />
                <RadiusCollection token="lg" />
                <RadiusCollection token="full" />
            </div>
        </ThemeProvider>
    );
};

interface RadiusCollectionProps {
    token: keyof typeof Radius;
}

const RadiusCollection = ({ token }: RadiusCollectionProps) => {
    const value = useDesignToken(Radius[token]) as string;

    return (
        <div className={row} key={token}>
            <div>
                <code>{token}</code>
            </div>
            <div>{value}</div>
            <div>
                <div
                    className={radiusExample}
                    style={{ borderRadius: value }}
                />
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
    align-items: flex-start;
    gap: 0 3rem;
    margin-bottom: 2rem;
`;

const headerRow = css`
    margin-bottom: 1rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #dde1e2;
`;

const radiusExample = css`
    height: 48px;
    width: 128px;
    background: tomato;
`;
