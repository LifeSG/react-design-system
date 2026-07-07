"use client";
import { InputRangeSlider } from "@lifesg/react-design-system/input-range-slider";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <InputRangeSlider
                value={[20, 70]}
                showSliderLabels
                sliderLabelPrefix="$"
            />
            <InputRangeSlider
                value={[20, 70]}
                showSliderLabels
                sliderLabelSuffix="km"
            />
            <InputRangeSlider
                value={[20, 70]}
                showIndicatorLabel
                indicatorLabelPrefix="Showing "
                indicatorLabelSuffix=" items"
            />
        </div>
    );
}
