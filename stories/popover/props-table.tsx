import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    PopoverHOCOptionsPropsData,
    PopoverHOCPropsData,
    PopoverPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "PopoverProps",
                content: <ApiTable sections={PopoverPropsData} />,
            },
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
