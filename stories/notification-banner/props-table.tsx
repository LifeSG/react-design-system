import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { NotificationBannerPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "NotificationBannerProps",
                content: <ApiTable sections={NotificationBannerPropsData} />,
            },
        ]}
    />
);
