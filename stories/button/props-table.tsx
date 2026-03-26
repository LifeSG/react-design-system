import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { ButtonBasePropsData, ButtonPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "ButtonProps",
                content: <ApiTable sections={ButtonPropsData} />,
            },
            {
                label: "ButtonBaseProps",
                content: <ApiTable sections={ButtonBasePropsData} />,
            },
        ]}
    />
);
