import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { MarkupPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "MarkupProps",
                content: <ApiTable sections={MarkupPropsData} />,
            },
        ]}
    />
);
