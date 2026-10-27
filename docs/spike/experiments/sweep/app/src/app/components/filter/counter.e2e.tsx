"use client";
import { Typography } from "@lifesg/react-design-system";
import { Filter } from "@lifesg/react-design-system/filter";

export default function Story() {
    return (
        <div>
            <Filter data-testid="filter" count={3}>
                <Filter.Item title="Item with title" data-testid="item-title">
                    <Typography.BodySM>Content goes here</Typography.BodySM>
                </Filter.Item>
            </Filter>
        </div>
    );
}
