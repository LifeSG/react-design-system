"use client";
import { Pill } from "@lifesg/react-design-system";
import { BinIcon } from "@lifesg/react-icons/bin";

export default function Story() {
    return (
        <div className="story-column-container">
            {/* Solid variants */}
            <div className="story-row-container">
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
            <div className="story-row-container">
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
            <div className="story-row-container">
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
