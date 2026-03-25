import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Popover } from "src/popover";
import {
    PopoverHOCOptionsPropsData,
    PopoverHOCPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Popover", content: <ArgTypes of={Popover} /> },
            {
                label: "PopoverHOCProps",
                content: <ApiTable sections={PopoverHOCPropsData} />,
            },
            {
                label: "PopoverHOCOptionsProps",
                content: <ApiTable sections={PopoverHOCOptionsPropsData} />,
            },
        ]}
    />
);
