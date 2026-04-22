import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { BreadcrumbPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "BreadcrumbProps",
                content: <ApiTable sections={BreadcrumbPropsData} />,
            },
        ]}
    />
);
