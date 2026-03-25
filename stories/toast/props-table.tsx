import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Toast } from "src/toast";
import { ToastActionButtonPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Toast", content: <ArgTypes of={Toast} /> },
            {
                label: "ToastActionButtonProps",
                content: <ApiTable sections={ToastActionButtonPropsData} />,
            },
        ]}
    />
);
