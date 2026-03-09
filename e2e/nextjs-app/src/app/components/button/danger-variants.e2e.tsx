"use client";
import { Button } from "@lifesg/react-design-system/button";

export default function Story() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
            }}
        >
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Button.Default danger styleType="default">
                    default
                </Button.Default>
                <Button.Default danger styleType="secondary">
                    secondary
                </Button.Default>
                <Button.Default danger styleType="light">
                    light
                </Button.Default>
                <Button.Default danger styleType="link">
                    link
                </Button.Default>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Button.Small danger styleType="default">
                    default
                </Button.Small>
                <Button.Small danger styleType="secondary">
                    secondary
                </Button.Small>
                <Button.Small danger styleType="light">
                    light
                </Button.Small>
                <Button.Small danger styleType="link">
                    link
                </Button.Small>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Button.Large danger styleType="default">
                    default
                </Button.Large>
                <Button.Large danger styleType="secondary">
                    secondary
                </Button.Large>
                <Button.Large danger styleType="light">
                    light
                </Button.Large>
                <Button.Large danger styleType="link">
                    link
                </Button.Large>
            </div>
        </div>
    );
}
