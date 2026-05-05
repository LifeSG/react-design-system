"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { Typography } from "@lifesg/react-design-system";

const OPTIONS = [
    { value: "option-1", label: "Option 1" },
    { value: "option-2", label: "Option 2" },
    { value: "option-3", label: "Option 3" },
];

export default function Story() {
    return (
        <div className="story-column-container">
            <Filter
                data-testid="filter"
                customLabels={{ headerTitle: "Filter Sidebar" }}
            >
                <Filter.Item title="Item with title" data-testid="item-title">
                    <Typography.BodySM>Content goes here</Typography.BodySM>
                </Filter.Item>
                <Filter.Item
                    title="Item with addon"
                    data-testid="item-addon"
                    addon={{
                        type: "popover",
                        content: "More info about this filter item",
                    }}
                >
                    <Typography.BodySM>Content goes here</Typography.BodySM>
                </Filter.Item>
                <Filter.Checkbox
                    title="Checkbox item"
                    options={OPTIONS}
                    data-testid="item-checkbox"
                />
            </Filter>
        </div>
    );
}
