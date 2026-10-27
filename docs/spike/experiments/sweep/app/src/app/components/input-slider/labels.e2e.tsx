"use client";
import { InputSlider } from "@lifesg/react-design-system/input-slider";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <InputSlider
                value={40}
                showSliderLabels
                sliderLabelPrefix="$"
                ariaLabel="Amount"
            />
            <InputSlider
                value={40}
                showSliderLabels
                sliderLabelSuffix="km"
                ariaLabel="Distance"
            />
            <InputSlider
                value={40}
                showIndicatorLabel
                indicatorLabelPrefix="Selected: "
                indicatorLabelSuffix=" items"
                ariaLabel="Items"
            />
        </div>
    );
}
