import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { PopoverV2 } from "src/popover-v2";
import {
    PopoverInlinePropsData,
    PopoverV2TriggerPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "PopoverV2", content: <ArgTypes of={PopoverV2} /> },
            {
                label: "PopoverV2TriggerProps",
                content: <ApiTable sections={PopoverV2TriggerPropsData} />,
            },
            {
                label: "PopoverInlineProps",
                content: <ApiTable sections={PopoverInlinePropsData} />,
            },
        ]}
    />
);
