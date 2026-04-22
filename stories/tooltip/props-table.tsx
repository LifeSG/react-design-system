import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    TooltipHOCOptionsPropsData,
    TooltipHOCPropsData,
    TooltipPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "TooltipProps",
                content: <ApiTable sections={TooltipPropsData} />,
            },
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
