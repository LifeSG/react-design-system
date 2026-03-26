import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    OrderedListPropsData,
    UnorderedListPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "UnorderedListProps",
                content: <ApiTable sections={UnorderedListPropsData} />,
            },
            {
                label: "OrderedListProps",
                content: <ApiTable sections={OrderedListPropsData} />,
            },
        ]}
    />
);
