"use client";

import { PopoverTrigger } from "@lifesg/react-design-system/popover-v2";
import { ThemeProvider, useTheme } from "@lifesg/react-design-system/theme";
import { useApplyStyle } from "@lifesg/react-design-system/theme/utils";
import { useMemo, useRef } from "react";

const PopoverWithCustomVariable = ({
    markerTestId,
    buttonLabel,
}: {
    markerTestId: string;
    buttonLabel: string;
}) => {
    const { mode, themeElement } = useTheme();
    const rootNode = useRef<HTMLDivElement>(null);
    const themeElementRef = useMemo(
        () => ({ current: themeElement }),
        [themeElement]
    );

    useApplyStyle(themeElementRef, {
        "--fds-colour-bg":
            mode === "dark" ? "rgb(13 116 255)" : "rgb(40 167 69)",
    });

    return (
        <div ref={rootNode} style={{ minHeight: "220px" }}>
            <PopoverTrigger
                rootNode={rootNode}
                popoverContent={
                    <div
                        data-testid={markerTestId}
                        style={{
                            background: "var(--fds-colour-bg)",
                            color: "white",
                            padding: "12px 16px",
                            borderRadius: "8px",
                            fontWeight: 700,
                        }}
                    >
                        Portal propagation marker
                    </div>
                }
            >
                <button type="button">{buttonLabel}</button>
            </PopoverTrigger>
        </div>
    );
};

export default function Story() {
    return (
        <div style={{ display: "grid", gap: "16px", paddingBottom: "16px" }}>
            <ThemeProvider mode="light">
                <PopoverWithCustomVariable
                    markerTestId="custom-propagation-marker-light"
                    buttonLabel="Open light popover"
                />
            </ThemeProvider>

            <ThemeProvider mode="dark">
                <PopoverWithCustomVariable
                    markerTestId="custom-propagation-marker-dark"
                    buttonLabel="Open dark popover"
                />
            </ThemeProvider>
        </div>
    );
}
