import { Font } from "src/theme";
import { FontSet, FontSpecSet, ThemeSpec } from "src/theme/types";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { getFontSpec } from "../../../src/theme/font-spec/theme-helper";

interface FontCollectionProps {
    tokens: (keyof FontSet)[];
    fontSizeToken: keyof FontSpecSet;
    lineHeightToken: keyof FontSpecSet;
    letterSpacingToken: keyof FontSpecSet;
}

const FontCollection = ({
    tokens,
    fontSizeToken,
    lineHeightToken,
    letterSpacingToken,
}: FontCollectionProps) => {
    const theme = useTheme();
    const fontSize = getFontSpec(fontSizeToken)({ theme });
    const lineHeight = getFontSpec(lineHeightToken)({ theme });
    const letterSpacing = getFontSpec(letterSpacingToken)({ theme });

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

interface FontDisplayProps {
    theme: ThemeSpec;
}

export const FontDisplay = ({ theme }: FontDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Display>
                <HeaderRow>
                    <div>Token</div>
                    <div>Font size</div>
                    <div>Line height</div>
                    <div>Letter spacing</div>
                </HeaderRow>
                <FontCollection
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
                <FontCollection
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
                <FontCollection
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
                <FontCollection
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
                <FontCollection
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
                <FontCollection
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
                <FontCollection
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
                <FontCollection
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
                <FontCollection
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
                <FontCollection
                    tokens={[
                        "body-xs-light",
                        "body-xs-regular",
                        "body-xs-semibold",
                        "body-xs-bold",
                    ]}
                    fontSizeToken="body-size-xs"
                    lineHeightToken="body-lh-xs"
                    letterSpacingToken="body-ls-xs"
                />
                <FontCollection
                    tokens={["formlabel-baseline-semibold"]}
                    fontSizeToken="formlabel-size-baseline"
                    lineHeightToken="formlabel-lh-baseline"
                    letterSpacingToken="formlabel-ls-baseline"
                />
                <FontCollection
                    tokens={["formlabel-lg-semibold"]}
                    fontSizeToken="formlabel-size-lg"
                    lineHeightToken="formlabel-lh-lg"
                    letterSpacingToken="formlabel-ls-lg"
                />
            </Display>
        </ThemeProvider>
    );
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface TextPreviewProps {
    $token: keyof FontSet;
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
    ${(props) => Font[props.$token](props)}
    margin-right: 3rem;
`;
