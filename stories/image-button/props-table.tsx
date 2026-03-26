import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { ImageButtonPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "ImageButtonProps",
                content: <ApiTable sections={ImageButtonPropsData} />,
            },
        ]}
    />
);
