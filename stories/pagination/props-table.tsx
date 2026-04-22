import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { PageSizeItemPropsData, PaginationPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "PaginationProps",
                content: <ApiTable sections={PaginationPropsData} />,
            },
            {
                label: "PageSizeItemProps",
                content: <ApiTable sections={PageSizeItemPropsData} />,
            },
        ]}
    />
);
