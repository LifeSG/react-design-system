"use client";
import { Checkbox } from "@lifesg/react-design-system/checkbox";

export default function Story() {
    return (
        <div className="story-column-container">
            <div className="story-row-container">
                <Checkbox aria-label="Default" data-testid="checkbox-default" />
                <Checkbox
                    aria-label="Checked"
                    data-testid="checkbox-checked"
                    checked
                    readOnly
                />
                <Checkbox
                    aria-label="Indeterminate"
                    data-testid="checkbox-indeterminate"
                    indeterminate
                    readOnly
                />
            </div>
            <div className="story-row-container">
                <Checkbox
                    aria-label="Disabled"
                    data-testid="checkbox-disabled"
                    disabled
                />
                <Checkbox
                    aria-label="Disabled Checked"
                    data-testid="checkbox-disabled-checked"
                    disabled
                    checked
                    readOnly
                />
                <Checkbox
                    aria-label="Disabled Indeterminate"
                    data-testid="checkbox-disabled-indeterminate"
                    disabled
                    indeterminate
                    readOnly
                />
            </div>
            <div className="story-row-container">
                <Checkbox
                    aria-label="Small"
                    data-testid="checkbox-small"
                    displaySize="small"
                />
                <Checkbox
                    aria-label="Small Checked"
                    data-testid="checkbox-small-checked"
                    displaySize="small"
                    checked
                    readOnly
                />
                <Checkbox
                    aria-label="Small Indeterminate"
                    data-testid="checkbox-small-indeterminate"
                    displaySize="small"
                    indeterminate
                    readOnly
                />
            </div>
            <div className="story-row-container">
                <Checkbox
                    aria-label="Small Disabled"
                    data-testid="checkbox-small-disabled"
                    displaySize="small"
                    disabled
                />
                <Checkbox
                    aria-label="Small Disabled Checked"
                    data-testid="checkbox-small-disabled-checked"
                    displaySize="small"
                    disabled
                    checked
                    readOnly
                />
                <Checkbox
                    aria-label="Small Disabled Indeterminate"
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
