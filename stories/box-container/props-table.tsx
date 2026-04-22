import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { BoxContainerPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "BoxContainerProps",
                content: <ApiTable sections={BoxContainerPropsData} />,
            },
        ]}
    />
);
