import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    FilterBasePropsData,
    FilterItemCheckboxOptionPropsData,
    FilterItemCheckboxPropsData,
    FilterItemPropsData,
    FilterModalPropsData,
    FilterPagePropsData,
    FilterPropsData,
    FilterSidebarPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "FilterProps",
                content: <ApiTable sections={FilterPropsData} />,
            },
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
