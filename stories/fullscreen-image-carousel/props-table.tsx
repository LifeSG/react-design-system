import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { FullscreenImageCarousel } from "src/fullscreen-image-carousel";
import { FullscreenCarouselItemPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "FullscreenImageCarousel",
                content: <ArgTypes of={FullscreenImageCarousel} />,
            },
            {
                label: "FullscreenCarouselItemProps",
                content: (
                    <ApiTable sections={FullscreenCarouselItemPropsData} />
                ),
            },
        ]}
    />
);
