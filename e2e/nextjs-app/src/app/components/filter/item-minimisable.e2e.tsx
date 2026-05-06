"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { Typography } from "@lifesg/react-design-system";

const LONG_TEXT = (
    <Typography.BodyMD>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis
        neque felis, ac tempor erat iaculis et. Nam elementum at lectus et
        dapibus. Orci varius magnis dis parturient montes, nascetur ridiculus
        mus. Integer aliquam placerat ullamcorper. Sed ut pulvinar felis.
        Praesent vulputate ex quis tellus dictum laoreet. Aliquam condimentum
        libero ut sagittis interdum. Fusce auctor pharetra lorem eu rhoncus.
        Integer consectetur in odio sed vestibulum.
    </Typography.BodyMD>
);

export default function Story() {
    return (
        <div className="story-column-container">
            <Filter customLabels={{ headerTitle: "Minimisable filter" }}>
                <Filter.Item
                    initialExpanded
                    minimisable
                    title="Minimised"
                    data-testid="item-minimised"
                >
                    {LONG_TEXT}
                </Filter.Item>
                <Filter.Item
                    initialExpanded
                    minimisable
                    minimisedHeight={50}
                    title="With custom minimised height"
                    data-testid="item-minimised-custom"
                >
                    {LONG_TEXT}
                </Filter.Item>
            </Filter>
        </div>
    );
}
