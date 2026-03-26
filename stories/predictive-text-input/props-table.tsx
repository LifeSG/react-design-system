import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { PredictiveTextInputPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "PredictiveTextInputProps",
                content: <ApiTable sections={PredictiveTextInputPropsData} />,
            },
        ]}
    />
);
