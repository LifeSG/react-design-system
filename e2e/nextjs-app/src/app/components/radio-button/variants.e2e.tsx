"use client";

import { RadioButton } from "@lifesg/react-design-system/radio-button";

export default function Story() {
    return (
        <>
            <div className="story-row-container">
                <RadioButton
                    data-testid="radio-unchecked-default"
                    checked={false}
                />
                <RadioButton data-testid="radio-checked-default" checked />
                <RadioButton data-testid="radio-unchecked-disabled" disabled />
                <RadioButton
                    data-testid="radio-checked-disabled"
                    checked
                    disabled
                />
            </div>
            <div className="story-row-container">
                <RadioButton
                    data-testid="radio-unchecked-small"
                    displaySize="small"
                    checked={false}
                />
                <RadioButton
                    data-testid="radio-checked-small"
                    displaySize="small"
                    checked
                />
                <RadioButton
                    data-testid="radio-unchecked-small-disabled"
                    disabled
                    displaySize="small"
                />
                <RadioButton
                    data-testid="radio-checked-small-disabled"
                    checked
                    displaySize="small"
                    disabled
                />
            </div>
        </>
    );
}
