"use client";
import { Checkbox } from "@lifesg/react-design-system/checkbox";

export default function Story() {
    return (
        <div className="story-column-container">
            <div className="story-row-container">
                <Checkbox data-testid="checkbox-default" />
                <Checkbox data-testid="checkbox-checked" checked readOnly />
                <Checkbox
                    data-testid="checkbox-indeterminate"
                    indeterminate
                    readOnly
                />
            </div>
            <div className="story-row-container">
                <Checkbox data-testid="checkbox-disabled" disabled />
                <Checkbox
                    data-testid="checkbox-disabled-checked"
                    disabled
                    checked
                    readOnly
                />
                <Checkbox
                    data-testid="checkbox-disabled-indeterminate"
                    disabled
                    indeterminate
                    readOnly
                />
            </div>
            <div className="story-row-container">
                <Checkbox data-testid="checkbox-small" displaySize="small" />
                <Checkbox
                    data-testid="checkbox-small-checked"
                    displaySize="small"
                    checked
                    readOnly
                />
                <Checkbox
                    data-testid="checkbox-small-indeterminate"
                    displaySize="small"
                    indeterminate
                    readOnly
                />
            </div>
            <div className="story-row-container">
                <Checkbox
                    data-testid="checkbox-small-disabled"
                    displaySize="small"
                    disabled
                />
                <Checkbox
                    data-testid="checkbox-small-disabled-checked"
                    displaySize="small"
                    disabled
                    checked
                    readOnly
                />
                <Checkbox
                    data-testid="checkbox-small-disabled-indeterminate"
                    displaySize="small"
                    disabled
                    indeterminate
                    readOnly
                />
            </div>
        </div>
    );
}
