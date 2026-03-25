import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Pagination } from "src/pagination";
import { PageSizeItemPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Pagination", content: <ArgTypes of={Pagination} /> },
            {
                label: "PageSizeItemProps",
                content: <ApiTable sections={PageSizeItemPropsData} />,
            },
        ]}
    />
);
