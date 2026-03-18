import { memoize } from "lodash";
import { useEffect, useState } from "react";
import { useTheme } from "src/theme";

const collectFDSVariablesFromCSS = (cssRules: CSSStyleRule[]) => {
    const cssVariables = cssRules
        .map((cssRule) => cssRule.cssText)
        // parse the raw CSS rule block to get the property value pairs
        .map((cssText) => cssText.split("{")[1].split("}")[0].trim().split(";"))
        .flat()
        .map((text) => text.trim())
        // get only the FDS variables which are namespaced with this prefix
        .filter((text) => text.startsWith("--fds-"))
        .map((text) => {
            const [key, value] = text.split(":", 2);
            return { key: key.trim(), value: value.trim() };
        });

    const result = Object.fromEntries(
        cssVariables.map(({ key, value }) => [key, value])
    );

    return result;
};

const extractFDSVariables = memoize(
    (theme, mode) => {
        const cssRules = Array.from(document.styleSheets)
            // only access same-origin stylesheets to avoid a thrown error
            .filter(
                (sheet) =>
                    sheet.href === null ||
                    sheet.href.startsWith(window.location.origin)
            )
            .flatMap((styleSheet) => Array.from(styleSheet.cssRules))
            .filter(
                (cssRule): cssRule is CSSStyleRule =>
                    cssRule instanceof CSSStyleRule
            );

        const defaultCssRules = cssRules.filter((cssRule: CSSStyleRule) => {
            return cssRule.selectorText === ":root";
        });
        const defaultVariables = defaultCssRules
            ? collectFDSVariablesFromCSS(defaultCssRules)
            : {};

        const lightModeCssRules = cssRules.filter((cssRule: CSSStyleRule) => {
            return cssRule.selectorText === `[data-fds-theme="${theme}"]`;
        });
        const lightModeVariables = lightModeCssRules
            ? collectFDSVariablesFromCSS(lightModeCssRules)
            : {};

        const darkModeCssRules = cssRules.filter((cssRule: CSSStyleRule) => {
            return (
                cssRule.selectorText ===
                `[data-fds-theme="${theme}"][data-fds-theme-mode="dark"]`
            );
        });
        const darkModeVariables = darkModeCssRules
            ? collectFDSVariablesFromCSS(darkModeCssRules)
            : {};

        return {
            ...defaultVariables,
            ...lightModeVariables,
            ...(mode === "dark" ? darkModeVariables : {}),
        };
    },
    (theme, mode) => `${theme},${mode}`
);

/** strip the `var()` wrapper from a CSS variable */
const normaliseTokenVariable = (token: string) =>
    token.match(/^var\((--fds-[\w-]+)\)$/)?.[1] || token;

/** strip the `--fds-colour-` prefix from a colour token */
const normaliseColourToken = (token: string) =>
    token.match(/--fds-colour-([\w-]+)/)?.[1] || token;

export const useInspectColour = (token: string | undefined) => {
    const [stylesheet, setStylesheet] = useState<Record<string, string>>({});
    const { theme, mode } = useTheme();

    useEffect(() => {
        setStylesheet(extractFDSVariables(theme, mode));
    }, [theme, mode]);

    const getColour = () => {
        if (!token) return { value: "N/A" };

        const normalisedToken = normaliseTokenVariable(token);
        if (!normalisedToken) return { value: "N/A" };

        const tokenValue = stylesheet[normalisedToken];
        if (!tokenValue) return { value: "N/A" };

        if (tokenValue.startsWith("var(--fds-")) {
            const cssVar = normaliseTokenVariable(tokenValue);
            const cssValue = normaliseColourToken(tokenValue);
            const value = stylesheet[cssVar];
            return { value: value, reference: cssValue };
        }
        return { value: tokenValue };
    };

    return getColour();
};
