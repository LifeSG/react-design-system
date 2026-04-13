"use client";
import { Pill } from "@lifesg/react-design-system";
import { BinIcon } from "@lifesg/react-icons/bin";

export default function Story() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "2rem",
            }}
        >
            {/* Solid variants */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <Pill type="solid" colorType="black">
                    Black
                </Pill>
                <Pill type="solid" colorType="grey">
                    Grey
                </Pill>
                <Pill type="solid" colorType="green">
                    Green
                </Pill>
                <Pill type="solid" colorType="yellow">
                    Yellow
                </Pill>
                <Pill type="solid" colorType="red">
                    Red
                </Pill>
                <Pill type="solid" colorType="blue">
                    Blue
                </Pill>
                <Pill type="solid" colorType="primary">
                    Primary
                </Pill>
            </div>

            {/* Outline variants */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <Pill type="outline" colorType="black">
                    Black
                </Pill>
                <Pill type="outline" colorType="grey">
                    Grey
                </Pill>
                <Pill type="outline" colorType="green">
                    Green
                </Pill>
                <Pill type="outline" colorType="yellow">
                    Yellow
                </Pill>
                <Pill type="outline" colorType="red">
                    Red
                </Pill>
                <Pill type="outline" colorType="blue">
                    Blue
                </Pill>
                <Pill type="outline" colorType="primary">
                    Primary
                </Pill>
            </div>

            {/* With icon */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <Pill type="solid" colorType="green" icon={<BinIcon />}>
                    With icon
                </Pill>
                <Pill type="outline" colorType="primary" icon={<BinIcon />}>
                    With icon
                </Pill>
            </div>
        </div>
    );
}
