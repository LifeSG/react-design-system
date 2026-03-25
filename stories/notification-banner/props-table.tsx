import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { NotificationBanner } from "src/notification-banner";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "NotificationBanner",
                content: <ArgTypes of={NotificationBanner} />,
            },
        ]}
    />
);
