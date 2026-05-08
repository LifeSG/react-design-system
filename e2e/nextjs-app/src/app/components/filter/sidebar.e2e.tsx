"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { Typography } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div className="story-column-container">
            <Filter
                data-testid="filter"
                customLabels={{ headerTitle: "Filter Sidebar" }}
                clearButtonDisabled={true}
            >
                <Filter.Item
                    title="Item with title"
                    data-testid="item-title"
                    showDivider={false}
                >
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
            </Filter>
        </div>
    );
}
