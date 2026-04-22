import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    FullscreenCarouselItemPropsData,
    FullscreenImageCarouselPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "FullscreenImageCarouselProps",
                content: (
                    <ApiTable sections={FullscreenImageCarouselPropsData} />
                ),
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
