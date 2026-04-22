import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { ProgressIndicatorPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "ProgressIndicatorProps",
                content: <ApiTable sections={ProgressIndicatorPropsData} />,
            },
        ]}
    />
);
