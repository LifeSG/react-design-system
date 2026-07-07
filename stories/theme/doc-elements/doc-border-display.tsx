import { css } from "@linaria/core";
import clsx from "clsx";
import type { ThemeType } from "src/theme";
import { Border, ThemeProvider, useDesignToken } from "src/theme";

interface BorderDisplayProps {
    theme: ThemeType;
}

export const BorderDisplay = ({ theme }: BorderDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <div className={display}>
                <div className={clsx(row, headerRow)}>
                    <div>Token</div>
                    <div>Value</div>
                    <div></div>
                </div>
                <BorderWidthCollection token="width-005" />
                <BorderWidthCollection token="width-010" />
                <BorderWidthCollection token="width-020" />
                <div className={divider} />
                <BorderStyleCollection token="solid" />
            </div>
        </ThemeProvider>
    );
};

interface BorderWidthCollectionProps {
    token: keyof typeof Border;
}

const BorderWidthCollection = ({ token }: BorderWidthCollectionProps) => {
    const value = useDesignToken(Border[token]) as string;

    return (
        <div className={row} key={token}>
            <div>
                <code>{token}</code>
            </div>
            <div>{value}</div>
            <div>
                <div
                    className={borderWidthExample}
                    style={{ border: `${value} solid tomato` }}
                />
            </div>
        </div>
    );
};

interface BorderStyleCollectionProps {
    token: keyof typeof Border;
}

const BorderStyleCollection = ({ token }: BorderStyleCollectionProps) => {
    const value = useDesignToken(Border[token]) as string;

    return (
        <div className={row} key={token}>
            <div>
                <code>{token}</code>
            </div>
            <div>{value}</div>
            <div>
                <div
                    className={borderStyleExample}
                    style={{ border: `1px ${value} tomato` }}
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
    grid-template-columns: max-content max-content minmax(250px, 1fr);
    flex-wrap: wrap;

    margin-bottom: 2.5rem;

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

const borderWidthExample = css`
    height: 24px;
    width: 48px;
`;

const borderStyleExample = css`
    height: 24px;
    width: 48px;
`;

const divider = css`
    grid-column: 1 / -1;
    height: 1px;
    background: #dde1e2;
    margin-bottom: 2rem;
`;
