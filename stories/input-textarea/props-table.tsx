import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { TextareaPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "TextareaProps",
                content: <ApiTable sections={TextareaPropsData} />,
            },
        ]}
    />
);
