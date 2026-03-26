import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { SingpassButtonPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "SingpassButtonProps",
                content: <ApiTable sections={SingpassButtonPropsData} />,
            },
        ]}
    />
);
