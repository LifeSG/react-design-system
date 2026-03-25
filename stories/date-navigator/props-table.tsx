import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { DateNavigator } from "src/date-navigator";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "DateNavigator",
                content: <ArgTypes of={DateNavigator} />,
            },
        ]}
    />
);
