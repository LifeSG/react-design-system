import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { DividerPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "DividerProps",
                content: <ApiTable sections={DividerPropsData} />,
            },
        ]}
    />
);
