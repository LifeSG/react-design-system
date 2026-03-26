import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { InputRangeSliderPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "InputRangeSliderProps",
                content: <ApiTable sections={InputRangeSliderPropsData} />,
            },
        ]}
    />
);
