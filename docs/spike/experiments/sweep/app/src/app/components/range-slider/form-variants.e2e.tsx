"use client";
import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.RangeSlider
                label={{
                    children: "Default",
                    subtitle: "This is the subtitle",
                }}
                min={0}
                max={10}
                step={1}
                data-testid="range-slider-default"
            />
            <Form.RangeSlider
                label={{
                    children: "Disabled",
                    subtitle: "This is the subtitle",
                }}
                min={0}
                max={10}
                step={1}
                disabled
                data-testid="range-slider-disabled"
            />
            <Form.RangeSlider
                label={{
                    children: "Read-only",
                    subtitle: "This is the subtitle",
                }}
                min={0}
                max={10}
                step={1}
                readOnly
                data-testid="range-slider-readonly"
            />
            <Form.RangeSlider
                label={{
                    children: "Error",
                    subtitle: "This is the subtitle",
                }}
                min={0}
                max={10}
                step={1}
                errorMessage="Required"
                data-testid="range-slider-error"
            />
            <Form.RangeSlider
                label={{
                    children: "Pre-filled",
                    subtitle: "This is the subtitle",
                }}
                min={0}
                max={10}
                step={1}
                value={[3, 6]}
                data-testid="range-slider-prefilled"
            />
        </div>
    );
}
