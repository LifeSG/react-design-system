"use client";
import { InputSlider } from "@lifesg/react-design-system/input-slider";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <InputSlider
                value={40}
                ariaLabel="Default"
                data-testid="slider-standalone-default"
            />
            <InputSlider
                value={40}
                disabled
                ariaLabel="Disabled"
                data-testid="slider-standalone-disabled"
            />
            <InputSlider
                value={40}
                readOnly
                ariaLabel="Read-only"
                data-testid="slider-standalone-readonly"
            />
        </div>
    );
}
