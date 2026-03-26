import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { PillPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "PillProps",
                content: <ApiTable sections={PillPropsData} />,
            },
        ]}
    />
);
