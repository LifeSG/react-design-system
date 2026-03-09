import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { type CSSProperties, useMemo } from "react";
import { Button } from "src/button";
import { PopoverTrigger } from "src/popover-v2";
import { ThemeMode, ThemeProvider, useTheme } from "src/theme";
import { useApplyStyle } from "src/theme/utils/use-apply-styles";
import { V3_LifeSGTheme, V3_OneServiceTheme, V3_RBSTheme } from "src/v3_theme";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

import "../../src/theme/styles/lifesg.css";
import "../../src/theme/styles/oneservice.css";

type ShowcaseTheme = "lifesg" | "oneservice" | "rbs";

interface PortalScopedThemingStoryArgs {
    leftTheme: ShowcaseTheme;
    leftMode: ThemeMode;
    rightTheme: ShowcaseTheme;
    rightMode: ThemeMode;
}

interface InlineStylePortalStoryArgs {
    theme: ShowcaseTheme;
    mode: ThemeMode;
    primaryColor: string;
    inverseColor: string;
}

const STYLED_THEME_MAP = {
    lifesg: V3_LifeSGTheme,
    oneservice: V3_OneServiceTheme,
    rbs: V3_RBSTheme,
};

const SCOPE_STYLE: CSSProperties = {
    border: "1px solid var(--fds-colour-border)",
    borderRadius: "12px",
    padding: "16px",
    width: "min(480px, 100%)",
    background: "var(--fds-colour-bg)",
    color: "var(--fds-colour-text)",
};

const PreviewPopoverContent = ({
    theme,
    mode,
}: {
    theme: ShowcaseTheme;
    mode: ThemeMode;
}) => {
    return (
        <div
            style={{
                minWidth: "260px",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid var(--fds-colour-border)",
                background: "var(--fds-colour-bg)",
                color: "var(--fds-colour-text)",
            }}
        >
            <div style={{ fontWeight: 700, marginBottom: "8px" }}>
                Portal scope: {theme} ({mode})
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "24px 1fr",
                    gap: "8px",
                    alignItems: "center",
                    fontSize: "14px",
                }}
            >
                <div
                    style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "4px",
                        border: "1px solid var(--fds-colour-border)",
                        background: "var(--fds-colour-bg-primary)",
                    }}
                />
                <span>Uses local token: --fds-colour-bg-primary</span>
                <div
                    style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "4px",
                        border: "1px solid var(--fds-colour-border)",
                        background: "var(--fds-colour-bg-inverse)",
                    }}
                />
                <span style={{ color: "var(--fds-colour-text-subtle)" }}>
                    Uses local token: --fds-colour-bg-inverse
                </span>
            </div>
        </div>
    );
};

const ThemeScopeInlineVariables = ({
    primaryColor,
    inverseColor,
}: {
    primaryColor: string;
    inverseColor: string;
}) => {
    const { themeElement } = useTheme();
    const themeElementRef = useMemo(
        () => ({
            current: themeElement,
        }),
        [themeElement]
    );

    useApplyStyle(themeElementRef, {
        "--fds-colour-bg-primary": primaryColor,
        "--fds-colour-bg-inverse": inverseColor,
    });

    return null;
};

const ScopedPortalDemo = ({
    label,
    theme,
    mode,
}: {
    label: string;
    theme: ShowcaseTheme;
    mode: ThemeMode;
}) => {
    return (
        <ThemeProvider theme={theme} mode={mode}>
            <StyledComponentsThemeProvider
                theme={{ ...STYLED_THEME_MAP[theme], colourMode: mode }}
            >
                <div style={SCOPE_STYLE}>
                    <div
                        style={{
                            marginBottom: "12px",
                            fontWeight: 700,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span>{label}</span>
                        <span style={{ fontWeight: 500 }}>
                            {theme} / {mode}
                        </span>
                    </div>
                    <div style={{ marginBottom: "12px", fontSize: "14px" }}>
                        Open the popover and confirm it matches this scopes
                        colours.
                    </div>
                    <PopoverTrigger
                        popoverContent={
                            <PreviewPopoverContent theme={theme} mode={mode} />
                        }
                    >
                        <Button.Default>Open scoped portal</Button.Default>
                    </PopoverTrigger>
                </div>
            </StyledComponentsThemeProvider>
        </ThemeProvider>
    );
};

const meta: Meta<PortalScopedThemingStoryArgs> = {
    title: "Foundations/Themes/Portal Scoped Floating UI",
    parameters: {
        docs: {
            description: {
                component:
                    "Shows that floating-ui portals inherit the nearest container-scoped `ThemeProvider` theme and mode.",
            },
        },
    },
    argTypes: {
        leftTheme: {
            control: "select",
            options: ["lifesg", "oneservice", "rbs"],
        },
        leftMode: {
            control: "radio",
            options: ["light", "dark"],
        },
        rightTheme: {
            control: "select",
            options: ["lifesg", "oneservice", "rbs"],
        },
        rightMode: {
            control: "radio",
            options: ["light", "dark"],
        },
    },
};

export default meta;

type Story = StoryObj<PortalScopedThemingStoryArgs>;

export const SideBySideScopes: Story = {
    args: {
        leftTheme: "lifesg",
        leftMode: "light",
        rightTheme: "oneservice",
        rightMode: "dark",
    },
    render: (args) => {
        return (
            <div
                style={{
                    display: "flex",
                    gap: "16px",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                }}
            >
                <ScopedPortalDemo
                    label="Scope A"
                    theme={args.leftTheme}
                    mode={args.leftMode}
                />
                <ScopedPortalDemo
                    label="Scope B"
                    theme={args.rightTheme}
                    mode={args.rightMode}
                />
            </div>
        );
    },
};

type InlineStyleStory = StoryObj<InlineStylePortalStoryArgs>;

export const WithUseApplyStyleOverrides: InlineStyleStory = {
    args: {
        theme: "lifesg",
        mode: "light",
        primaryColor: "#1f7a8c",
        inverseColor: "#2f2d2e",
    },
    argTypes: {
        theme: {
            control: "select",
            options: ["lifesg", "oneservice", "rbs"],
        },
        mode: {
            control: "radio",
            options: ["light", "dark"],
        },
        primaryColor: {
            control: "color",
        },
        inverseColor: {
            control: "color",
        },
    },
    render: (args) => {
        return (
            <ThemeProvider theme={args.theme} mode={args.mode}>
                <StyledComponentsThemeProvider
                    theme={{
                        ...STYLED_THEME_MAP[args.theme],
                        colourMode: args.mode,
                    }}
                >
                    <ThemeScopeInlineVariables
                        primaryColor={args.primaryColor}
                        inverseColor={args.inverseColor}
                    />
                    <div style={SCOPE_STYLE}>
                        <div
                            style={{
                                marginBottom: "12px",
                                fontWeight: 700,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <span>Scope with useApplyStyle overrides</span>
                            <span style={{ fontWeight: 500 }}>
                                {args.theme} / {args.mode}
                            </span>
                        </div>
                        <div style={{ marginBottom: "12px", fontSize: "14px" }}>
                            The popover should reflect inline CSS variable
                            overrides applied via <code>useApplyStyle</code>.
                        </div>
                        <PopoverTrigger
                            popoverContent={
                                <PreviewPopoverContent
                                    theme={args.theme}
                                    mode={args.mode}
                                />
                            }
                        >
                            <Button.Default>
                                Open popover with overridden vars
                            </Button.Default>
                        </PopoverTrigger>
                    </div>
                </StyledComponentsThemeProvider>
            </ThemeProvider>
        );
    },
};
