import { getShadow } from "src/theme/shadow/theme-helper";
import { ShadowSet, ThemeSpec } from "src/theme/types";
import styled, { CSSProp, ThemeProvider, useTheme } from "styled-components";

interface ShadowDisplayProps {
    theme: ThemeSpec;
}

// Mapping of shadow tokens to their color tokens
const shadowColorTokens: Record<
    keyof ShadowSet,
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
            <Display>
                <HeaderRow>
                    <div>Token</div>
                    <div>Value</div>
                    <div>Colour Token</div>
                    <div></div>
                </HeaderRow>
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
            </Display>
        </ThemeProvider>
    );
};

interface ShadowCollectionProps {
    token: keyof ShadowSet;
}

const ShadowCollection = ({ token }: ShadowCollectionProps) => {
    const theme = useTheme();
    const value = getShadow(token)({
        theme,
    });
    const colorInfo = shadowColorTokens[token];

    return (
        <Row key={token}>
            <div>
                <code>{token}</code>
            </div>
            <div>{value}</div>
            <div>
                <ColorTokenInfo>
                    {colorInfo.colorToken}
                    <TokenType $type={colorInfo.type}>
                        {colorInfo.type}
                    </TokenType>
                </ColorTokenInfo>
            </div>
            <div>
                <ShadowExample $shadow={value} />
            </div>
        </Row>
    );
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface ShadowStyleProps {
    $shadow: CSSProp;
}

interface TokenTypeProps {
    $type: "primitive" | "semantic";
}

// =============================================================================
// STYLING
// =============================================================================
const Display = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(max-content, 1fr));
    flex-wrap: wrap;

    margin-bottom: 2.5rem;

    &:last-child {
        margin-bottom: 1rem;
    }

    overflow-x: auto;
`;

const Row = styled.div`
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    justify-items: flex-start;
    align-items: flex-start;
    gap: 0 3rem;
    margin-bottom: 2rem;
`;

const HeaderRow = styled(Row)`
    margin-bottom: 1rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #dde1e2;
`;

const ShadowExample = styled.div<ShadowStyleProps>`
    height: 48px;
    width: 128px;
    background: white;
    border-radius: 4px;
    box-shadow: ${(props) => props.$shadow};
`;

const ColorTokenInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

const TokenType = styled.span<TokenTypeProps>`
    font-size: 0.75rem;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    width: fit-content;

    ${(props) =>
        props.$type === "semantic"
            ? `
            background-color: #e0f2fe;
            color: #0369a1;
        `
            : `
            background-color: #f3f4f6;
            color: #374151;
        `}
`;
