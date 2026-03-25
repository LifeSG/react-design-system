import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { V2_Text } from "src/v2_text";
import { V2_TextLinkPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "V2_Text", content: <ArgTypes of={V2_Text} /> },
            {
                label: "V2_TextLinkProps",
                content: <ApiTable sections={V2_TextLinkPropsData} />,
            },
        ]}
    />
);
