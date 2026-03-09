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
                <Button.Default styleType="default">default</Button.Default>
                <Button.Default styleType="secondary">secondary</Button.Default>
                <Button.Default styleType="light">light</Button.Default>
                <Button.Default styleType="link">link</Button.Default>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Button.Small styleType="default">default</Button.Small>
                <Button.Small styleType="secondary">secondary</Button.Small>
                <Button.Small styleType="light">light</Button.Small>
                <Button.Small styleType="link">link</Button.Small>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Button.Large styleType="default">default</Button.Large>
                <Button.Large styleType="secondary">secondary</Button.Large>
                <Button.Large styleType="light">light</Button.Large>
                <Button.Large styleType="link">link</Button.Large>
            </div>
        </div>
    );
}
