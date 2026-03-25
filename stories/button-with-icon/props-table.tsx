import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { ButtonWithIcon } from "src/button-with-icon";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "ButtonWithIcon",
                content: <ArgTypes of={ButtonWithIcon} />,
            },
        ]}
    />
);
