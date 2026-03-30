import type { ApplyStyleMap, FontDeclarationProperties } from "../theme";
import { tokens } from "./markup.style";

const rootFontTokenMap = {
    [tokens.rootFontFamily]: "font-family",
    [tokens.rootFontVariant]: "font-variant",
    [tokens.rootFontSize]: "font-size",
    [tokens.rootFontWeight]: "font-weight",
    [tokens.rootLineHeight]: "line-height",
    [tokens.rootLetterSpacing]: "letter-spacing",
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
    fontDeclarations?: FontDeclarationProperties
): ApplyStyleMap =>
    mapFontDeclarationsToStyles(rootFontTokenMap, fontDeclarations);
