import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { MaskedInput } from "src/masked-input";
import { MaskAttributePropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "MaskedInput", content: <ArgTypes of={MaskedInput} /> },
            {
                label: "MaskAttributeProps",
                content: <ApiTable sections={MaskAttributePropsData} />,
            },
        ]}
    />
);
