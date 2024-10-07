import { ColourSpec } from "src/theme/colour-primitive/theme-helper";
import { getSemanticColour } from "src/theme/colour-semantic/theme-helper";
import { SemanticColourSet, ThemeSpec } from "src/theme/types";
import styled, { ThemeProvider, useTheme } from "styled-components";

interface SemanticColourPalette {
    tokens: (keyof SemanticColourSet)[];
}

const SemanticColourPalette = ({ tokens }: SemanticColourPalette) => {
    const theme = useTheme();

    // apply proxy to spy on the primitive token being accessed
    let colourToken: string;
    const proxy = {
        get(target, prop) {
            colourToken = prop;
            return target[prop];
        },
    };
    const scheme = theme.colourScheme;
    const original = ColourSpec.collections[scheme];
    ColourSpec.collections[scheme] = new Proxy(original, proxy);

    const component = (
        <Palette>
            <Swatch>
                {tokens.map((token) => {
                    colourToken = undefined;
                    const colour = getSemanticColour(token)({ theme });
                    const reference = colourToken || colour;
                    colourToken = undefined;
                    return (
                        <SwatchItem key={token}>
                            <SwatchColour $colour={colour} />
                            <div>
                                <SwatchLabel>{token}</SwatchLabel>
                                <SwatchReference>{reference}</SwatchReference>
                            </div>
                        </SwatchItem>
                    );
                })}
            </Swatch>
        </Palette>
    );

    // clean up proxy
    ColourSpec.collections[scheme] = original;

    return component;
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
                        "text-primary",
                    ]}
                />
                <SemanticColourPalette
                    tokens={[
                        "text-hover",
                        "text-selected",
                        "text-selected-hover",
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
                <SemanticColourPalette tokens={["text-inverse"]} />
            </Display>

            <PaletteLabel>Icon</PaletteLabel>
            <Display>
                <SemanticColourPalette
                    tokens={[
                        "icon",
                        "icon-subtle",
                        "icon-strongest",
                        "icon-primary",
                        "icon-primary-subtle",
                        "icon-primary-subtlest",
                    ]}
                />
                <SemanticColourPalette
                    tokens={[
                        "icon-hover",
                        "icon-selected",
                        "icon-selected-hover",
                    ]}
                />
                <SemanticColourPalette
                    tokens={[
                        "icon-disabled",
                        "icon-disabled-subtle",
                        "icon-selected-disabled",
                    ]}
                />
                <SemanticColourPalette
                    tokens={[
                        "icon-success",
                        "icon-warning",
                        "icon-error",
                        "icon-error-strong",
                        "icon-info",
                        "icon-inverse",
                        "icon-primary-inverse",
                    ]}
                />
            </Display>

            <PaletteLabel>Border</PaletteLabel>
            <Display>
                <SemanticColourPalette
                    tokens={[
                        "border",
                        "border-strong",
                        "border-stronger",
                        "border-primary",
                        "border-primary-subtle",
                    ]}
                />
                <SemanticColourPalette tokens={["border-hover"]} />
                <SemanticColourPalette
                    tokens={[
                        "border-selected",
                        "border-selected-subtle",
                        "border-selected-subtlest",
                        "border-selected-hover",
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
                        "border-error-strong",
                        "border-info",
                    ]}
                />
            </Display>

            <PaletteLabel>Background</PaletteLabel>
            <Display>
                <SemanticColourPalette
                    tokens={["bg", "bg-strong", "bg-stronger", "bg-strongest"]}
                />
                <SemanticColourPalette
                    tokens={[
                        "bg-hover",
                        "bg-hover-strong",
                        "bg-hover-subtle",
                        "bg-hover-neutral",
                    ]}
                />
                <SemanticColourPalette
                    tokens={[
                        "bg-selected",
                        "bg-selected-hover",
                        "bg-selected-strong",
                        "bg-selected-strongest",
                    ]}
                />
                <SemanticColourPalette
                    tokens={["bg-disabled", "bg-selected-disabled"]}
                />
                <SemanticColourPalette
                    tokens={[
                        "bg-primary",
                        "bg-primary-subtle",
                        "bg-primary-subtler",
                        "bg-primary-subtlest",
                        "bg-primary-hover",
                        "bg-primary-subtlest-hover",
                        "bg-primary-subtlest-selected",
                        "bg-available",
                    ]}
                />
                <SemanticColourPalette
                    tokens={[
                        "bg-success",
                        "bg-success-strong",
                        "bg-warning",
                        "bg-warning-strong",
                        "bg-info",
                        "bg-info-strong",
                        "bg-error",
                        "bg-error-strong",
                        "bg-error-strong-hover",
                    ]}
                />
                <SemanticColourPalette
                    tokens={[
                        "bg-inverse",
                        "bg-inverse-subtle",
                        "bg-inverse-subtler",
                        "bg-inverse-subtlest",
                    ]}
                />
            </Display>

            <PaletteLabel>Overlay</PaletteLabel>
            <Display>
                <SemanticColourPalette
                    tokens={["overlay-strong", "overlay-subtle"]}
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
        margin-bottom: 3rem;
    }
`;

const Palette = styled.div``;

const PaletteLabel = styled.div`
    font-size: 1.25rem;
    font-weight: bolder;
    margin-bottom: 1.5rem;
`;

const Swatch = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 0.25rem;
`;

const SwatchItem = styled.li`
    display: flex;
    justify-items: flex-start;
    align-items: flex-start;
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

const SwatchLabel = styled.div`
    font-family: monospace;
    font-size: 1rem;
    border-radius: 4px;
    padding: 0 0.5rem;
`;

const SwatchReference = styled.div`
    font-family: monospace;
    font-size: 0.875rem;
    border-radius: 4px;
    padding: 0 0.5rem;
    color: #787878;
`;
