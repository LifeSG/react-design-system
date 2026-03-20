"use client";

import { PopoverTrigger } from "@lifesg/react-design-system/popover-v2";
import { useTheme } from "@lifesg/react-design-system/theme";
import { useApplyStyle } from "@lifesg/react-design-system/theme/utils";
import { useMemo, useRef } from "react";

export default function Story() {
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
        <div
            ref={rootNode}
            style={{ minHeight: "260px", paddingBottom: "16px" }}
        >
            <PopoverTrigger
                rootNode={rootNode}
                popoverContent={
                    <div
                        data-testid="custom-propagation-marker"
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
                <button type="button">Open popover</button>
            </PopoverTrigger>
        </div>
    );
}
