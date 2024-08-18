import { getPrimitiveColour } from "src/theme/colour-primitive/theme-helper";
import { PrimitiveColourSet, ThemeSpec } from "src/theme/types";
import styled, { ThemeProvider, useTheme } from "styled-components";

interface PrimitiveColourPalette {
    tokens: (keyof PrimitiveColourSet)[];
    category: string;
}

const PrimitiveColourPalette = ({
    tokens,
    category,
}: PrimitiveColourPalette) => {
    const theme = useTheme();
    return (
        <Palette>
            <PaletteLabel>{category}</PaletteLabel>
            <Swatch>
                {tokens.map((token) => {
                    const colour = getPrimitiveColour(token)({ theme });

                    return (
                        <SwatchItem key={token}>
                            <SwatchColour $colour={colour} />
                            <SwatchLabel>{token}</SwatchLabel>
                            <SwatchValue>{colour}</SwatchValue>
                        </SwatchItem>
                    );
                })}
            </Swatch>
        </Palette>
    );
};

interface PrimitiveColourDisplayProps {
    theme: ThemeSpec;
}

export const PrimitiveColourDisplay = ({
    theme,
}: PrimitiveColourDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Display>
                <PrimitiveColourPalette
                    category="Brand"
                    tokens={[
                        "brand-10",
                        "brand-20",
                        "brand-30",
                        "brand-40",
                        "brand-50",
                        "brand-60",
                        "brand-70",
                        "brand-80",
                        "brand-90",
                        "brand-100",
                    ]}
                />
                <PrimitiveColourPalette
                    category="Primary"
                    tokens={[
                        "primary-10",
                        "primary-20",
                        "primary-30",
                        "primary-40",
                        "primary-50",
                        "primary-60",
                        "primary-70",
                        "primary-80",
                        "primary-90",
                        "primary-100",
                    ]}
                />
                <PrimitiveColourPalette
                    category="Secondary"
                    tokens={[
                        "secondary-10",
                        "secondary-20",
                        "secondary-30",
                        "secondary-40",
                        "secondary-50",
                        "secondary-60",
                        "secondary-70",
                        "secondary-80",
                        "secondary-90",
                        "secondary-100",
                    ]}
                />
                <PrimitiveColourPalette
                    category="Neutral"
                    tokens={[
                        "neutral-10",
                        "neutral-20",
                        "neutral-30",
                        "neutral-40",
                        "neutral-50",
                        "neutral-60",
                        "neutral-70",
                        "neutral-80",
                        "neutral-90",
                        "neutral-100",
                    ]}
                />
                <PrimitiveColourPalette
                    category="Success"
                    tokens={[
                        "success-10",
                        "success-20",
                        "success-30",
                        "success-40",
                        "success-50",
                        "success-60",
                        "success-70",
                        "success-80",
                        "success-90",
                        "success-100",
                    ]}
                />
                <PrimitiveColourPalette
                    category="Warning"
                    tokens={[
                        "warning-10",
                        "warning-20",
                        "warning-30",
                        "warning-40",
                        "warning-50",
                        "warning-60",
                        "warning-70",
                        "warning-80",
                        "warning-90",
                        "warning-100",
                    ]}
                />
                <PrimitiveColourPalette
                    category="Error"
                    tokens={[
                        "error-10",
                        "error-20",
                        "error-30",
                        "error-40",
                        "error-50",
                        "error-60",
                        "error-70",
                        "error-80",
                        "error-90",
                        "error-100",
                    ]}
                />
                <PrimitiveColourPalette
                    category="Information"
                    tokens={[
                        "info-10",
                        "info-20",
                        "info-30",
                        "info-40",
                        "info-50",
                        "info-60",
                        "info-70",
                        "info-80",
                        "info-90",
                        "info-100",
                    ]}
                />
                <PrimitiveColourPalette
                    category="Miscellaneous"
                    tokens={["white", "black"]}
                />
            </Display>
        </ThemeProvider>
    );
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface SwatchColourProps {
    $colour: string;
}

// =============================================================================
// STYLING
// =============================================================================
const Display = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2.5rem;
    flex-wrap: wrap;

    margin-bottom: 2.5rem;

    &:last-child {
        margin-bottom: 1rem;
    }
`;

const Palette = styled.div``;

const PaletteLabel = styled.div`
    font-size: 1.25rem;
    font-weight: bolder;
    margin-bottom: 1rem;
`;

const Swatch = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, max-content);
    margin: 0;
    padding: 0;
    gap: 0.5rem 1rem;
`;

const SwatchItem = styled.li`
    display: grid;
    grid-column: 1 / span 3;
    grid-template-columns: subgrid;
    justify-items: flex-start;
    align-items: center;
    gap: 0.5rem;
`;

const SwatchColour = styled.div<SwatchColourProps>`
    height: 2.5rem;
    width: 8rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background: repeating-linear-gradient(
        135deg,
        #edefef 0px,
        #edefef 10px,
        #dde1e2 10px,
        #dde1e2 20px
    );
    background: ${(props) => props.$colour};
`;

const SwatchLabel = styled.span`
    font-family: monospace;
    font-size: 1rem;
    border-radius: 4px;
    padding: 0 0.5rem;
`;

const SwatchValue = styled.span`
    font-size: 0.875rem;
`;
