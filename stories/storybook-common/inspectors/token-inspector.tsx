import { memoize } from "lodash";
import { useEffect, useState } from "react";
import { useTheme } from "src/theme";

const collectFDSVariablesFromCSS = (cssRules: CSSStyleRule[]) => {
    const result: Record<string, string> = {};

    cssRules.forEach((cssRule) => {
        const style = cssRule.style;
        for (let i = 0; i < style.length; i++) {
            const propertyName = style.item(i);
            if (!propertyName.startsWith("--fds-")) continue;

            const value = style.getPropertyValue(propertyName).trim();
            if (!value) continue;

            result[propertyName] = value;
        }
    });

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
        const lightModeCssRules = cssRules.filter((cssRule: CSSStyleRule) => {
            return cssRule.selectorText === `[data-fds-theme="${theme}"]`;
        });
        const darkModeCssRules = cssRules.filter((cssRule: CSSStyleRule) => {
            return (
                cssRule.selectorText ===
                `[data-fds-theme="${theme}"][data-fds-theme-mode="dark"]`
            );
        });

        return {
            ...collectFDSVariablesFromCSS(defaultCssRules),
            ...collectFDSVariablesFromCSS(lightModeCssRules),
            ...(mode === "dark"
                ? collectFDSVariablesFromCSS(darkModeCssRules)
                : {}),
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
