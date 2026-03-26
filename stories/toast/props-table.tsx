import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { ToastActionButtonPropsData, ToastPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "ToastProps",
                content: <ApiTable sections={ToastPropsData} />,
            },
            {
                label: "ToastActionButtonProps",
                content: <ApiTable sections={ToastActionButtonPropsData} />,
            },
        ]}
    />
);
