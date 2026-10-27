"use client";
import { Tag } from "@lifesg/react-design-system/tag";
import { BinIcon } from "@lifesg/react-icons/bin";

export default function Story() {
    return (
        <div className="story-column-container">
            {/* Solid variants */}
            <div className="story-row-container">
                <Tag type="solid" colorType="black">
                    Black
                </Tag>
                <Tag type="solid" colorType="grey">
                    Grey
                </Tag>
                <Tag type="solid" colorType="green">
                    Green
                </Tag>
                <Tag type="solid" colorType="yellow">
                    Yellow
                </Tag>
                <Tag type="solid" colorType="red">
                    Red
                </Tag>
                <Tag type="solid" colorType="blue">
                    Blue
                </Tag>
                <Tag type="solid" colorType="primary">
                    Primary
                </Tag>
            </div>

            {/* Outline variants */}
            <div className="story-row-container">
                <Tag type="outline" colorType="black">
                    Black
                </Tag>
                <Tag type="outline" colorType="grey">
                    Grey
                </Tag>
                <Tag type="outline" colorType="green">
                    Green
                </Tag>
                <Tag type="outline" colorType="yellow">
                    Yellow
                </Tag>
                <Tag type="outline" colorType="red">
                    Red
                </Tag>
                <Tag type="outline" colorType="blue">
                    Blue
                </Tag>
                <Tag type="outline" colorType="primary">
                    Primary
                </Tag>
            </div>

            {/* With icon */}
            <div className="story-row-container">
                <Tag type="solid" colorType="green" icon={<BinIcon />}>
                    With icon
                </Tag>
                <Tag type="outline" colorType="primary" icon={<BinIcon />}>
                    With icon
                </Tag>
                <Tag
                    type="solid"
                    colorType="red"
                    icon={<BinIcon />}
                    iconPosition="right"
                >
                    Icon right
                </Tag>
            </div>
        </div>
    );
}
