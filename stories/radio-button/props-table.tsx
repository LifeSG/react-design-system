import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { RadioButtonPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "RadioButtonProps",
                content: <ApiTable sections={RadioButtonPropsData} />,
            },
        ]}
    />
);
