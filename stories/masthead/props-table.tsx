import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { MastheadPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "MastheadProps",
                content: <ApiTable sections={MastheadPropsData} />,
            },
        ]}
    />
);
