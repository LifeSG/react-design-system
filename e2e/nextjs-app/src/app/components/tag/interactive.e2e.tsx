"use client";
import { Tag } from "@lifesg/react-design-system/tag";

export default function Story() {
    return (
        <div className="story-column-container">
            {/* Solid interactive - all color variants */}
            <div className="story-row-container" data-testid="solid-variants">
                <Tag type="solid" colorType="black" interactive>
                    Black
                </Tag>
                <Tag type="solid" colorType="grey" interactive>
                    Grey
                </Tag>
                <Tag type="solid" colorType="green" interactive>
                    Green
                </Tag>
                <Tag type="solid" colorType="yellow" interactive>
                    Yellow
                </Tag>
                <Tag type="solid" colorType="red" interactive>
                    Red
                </Tag>
                <Tag type="solid" colorType="blue" interactive>
                    Blue
                </Tag>
                <Tag type="solid" colorType="primary" interactive>
                    Primary
                </Tag>
            </div>

            {/* Outline interactive - all color variants */}
            <div className="story-row-container" data-testid="outline-variants">
                <Tag type="outline" colorType="black" interactive>
                    Black
                </Tag>
                <Tag type="outline" colorType="grey" interactive>
                    Grey
                </Tag>
                <Tag type="outline" colorType="green" interactive>
                    Green
                </Tag>
                <Tag type="outline" colorType="yellow" interactive>
                    Yellow
                </Tag>
                <Tag type="outline" colorType="red" interactive>
                    Red
                </Tag>
                <Tag type="outline" colorType="blue" interactive>
                    Blue
                </Tag>
                <Tag type="outline" colorType="primary" interactive>
                    Primary
                </Tag>
            </div>
        </div>
    );
}
