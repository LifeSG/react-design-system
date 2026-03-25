import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { SmartAppBanner } from "src/smart-app-banner";
import { SmartAppBannerContentPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "SmartAppBanner",
                content: <ArgTypes of={SmartAppBanner} />,
            },
            {
                label: "SmartAppBannerContentProps",
                content: <ApiTable sections={SmartAppBannerContentPropsData} />,
            },
        ]}
    />
);
