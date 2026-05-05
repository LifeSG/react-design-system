"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { Typography } from "@lifesg/react-design-system";
import { getOptions } from "./options";

const OPTIONS = getOptions(3);

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
