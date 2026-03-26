import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { ButtonWithIconPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "ButtonWithIconProps",
                content: <ApiTable sections={ButtonWithIconPropsData} />,
            },
        ]}
    />
);
