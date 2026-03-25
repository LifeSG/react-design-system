import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Filter } from "src/filter";
import {
    FilterBasePropsData,
    FilterItemCheckboxOptionPropsData,
    FilterItemCheckboxPropsData,
    FilterItemPropsData,
    FilterModalPropsData,
    FilterPagePropsData,
    FilterSidebarPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Filter", content: <ArgTypes of={Filter} /> },
            {
                label: "FilterBaseProps",
                content: <ApiTable sections={FilterBasePropsData} />,
            },
            {
                label: "FilterSidebarProps",
                content: <ApiTable sections={FilterSidebarPropsData} />,
            },
            {
                label: "FilterModalProps",
                content: <ApiTable sections={FilterModalPropsData} />,
            },
            {
                label: "FilterItemProps",
                content: <ApiTable sections={FilterItemPropsData} />,
            },
            {
                label: "FilterPageProps",
                content: <ApiTable sections={FilterPagePropsData} />,
            },
            {
                label: "FilterItemCheckboxOptionProps",
                content: (
                    <ApiTable sections={FilterItemCheckboxOptionPropsData} />
                ),
            },
            {
                label: "FilterItemCheckboxProps",
                content: <ApiTable sections={FilterItemCheckboxPropsData} />,
            },
        ]}
    />
);
