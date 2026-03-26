import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { InputSliderPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "InputSliderProps",
                content: <ApiTable sections={InputSliderPropsData} />,
            },
        ]}
    />
);
