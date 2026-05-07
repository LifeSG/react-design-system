"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { Typography } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div className="story-column-container">
            <Filter customLabels={{ headerTitle: "Filter" }}>
                <Filter.Item
                    title="No divider"
                    showDivider={false}
                    data-testid="item-no-divider"
                >
                    <Typography.BodyBL>Without divider</Typography.BodyBL>
                </Filter.Item>
                <Filter.Item
                    title="With divider"
                    data-testid="item-with-divider"
                >
                    <Typography.BodyBL>With divider</Typography.BodyBL>
                </Filter.Item>
                <Filter.Item title="Default" data-testid="item-default">
                    <Typography.BodyBL>Collapsible</Typography.BodyBL>
                </Filter.Item>
                <Filter.Item data-testid="item-no-title-collapsible">
                    <Typography.BodyBL>No title, collapsible</Typography.BodyBL>
                </Filter.Item>
                <Filter.Item
                    collapsible={false}
                    data-testid="item-no-title-not-collapsible"
                >
                    <Typography.BodyBL>
                        No title, not collapsible
                    </Typography.BodyBL>
                </Filter.Item>
                <Filter.Item
                    title="Not collapsible"
                    collapsible={false}
                    data-testid="item-not-collapsible"
                >
                    <Typography.BodyBL>Always visible</Typography.BodyBL>
                </Filter.Item>
            </Filter>
        </div>
    );
}
