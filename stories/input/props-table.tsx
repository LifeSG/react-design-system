import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { InputPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "InputProps",
                content: <ApiTable sections={InputPropsData} />,
            },
        ]}
    />
);
