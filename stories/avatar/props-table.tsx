import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { AvatarPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "AvatarProps",
                content: <ApiTable sections={AvatarPropsData} />,
            },
        ]}
    />
);
