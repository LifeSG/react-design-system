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
                <Button.Default loading>With label</Button.Default>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Button.Small loading>With label</Button.Small>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Button.Large loading>With label</Button.Large>
            </div>
        </div>
    );
}
