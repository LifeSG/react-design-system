"use client";
import { InputRangeSlider } from "@lifesg/react-design-system/input-range-slider";

export default function Story() {
    return (
        <div className="story-column-container">
            <InputRangeSlider
                value={[10, 40]}
                ariaLabels={["Minimum value", "Maximum value"]}
                data-testid="range-slider-default"
            />
            <InputRangeSlider
                value={[10, 40]}
                disabled
                ariaLabels={["Minimum value", "Maximum value"]}
                data-testid="range-slider-disabled"
            />
            <InputRangeSlider
                value={[10, 40]}
                readOnly
                ariaLabels={["Minimum value", "Maximum value"]}
                data-testid="range-slider-readonly"
            />
        </div>
    );
}
