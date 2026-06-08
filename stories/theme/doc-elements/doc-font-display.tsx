import { css } from "@linaria/core";
import clsx from "clsx";
import type { ThemeType } from "src/theme";
import { Font, FontSpec, ThemeProvider, useDesignToken } from "src/theme";

type FontToken = Exclude<keyof typeof Font, "Spec">;

const FONT_ROWS: FontCollectionProps[] = [
    {
        tokens: [
            "heading-xxl-light",
            "heading-xxl-regular",
            "heading-xxl-semibold",
            "heading-xxl-bold",
        ],
        fontSizeToken: "heading-size-xxl",
        lineHeightToken: "heading-lh-xxl",
        letterSpacingToken: "heading-ls-xxl",
    },
    {
        tokens: [
            "heading-xl-light",
            "heading-xl-regular",
            "heading-xl-semibold",
            "heading-xl-bold",
        ],
        fontSizeToken: "heading-size-xl",
        lineHeightToken: "heading-lh-xl",
        letterSpacingToken: "heading-ls-xl",
    },
    {
        tokens: [
            "heading-lg-light",
            "heading-lg-regular",
            "heading-lg-semibold",
            "heading-lg-bold",
        ],
        fontSizeToken: "heading-size-lg",
        lineHeightToken: "heading-lh-lg",
        letterSpacingToken: "heading-ls-lg",
    },
    {
        tokens: [
            "heading-md-light",
            "heading-md-regular",
            "heading-md-semibold",
            "heading-md-bold",
        ],
        fontSizeToken: "heading-size-md",
        lineHeightToken: "heading-lh-md",
        letterSpacingToken: "heading-ls-md",
    },
    {
        tokens: [
            "heading-sm-light",
            "heading-sm-regular",
            "heading-sm-semibold",
            "heading-sm-bold",
        ],
        fontSizeToken: "heading-size-sm",
        lineHeightToken: "heading-lh-sm",
        letterSpacingToken: "heading-ls-sm",
    },
    {
        tokens: [
            "heading-xs-light",
            "heading-xs-regular",
            "heading-xs-semibold",
            "heading-xs-bold",
        ],
        fontSizeToken: "heading-size-xs",
        lineHeightToken: "heading-lh-xs",
        letterSpacingToken: "heading-ls-xs",
    },
    {
        tokens: [
            "body-baseline-light",
            "body-baseline-regular",
            "body-baseline-semibold",
            "body-baseline-bold",
        ],
        fontSizeToken: "body-size-baseline",
        lineHeightToken: "body-lh-baseline",
        letterSpacingToken: "body-ls-baseline",
    },
    {
        tokens: [
            "body-md-light",
            "body-md-regular",
            "body-md-semibold",
            "body-md-bold",
        ],
        fontSizeToken: "body-size-md",
        lineHeightToken: "body-lh-md",
        letterSpacingToken: "body-ls-md",
    },
    {
        tokens: [
            "body-sm-light",
            "body-sm-regular",
            "body-sm-semibold",
            "body-sm-bold",
        ],
        fontSizeToken: "body-size-sm",
        lineHeightToken: "body-lh-sm",
        letterSpacingToken: "body-ls-sm",
    },
    {
        tokens: [
            "body-xs-light",
            "body-xs-regular",
            "body-xs-semibold",
            "body-xs-bold",
        ],
        fontSizeToken: "body-size-xs",
        lineHeightToken: "body-lh-xs",
        letterSpacingToken: "body-ls-xs",
    },
    {
        tokens: ["form-label"],
        fontSizeToken: "form-label-size",
        lineHeightToken: "form-label-lh",
        letterSpacingToken: "form-label-ls",
    },
    {
        tokens: ["form-description"],
        fontSizeToken: "form-description-size",
        lineHeightToken: "form-description-lh",
        letterSpacingToken: "form-description-ls",
    },
];

const toCamelCase = (value: string) =>
    value.replace(/-([a-z])/g, (_, char: string) => char.toUpperCase());

const fontDeclarationToStyle = (declarations: string) => {
    const style: Record<string, string> = {};

    declarations
        .split(";")
        .map((declaration) => declaration.trim())
        .filter(Boolean)
        .forEach((declaration) => {
            const [rawProperty, ...rawValue] = declaration.split(":");
            if (!rawProperty || rawValue.length === 0) return;

            style[toCamelCase(rawProperty.trim())] = rawValue.join(":").trim();
        });

    return style;
};

interface FontCollectionProps {
    tokens: FontToken[];
    fontSizeToken: keyof typeof FontSpec;
    lineHeightToken: keyof typeof FontSpec;
    letterSpacingToken: keyof typeof FontSpec;
}

const FontCollection = ({
    tokens,
    fontSizeToken,
    lineHeightToken,
    letterSpacingToken,
}: FontCollectionProps) => {
    const fontSize = useDesignToken(FontSpec[fontSizeToken]);
    const lineHeight = useDesignToken(FontSpec[lineHeightToken]);
    const letterSpacing = useDesignToken(FontSpec[letterSpacingToken]);

    return (
        <div className={row} key={fontSizeToken}>
            <div>
                {tokens.map((token) => {
                    return (
                        <div
                            className={textPreview}
                            key={token}
                            style={fontDeclarationToStyle(Font[token])}
                        >
                            {token}
                        </div>
                    );
                })}
            </div>
            <div>{fontSize}</div>
            <div>{lineHeight}</div>
            <div>{letterSpacing}</div>
        </div>
    );
};

interface FontDisplayProps {
    theme: ThemeType;
}

export const FontDisplay = ({ theme }: FontDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <div className={display}>
                <div className={clsx(row, headerRow)}>
                    <div>Token</div>
                    <div>V3_Font size</div>
                    <div>Line height</div>
                    <div>Letter spacing</div>
                </div>
                {FONT_ROWS.map((fontRow) => (
                    <FontCollection key={fontRow.fontSizeToken} {...fontRow} />
                ))}
            </div>
        </ThemeProvider>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const display = css`
    display: grid;
    grid-template-columns: repeat(4, minmax(max-content, 1fr));
    flex-wrap: wrap;

    margin-bottom: 1rem;

    overflow-x: auto;
`;

const row = css`
    display: grid;
    grid-column: 1 / span 4;
    grid-template-columns: subgrid;
    justify-items: flex-start;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 2.5rem;
`;

const headerRow = css`
    margin-bottom: 1rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #dde1e2;
`;

const textPreview = css`
    margin-right: 3rem;
`;
