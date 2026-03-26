import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    InputSelectOptionsPropsData,
    InputSelectPropsData,
    InputSelectSharedPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "InputSelectProps",
                content: <ApiTable sections={InputSelectPropsData} />,
            },
            {
                label: "InputSelectOptionsProps",
                content: <ApiTable sections={InputSelectOptionsPropsData} />,
            },
            {
                label: "InputSelectSharedProps",
                content: <ApiTable sections={InputSelectSharedPropsData} />,
            },
        ]}
    />
);
