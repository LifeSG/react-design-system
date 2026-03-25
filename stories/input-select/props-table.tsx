import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { InputSelect } from "src/input-select";
import {
    InputSelectOptionsPropsData,
    InputSelectSharedPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "InputSelect", content: <ArgTypes of={InputSelect} /> },
            {
                label: "InputSelectOptionsProps",
                content: <ApiTable sections={InputSelectOptionsPropsData} />,
            },
            {
                label: "InputSelectSharedProps",
                content: <ApiTable sections={InputSelectSharedPropsData} />,
            },
        ]}
    />
);
