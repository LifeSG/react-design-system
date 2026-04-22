import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { CardPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "CardProps",
                content: <ApiTable sections={CardPropsData} />,
            },
        ]}
    />
);
