import { css } from "@linaria/core";
import clsx from "clsx";
import type { ThemeType } from "src/theme";
import { Shadow, ThemeProvider, useDesignToken } from "src/theme";

interface ShadowDisplayProps {
    theme: ThemeType;
}

// Mapping of shadow tokens to their color tokens
const shadowColorTokens: Record<
    keyof typeof Shadow,
    { colorToken: string; type: "primitive" | "semantic" }
> = {
    "xs-subtle": { colorToken: "neutral-50", type: "primitive" },
    "xs-strong": { colorToken: "neutral-50", type: "primitive" },
    "xs-focus-strong": { colorToken: "border-focus", type: "semantic" },
    "xs-error-strong": { colorToken: "border-error", type: "semantic" },
    "sm-subtle": { colorToken: "neutral-50", type: "primitive" },
    "sm-strong": { colorToken: "neutral-50", type: "primitive" },
    "md-subtle": { colorToken: "neutral-50", type: "primitive" },
    "md-strong": { colorToken: "neutral-50", type: "primitive" },
    "lg-subtle": { colorToken: "neutral-50", type: "primitive" },
    "lg-strong": { colorToken: "neutral-50", type: "primitive" },
};

export const ShadowDisplay = ({ theme }: ShadowDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <div className={display}>
                <div className={clsx(row, headerRow)}>
                    <div>Token</div>
                    <div>Value</div>
                    <div>Colour Token</div>
                    <div></div>
                </div>
                <ShadowCollection token="xs-subtle" />
                <ShadowCollection token="xs-strong" />
                <ShadowCollection token="xs-focus-strong" />
                <ShadowCollection token="xs-error-strong" />
                <ShadowCollection token="sm-subtle" />
                <ShadowCollection token="sm-strong" />
                <ShadowCollection token="md-subtle" />
                <ShadowCollection token="md-strong" />
                <ShadowCollection token="lg-subtle" />
                <ShadowCollection token="lg-strong" />
            </div>
        </ThemeProvider>
    );
};

interface ShadowCollectionProps {
    token: keyof typeof Shadow;
}

const ShadowCollection = ({ token }: ShadowCollectionProps) => {
    const value = useDesignToken(Shadow[token]) as string;
    const colorInfo = shadowColorTokens[token];

    return (
        <div className={row} key={token}>
            <div>
                <code>{token}</code>
            </div>
            <div>{value}</div>
            <div>
                <div className={colorTokenInfo}>
                    {colorInfo.colorToken}
                    <span
                        className={clsx(
                            tokenType,
                            colorInfo.type === "semantic"
                                ? tokenTypeSemantic
                                : tokenTypePrimitive
                        )}
                    >
                        {colorInfo.type}
                    </span>
                </div>
            </div>
            <div>
                <div className={shadowExample} style={{ boxShadow: value }} />
            </div>
        </div>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const display = css`
    display: grid;
    grid-template-columns: repeat(4, minmax(max-content, 1fr));
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

const shadowExample = css`
    height: 48px;
    width: 128px;
    background: white;
    border-radius: 4px;
`;

const colorTokenInfo = css`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

const tokenType = css`
    font-size: 0.75rem;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    width: fit-content;
`;

const tokenTypeSemantic = css`
    background-color: #e0f2fe;
    color: #0369a1;
`;

const tokenTypePrimitive = css`
    background-color: #f3f4f6;
    color: #374151;
`;
