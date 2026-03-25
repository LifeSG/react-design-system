import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { V2_TextList } from "src/v2_text-list";
import { V2_OrderedListPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "V2_TextList", content: <ArgTypes of={V2_TextList} /> },
            {
                label: "V2_OrderedListProps",
                content: <ApiTable sections={V2_OrderedListPropsData} />,
            },
        ]}
    />
);
