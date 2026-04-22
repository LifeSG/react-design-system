import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { AddonPropsData, InputGroupPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "InputGroupProps",
                content: <ApiTable sections={InputGroupPropsData} />,
            },
            {
                label: "AddonProps",
                content: <ApiTable sections={AddonPropsData} />,
            },
        ]}
    />
);
