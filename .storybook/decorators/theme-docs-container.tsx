import { useEffect, useState } from "react";
import {
    DocsContainer,
    type DocsContainerProps,
} from "@storybook/addon-docs/blocks";
import { themes } from "storybook/theming";
import { ThemeProvider } from "../../src/theme";
import { THEME_KEY_TO_TYPE_MAPPING, type ThemeMapKey } from "./theme-mapping";

/**
 * Apply the design-system ThemeProvider to MDX docs content.
 *
 * Story decorators wrap canvases, but standalone MDX content such as
 * AutoArgTypesTabs renders outside that tree. DocsContainer is the closest
 * shared boundary for those custom docs blocks.
 * @see https://storybook.js.org/docs/writing-docs/autodocs#customize-the-docs-container
 */
export function ThemeDocsContainer({
    children,
    context,
    theme,
}: React.PropsWithChildren<DocsContainerProps>) {
    const primaryStory = context.componentStories()[0];
    const storyContext = primaryStory
        ? context.getStoryContext(primaryStory)
        : undefined;
    const [isDark, setIsDark] = useState(() => {
        if (typeof document === "undefined") {
            return theme?.base === "dark";
        }

        return document.body.classList.contains("storybook-dark-mode");
    });

    const selectedTheme = storyContext?.globals.theme;
    const themeOverride = storyContext?.parameters.themes?.themeOverride;
    const resolvedThemeName = (themeOverride ||
        selectedTheme ||
        "LifeSG") as ThemeMapKey;
    const resolvedThemeType =
        THEME_KEY_TO_TYPE_MAPPING[resolvedThemeName] ?? "lifesg";
    const mode = isDark ? "dark" : "light";

    useEffect(() => {
        const handleDarkMode = (value: boolean) => {
            setIsDark(value);
        };

        context.channel.on("DARK_MODE", handleDarkMode);

        return () => {
            context.channel.removeListener("DARK_MODE", handleDarkMode);
        };
    }, [context.channel]);

    return (
        <DocsContainer
            context={context}
            theme={isDark ? themes.dark : themes.light}
        >
            <ThemeProvider theme={resolvedThemeType} mode={mode}>
                {children}
            </ThemeProvider>
        </DocsContainer>
    );
}
