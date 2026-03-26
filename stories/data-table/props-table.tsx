import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    DataTablePropsData,
    HeaderItemPropsData,
    HeaderPropsData,
    RowPropsData,
    SortIndicatorsPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "DataTableProps",
                content: <ApiTable sections={DataTablePropsData} />,
            },
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
