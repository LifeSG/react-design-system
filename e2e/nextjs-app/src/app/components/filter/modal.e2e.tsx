"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { Typography } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <Filter.Modal
            onDismiss={() => {}}
            onDone={() => {}}
            customLabels={{
                headerTitle: "Filter Modal",
                toggleFilterButtonLabel: "Open filters",
                doneButtonLabel: "Apply",
            }}
        >
            <Filter.Item
                title="Search"
                data-testid="item-search"
                addon={{
                    type: "popover",
                    content: "More info about this filter item",
                }}
                showMobileDivider={false}
            >
                <Typography.BodySM>Search content</Typography.BodySM>
            </Filter.Item>
            <Filter.Item title="Date" data-testid="item-date">
                <Typography.BodySM>Date content</Typography.BodySM>
            </Filter.Item>
        </Filter.Modal>
    );
}
