import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { DataTable } from "src/data-table";
import {
    HeaderItemPropsData,
    HeaderPropsData,
    RowPropsData,
    SortIndicatorsPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "DataTable", content: <ArgTypes of={DataTable} /> },
            {
                label: "SortIndicatorsProps",
                content: <ApiTable sections={SortIndicatorsPropsData} />,
            },
            {
                label: "HeaderProps",
                content: <ApiTable sections={HeaderPropsData} />,
            },
            {
                label: "HeaderItemProps",
                content: <ApiTable sections={HeaderItemPropsData} />,
            },
            {
                label: "RowProps",
                content: <ApiTable sections={RowPropsData} />,
            },
        ]}
    />
);
