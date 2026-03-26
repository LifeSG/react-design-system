import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { ErrorDisplayPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "ErrorDisplayProps",
                content: <ApiTable sections={ErrorDisplayPropsData} />,
            },
        ]}
    />
);
