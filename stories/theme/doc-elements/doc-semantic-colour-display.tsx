import { css } from "@linaria/core";
import { SemanticColours } from "src/theme";
import { useInspectColour } from "stories/storybook-common";

import { ColourDisplay } from "./colour-display";

type ProviderTheme = Parameters<typeof ColourDisplay>[0]["theme"];
type SemanticToken = keyof typeof SemanticColours;

interface SemanticSection {
    label: string;
    palettes: SemanticToken[][];
}

const SEMANTIC_SECTIONS: SemanticSection[] = [
    {
        label: "Text",
        palettes: [
            [
                "text",
                "text-subtle",
                "text-subtler",
                "text-subtlest",
                "text-primary",
                "text-primary-strongest",
            ],
            ["text-hover", "text-selected", "text-selected-hover"],
            [
                "text-disabled",
                "text-disabled-subtle",
                "text-disabled-subtlest",
                "text-selected-disabled",
            ],
            ["text-success", "text-warning", "text-error", "text-info"],
            ["text-inverse"],
        ],
    },
    {
        label: "Icon",
        palettes: [
            [
                "icon",
                "icon-subtle",
                "icon-strongest",
                "icon-primary",
                "icon-primary-subtle",
                "icon-primary-subtlest",
            ],
            ["icon-hover", "icon-selected", "icon-selected-hover"],
            ["icon-disabled", "icon-disabled-subtle", "icon-selected-disabled"],
            [
                "icon-success",
                "icon-warning",
                "icon-error",
                "icon-error-strong",
                "icon-info",
                "icon-inverse",
                "icon-primary-inverse",
            ],
        ],
    },
    {
        label: "Border",
        palettes: [
            [
                "border",
                "border-strong",
                "border-stronger",
                "border-primary",
                "border-primary-subtle",
            ],
            ["border-hover", "border-hover-strong"],
            [
                "border-selected",
                "border-selected-subtle",
                "border-selected-subtlest",
                "border-selected-hover",
            ],
            ["border-focus", "border-focus-strong"],
            ["border-disabled", "border-selected-disabled"],
            [
                "border-success",
                "border-warning",
                "border-error",
                "border-error-focus",
                "border-error-strong",
                "border-info",
            ],
        ],
    },
    {
        label: "Background",
        palettes: [
            ["bg", "bg-strong", "bg-stronger", "bg-strongest"],
            [
                "bg-hover",
                "bg-hover-strong",
                "bg-hover-subtle",
                "bg-hover-neutral",
                "bg-hover-neutral-strong",
            ],
            [
                "bg-selected",
                "bg-selected-hover",
                "bg-selected-strong",
                "bg-selected-strongest",
                "bg-selected-strongest-hover",
            ],
            ["bg-disabled", "bg-selected-disabled"],
            [
                "bg-primary",
                "bg-primary-subtle",
                "bg-primary-subtler",
                "bg-primary-subtlest",
                "bg-primary-hover",
                "bg-primary-subtlest-hover",
                "bg-primary-subtlest-selected",
                "bg-available",
            ],
            [
                "bg-success",
                "bg-success-hover",
                "bg-success-strong",
                "bg-success-strong-hover",
                "bg-warning",
                "bg-warning-hover",
                "bg-warning-strong",
                "bg-warning-strong-hover",
                "bg-info",
                "bg-info-hover",
                "bg-info-strong",
                "bg-info-strong-hover",
                "bg-error",
                "bg-error-hover",
                "bg-error-strong",
                "bg-error-strong-hover",
            ],
            [
                "bg-inverse",
                "bg-inverse-subtle",
                "bg-inverse-subtler",
                "bg-inverse-subtlest",
                "bg-inverse-hover",
            ],
        ],
    },
    { label: "Overlay", palettes: [["overlay-strong", "overlay-subtle"]] },
    { label: "Hyperlink", palettes: [["hyperlink", "hyperlink-inverse"]] },
    { label: "Focus ring", palettes: [["focus-ring", "focus-ring-inverse"]] },
];

interface ColourSwatchProps {
    token: SemanticToken;
}

const ColourSwatch = ({ token }: ColourSwatchProps) => {
    const { value, reference } = useInspectColour(SemanticColours[token]);
    return (
        <li className={swatchItem}>
            <div className={swatchColour} style={{ background: value }} />
            <div>
                <div className={swatchLabel}>{token}</div>
                <div className={swatchReference}>
                    {value} {reference && `(${reference})`}
                </div>
            </div>
        </li>
    );
};

interface SemanticColourPaletteProps {
    tokens: SemanticToken[];
}

const SemanticColourPalette = ({ tokens }: SemanticColourPaletteProps) => {
    return (
        <div>
            <ul className={swatch}>
                {tokens.map((token) => (
                    <ColourSwatch key={token} token={token} />
                ))}
            </ul>
        </div>
    );
};

interface SemanticColourDisplayProps {
    theme: ProviderTheme;
}

export const SemanticColourDisplay = ({
    theme,
}: SemanticColourDisplayProps) => {
    return (
        <ColourDisplay theme={theme}>
            {SEMANTIC_SECTIONS.map((section) => (
                <div key={section.label}>
                    <div className={paletteLabel}>{section.label}</div>
                    <div className={display}>
                        {section.palettes.map((palette, index) => (
                            <SemanticColourPalette
                                key={`${section.label}-${index}`}
                                tokens={palette}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </ColourDisplay>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const display = css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2.5rem;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;

    &:last-child {
        margin-bottom: 3rem;
    }
`;

const paletteLabel = css`
    font-size: 1.25rem;
    font-weight: bolder;
    margin-bottom: 1.5rem;
`;

const swatch = css`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 0.25rem;
`;

const swatchItem = css`
    display: flex;
    justify-items: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
`;

const swatchColour = css`
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
`;

const swatchLabel = css`
    font-family: monospace;
    font-size: 1rem;
    border-radius: 4px;
    padding: 0 0.5rem;
`;

const swatchReference = css`
    font-family: monospace;
    font-size: 0.875rem;
    border-radius: 4px;
    padding: 0 0.5rem;
    color: #787878;
`;
