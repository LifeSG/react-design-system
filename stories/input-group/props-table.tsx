import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { InputGroup } from "src/input-group";
import { AddonPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "InputGroup", content: <ArgTypes of={InputGroup} /> },
            {
                label: "AddonProps",
                content: <ApiTable sections={AddonPropsData} />,
            },
        ]}
    />
);
