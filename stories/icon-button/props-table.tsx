import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { IconButtonPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "IconButtonProps",
                content: <ApiTable sections={IconButtonPropsData} />,
            },
        ]}
    />
);
