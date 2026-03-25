import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { SingpassButton } from "src/singpass-button";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "SingpassButton",
                content: <ArgTypes of={SingpassButton} />,
            },
        ]}
    />
);
