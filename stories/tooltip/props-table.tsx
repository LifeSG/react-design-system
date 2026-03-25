import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Tooltip } from "src/tooltip";
import {
    TooltipHOCOptionsPropsData,
    TooltipHOCPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Tooltip", content: <ArgTypes of={Tooltip} /> },
            {
                label: "TooltipHOCProps",
                content: <ApiTable sections={TooltipHOCPropsData} />,
            },
            {
                label: "TooltipHOCOptionsProps",
                content: <ApiTable sections={TooltipHOCOptionsPropsData} />,
            },
        ]}
    />
);
