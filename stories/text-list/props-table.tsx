import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { TextList } from "src/text-list";
import { OrderedListPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "TextList", content: <ArgTypes of={TextList} /> },
            {
                label: "OrderedListProps",
                content: <ApiTable sections={OrderedListPropsData} />,
            },
        ]}
    />
);
