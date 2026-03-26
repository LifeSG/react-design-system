import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    SmartAppBannerContentPropsData,
    SmartAppBannerPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "SmartAppBannerProps",
                content: <ApiTable sections={SmartAppBannerPropsData} />,
            },
            {
                label: "SmartAppBannerContentProps",
                content: <ApiTable sections={SmartAppBannerContentPropsData} />,
            },
        ]}
    />
);
