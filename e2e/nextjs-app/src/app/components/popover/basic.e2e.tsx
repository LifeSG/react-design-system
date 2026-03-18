"use client";

import { PopoverTrigger } from "@lifesg/react-design-system/popover-v2";
import { ThemeProvider } from "@lifesg/react-design-system/theme";
import { useRef } from "react";

const BasicPopoverSection = ({
    mode,
    contentTestId,
    contentText,
}: {
    mode: "light" | "dark";
    contentTestId: string;
    contentText: string;
}) => (
    <ThemeProvider mode={mode}>
        <BasicPopoverContent
            mode={mode}
            contentTestId={contentTestId}
            contentText={contentText}
        />
    </ThemeProvider>
);

const BasicPopoverContent = ({
    mode,
    contentTestId,
    contentText,
}: {
    mode: "light" | "dark";
    contentTestId: string;
    contentText: string;
}) => {
    const rootNode = useRef<HTMLDivElement>(null);

    return (
        <div ref={rootNode} style={{ minHeight: "220px" }}>
            <PopoverTrigger
                rootNode={rootNode}
                popoverContent={
                    <div
                        data-testid={contentTestId}
                        style={{
                            background: "var(--fds-colour-bg)",
                            maxWidth: "280px",
                            padding: "12px 16px",
                            borderRadius: "8px",
                            color: "var(--fds-colour-text)",
                        }}
                    >
                        {contentText}
                    </div>
                }
            >
                <button type="button">Open {mode} popover</button>
            </PopoverTrigger>
        </div>
    );
};

export default function Story() {
    return (
        <div style={{ display: "grid", gap: "16px", paddingBottom: "16px" }}>
            <BasicPopoverSection
                mode="light"
                contentTestId="basic-popover-content-light"
                contentText="Light mode popover content."
            />
            <BasicPopoverSection
                mode="dark"
                contentTestId="basic-popover-content-dark"
                contentText="Dark mode popover content."
            />
        </div>
    );
}
