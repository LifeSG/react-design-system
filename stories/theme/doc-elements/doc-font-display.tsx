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
                        "heading-xxl-light",
                        "heading-xxl-regular",
                        "heading-xxl-semibold",
                        "heading-xxl-bold",
                    ]}
                    fontSizeToken="heading-size-xxl"
                    lineHeightToken="heading-lh-xxl"
                    letterSpacingToken="heading-ls-xxl"
                />
                <FontCollection
                    tokens={[
                        "heading-xl-light",
                        "heading-xl-regular",
                        "heading-xl-semibold",
                        "heading-xl-bold",
                    ]}
                    fontSizeToken="heading-size-xl"
                    lineHeightToken="heading-lh-xl"
                    letterSpacingToken="heading-ls-xl"
                />
                <FontCollection
                    tokens={[
                        "heading-lg-light",
                        "heading-lg-regular",
                        "heading-lg-semibold",
                        "heading-lg-bold",
                    ]}
                    fontSizeToken="heading-size-lg"
                    lineHeightToken="heading-lh-lg"
                    letterSpacingToken="heading-ls-lg"
                />
                <FontCollection
                    tokens={[
                        "heading-md-light",
                        "heading-md-regular",
                        "heading-md-semibold",
                        "heading-md-bold",
                    ]}
                    fontSizeToken="heading-size-md"
                    lineHeightToken="heading-lh-md"
                    letterSpacingToken="heading-ls-md"
                />
                <FontCollection
                    tokens={[
                        "heading-sm-light",
                        "heading-sm-regular",
                        "heading-sm-semibold",
                        "heading-sm-bold",
                    ]}
                    fontSizeToken="heading-size-sm"
                    lineHeightToken="heading-lh-sm"
                    letterSpacingToken="heading-ls-sm"
                />
                <FontCollection
                    tokens={[
                        "heading-xs-light",
                        "heading-xs-regular",
                        "heading-xs-semibold",
                        "heading-xs-bold",
                    ]}
                    fontSizeToken="heading-size-xs"
                    lineHeightToken="heading-lh-xs"
                    letterSpacingToken="heading-ls-xs"
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
                    tokens={["form-label"]}
                    fontSizeToken="form-label-size"
                    lineHeightToken="form-label-lh"
                    letterSpacingToken="form-label-ls"
                />
                <FontCollection
                    tokens={["form-description"]}
                    fontSizeToken="form-description-size"
                    lineHeightToken="form-description-lh"
                    letterSpacingToken="form-description-ls"
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
