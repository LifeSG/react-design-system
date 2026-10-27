"use client";
import { InputRangeSlider } from "@lifesg/react-design-system/input-range-slider";

export default function Story() {
    return (
        <div className="story-column-container">
            <InputRangeSlider numOfThumbs={3} value={[15, 35, 55]} />
            <InputRangeSlider
                numOfThumbs={3}
                value={[15, 35, 55]}
                ariaLabels={["Custom start", "Custom middle", "Custom end"]}
            />
        </div>
    );
}
