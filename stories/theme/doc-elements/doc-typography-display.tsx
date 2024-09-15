import { Typography } from "src/theme";
import { FontSet, ThemeSpec, TypographySet } from "src/theme/types";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { getFontValues } from "../../../src/theme/font/theme-helper";

interface TypographyCollectionProps {
    tokens: (keyof TypographySet)[];
    fontSizeToken: keyof FontSet;
    lineHeightToken: keyof FontSet;
    letterSpacingToken: keyof FontSet;
}

const TypographyCollection = ({
    tokens,
    fontSizeToken,
    lineHeightToken,
    letterSpacingToken,
}: TypographyCollectionProps) => {
    const theme = useTheme();
    const fontSize = getFontValues(fontSizeToken)({ theme });
    const lineHeight = getFontValues(lineHeightToken)({ theme });
    const letterSpacing = getFontValues(letterSpacingToken)({ theme });

    return (
        <Row key={fontSizeToken}>
            <div>
                {tokens.map((token) => {
                    return (
                        <TextPreview key={token} $token={token}>
                            {token}
                        </TextPreview>
                    );
                })}
            </div>
            <div>{fontSize}</div>
            <div>{lineHeight}</div>
            <div>{letterSpacing}</div>
        </Row>
    );
};

interface TypographyDisplayProps {
    theme: ThemeSpec;
}

export const TypographyDisplay = ({ theme }: TypographyDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Display>
                <HeaderRow>
                    <div>Token</div>
                    <div>Font size</div>
                    <div>Line height</div>
                    <div>Letter spacing</div>
                </HeaderRow>
                <TypographyCollection
                    tokens={[
                        "header-xxl-light",
                        "header-xxl-regular",
                        "header-xxl-semibold",
                        "header-xxl-bold",
                    ]}
                    fontSizeToken="header-size-xxl"
                    lineHeightToken="header-lh-xxl"
                    letterSpacingToken="header-ls-xxl"
                />
                <TypographyCollection
                    tokens={[
                        "header-xl-light",
                        "header-xl-regular",
                        "header-xl-semibold",
                        "header-xl-bold",
                    ]}
                    fontSizeToken="header-size-xl"
                    lineHeightToken="header-lh-xl"
                    letterSpacingToken="header-ls-xl"
                />
                <TypographyCollection
                    tokens={[
                        "header-lg-light",
                        "header-lg-regular",
                        "header-lg-semibold",
                        "header-lg-bold",
                    ]}
                    fontSizeToken="header-size-lg"
                    lineHeightToken="header-lh-lg"
                    letterSpacingToken="header-ls-lg"
                />
                <TypographyCollection
                    tokens={[
                        "header-md-light",
                        "header-md-regular",
                        "header-md-semibold",
                        "header-md-bold",
                    ]}
                    fontSizeToken="header-size-md"
                    lineHeightToken="header-lh-md"
                    letterSpacingToken="header-ls-md"
                />
                <TypographyCollection
                    tokens={[
                        "header-sm-light",
                        "header-sm-regular",
                        "header-sm-semibold",
                        "header-sm-bold",
                    ]}
                    fontSizeToken="header-size-sm"
                    lineHeightToken="header-lh-sm"
                    letterSpacingToken="header-ls-sm"
                />
                <TypographyCollection
                    tokens={[
                        "header-xs-light",
                        "header-xs-regular",
                        "header-xs-semibold",
                        "header-xs-bold",
                    ]}
                    fontSizeToken="header-size-xs"
                    lineHeightToken="header-lh-xs"
                    letterSpacingToken="header-ls-xs"
                />
                <TypographyCollection
                    tokens={[
                        "body-baseline-light",
                        "body-baseline-regular",
                        "body-baseline-semibold",
                        "body-baseline-bold",
                    ]}
                    fontSizeToken="body-size-baseline"
                    lineHeightToken="body-lh-baseline"
                    letterSpacingToken="body-ls-baseline"
                />
                <TypographyCollection
                    tokens={[
                        "body-lg-light",
                        "body-lg-regular",
                        "body-lg-semibold",
                        "body-lg-bold",
                    ]}
                    fontSizeToken="body-size-lg"
                    lineHeightToken="body-lh-lg"
                    letterSpacingToken="body-ls-lg"
                />
                <TypographyCollection
                    tokens={[
                        "body-md-light",
                        "body-md-regular",
                        "body-md-semibold",
                        "body-md-bold",
                    ]}
                    fontSizeToken="body-size-md"
                    lineHeightToken="body-lh-md"
                    letterSpacingToken="body-ls-md"
                />
                <TypographyCollection
                    tokens={[
                        "body-sm-light",
                        "body-sm-regular",
                        "body-sm-semibold",
                        "body-sm-bold",
                    ]}
                    fontSizeToken="body-size-sm"
                    lineHeightToken="body-lh-sm"
                    letterSpacingToken="body-ls-sm"
                />
                <TypographyCollection
                    tokens={["formlabel-baseline-semibold"]}
                    fontSizeToken="body-size-baseline"
                    lineHeightToken="body-lh-baseline"
                    letterSpacingToken="body-ls-baseline"
                />
                <TypographyCollection
                    tokens={["formlabel-lg-semibold"]}
                    fontSizeToken="body-size-lg"
                    lineHeightToken="body-lh-lg"
                    letterSpacingToken="body-ls-lg"
                />
            </Display>
        </ThemeProvider>
    );
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface TextPreviewProps {
    $token: string;
}

// =============================================================================
// STYLING
// =============================================================================
const Display = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(max-content, 1fr));
    flex-wrap: wrap;

    margin-bottom: 1rem;

    overflow-x: auto;
`;

const Row = styled.div`
    display: grid;
    grid-column: 1 / span 4;
    grid-template-columns: subgrid;
    justify-items: flex-start;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 2.5rem;
`;

const HeaderRow = styled(Row)`
    margin-bottom: 1rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #dde1e2;
`;

const TextPreview = styled.div<TextPreviewProps>`
    ${(props) => Typography[props.$token](props)}
    margin-right: 3rem;
`;
