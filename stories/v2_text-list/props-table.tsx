import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    V2_OrderedListPropsData,
    V2_UnorderedListPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "V2_UnorderedListProps",
                content: <ApiTable sections={V2_UnorderedListPropsData} />,
            },
            {
                label: "V2_OrderedListProps",
                content: <ApiTable sections={V2_OrderedListPropsData} />,
            },
        ]}
    />
);
