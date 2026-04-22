import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    PopoverInlinePropsData,
    PopoverV2PropsData,
    PopoverV2TriggerPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "PopoverV2Props",
                content: <ApiTable sections={PopoverV2PropsData} />,
            },
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
