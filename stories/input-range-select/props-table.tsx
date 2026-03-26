import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    InputRangeSelectOptionsPropsData,
    InputRangeSelectPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "InputRangeSelectProps",
                content: <ApiTable sections={InputRangeSelectPropsData} />,
            },
            {
                label: "InputRangeSelectOptionsProps",
                content: (
                    <ApiTable sections={InputRangeSelectOptionsPropsData} />
                ),
            },
        ]}
    />
);
