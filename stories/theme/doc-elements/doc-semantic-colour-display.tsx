import { getSemanticColour } from "src/theme/colour-semantic/theme-helper";
import { SemanticColourSet, ThemeSpec } from "src/theme/types";
import styled, { ThemeProvider, useTheme } from "styled-components";

interface SemanticColourPalette {
    tokens: (keyof SemanticColourSet)[];
}

const SemanticColourPalette = ({ tokens }: SemanticColourPalette) => {
    const theme = useTheme();

    return (
        <Palette>
            <Swatch>
                {tokens.map((token) => {
                    const colour = getSemanticColour(token)({ theme });
                    return (
                        <SwatchItem key={token}>
                            <SwatchColour $colour={colour} />
                            <SwatchLabel>{token}</SwatchLabel>
                        </SwatchItem>
                    );
                })}
            </Swatch>
        </Palette>
    );
};

interface SemanticColourDisplayProps {
    theme: ThemeSpec;
}

export const SemanticColourDisplay = ({
    theme,
}: SemanticColourDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <PaletteLabel>Text</PaletteLabel>
            <Display>
                <SemanticColourPalette
                    tokens={[
                        "text",
                        "text-subtle",
                        "text-subtler",
                        "text-subtlest",
                    ]}
                />
                <SemanticColourPalette
                    tokens={[
                        "text-disabled",
                        "text-disabled-subtle",
                        "text-disabled-subtlest",
                        "text-selected-disabled",
                    ]}
                />
                <SemanticColourPalette
                    tokens={[
                        "text-success",
                        "text-warning",
                        "text-error",
                        "text-info",
                    ]}
                />
                <SemanticColourPalette tokens={["text-hover"]} />
                <SemanticColourPalette tokens={["text-selected"]} />
                <SemanticColourPalette tokens={["text-inverse"]} />
            </Display>

            <PaletteLabel>Border</PaletteLabel>
            <Display>
                <SemanticColourPalette
                    tokens={[
                        "border",
                        "border-strong",
                        "border-primary",
                        "border-primary-subtle",
                    ]}
                />
                <SemanticColourPalette
                    tokens={["border-hover", "border-hover-strong"]}
                />
                <SemanticColourPalette
                    tokens={[
                        "border-selected",
                        "border-selected-subtle",
                        "border-selected-subtlest",
                    ]}
                />
                <SemanticColourPalette
                    tokens={["border-focus", "border-focus-strong"]}
                />
                <SemanticColourPalette
                    tokens={["border-disabled", "border-selected-disabled"]}
                />
                <SemanticColourPalette
                    tokens={[
                        "border-success",
                        "border-warning",
                        "border-error",
                        "border-error-focus",
                        "border-info",
                    ]}
                />
            </Display>

            <PaletteLabel>Background</PaletteLabel>
            <Display>
                <SemanticColourPalette
                    tokens={[
                        "background",
                        "background-strong",
                        "background-stronger",
                    ]}
                />
                <SemanticColourPalette
                    tokens={[
                        "background-hover",
                        "background-hover-strong",
                        "background-hover-subtle",
                        "background-hover-neutral",
                        "background-primary-hover",
                    ]}
                />
                <SemanticColourPalette
                    tokens={[
                        "background-selected",
                        "background-selected-strong",
                        "background-selected-hover",
                    ]}
                />
                <SemanticColourPalette
                    tokens={[
                        "background-disabled",
                        "background-selected-disabled",
                    ]}
                />
                <SemanticColourPalette
                    tokens={[
                        "background-primary",
                        "background-primary-hover",
                        "background-primary-subtle",
                        "background-primary-subtlest",
                    ]}
                />
                <SemanticColourPalette
                    tokens={["background-primary-subtlest-hover"]}
                />
                <SemanticColourPalette
                    tokens={["background-primary-subtlest-selected"]}
                />
            </Display>

            <PaletteLabel>Overlay</PaletteLabel>
            <Display>
                <SemanticColourPalette
                    tokens={[
                        "overlay-strong",
                        "overlay-subtle",
                        "overlay-inverse-gradient",
                    ]}
                />
            </Display>

            <PaletteLabel>Hyperlink</PaletteLabel>
            <Display>
                <SemanticColourPalette
                    tokens={["hyperlink", "hyperlink-inverse"]}
                />
            </Display>

            <PaletteLabel>Focus ring</PaletteLabel>
            <Display>
                <SemanticColourPalette
                    tokens={["focus-ring", "focus-ring-inverse"]}
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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 0.5rem;
`;

const SwatchItem = styled.li`
    display: flex;
    justify-items: flex-start;
    align-items: center;
    gap: 0.5rem;
`;

const SwatchColour = styled.div<SwatchColourProps>`
    flex-shrink: 0;
    height: 1.5rem;
    width: 1.5rem;
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
