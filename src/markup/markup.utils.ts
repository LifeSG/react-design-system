import type { ApplyStyleMap, FontDeclarationProperties } from "../theme";
import { tokens } from "./markup.style";

interface MarkupFontDeclarations {
    regular?: FontDeclarationProperties;
    semibold?: FontDeclarationProperties;
}

const rootFontTokenMap = {
    [tokens.rootFontFamily]: "font-family",
    [tokens.rootFontVariant]: "font-variant",
    [tokens.rootFontSize]: "font-size",
    [tokens.rootFontWeight]: "font-weight",
    [tokens.rootLineHeight]: "line-height",
    [tokens.rootLetterSpacing]: "letter-spacing",
} as const;

const emphasizedFontTokenMap = {
    [tokens.emphasizedFontFamily]: "font-family",
    [tokens.emphasizedFontVariant]: "font-variant",
    [tokens.emphasizedFontSize]: "font-size",
    [tokens.emphasizedFontWeight]: "font-weight",
    [tokens.emphasizedLineHeight]: "line-height",
    [tokens.emphasizedLetterSpacing]: "letter-spacing",
} as const;

const mapFontDeclarationsToStyles = (
    tokenMap: Record<string, keyof FontDeclarationProperties>,
    declarations?: FontDeclarationProperties
) =>
    Object.fromEntries(
        Object.entries(tokenMap).map(([token, declarationKey]) => [
            token,
            declarations?.[declarationKey] ?? null,
        ])
    );

export const createMarkupFontStyles = (
    fontDeclarations?: MarkupFontDeclarations
): ApplyStyleMap => ({
    ...mapFontDeclarationsToStyles(rootFontTokenMap, fontDeclarations?.regular),
    ...mapFontDeclarationsToStyles(
        emphasizedFontTokenMap,
        fontDeclarations?.semibold
    ),
});
