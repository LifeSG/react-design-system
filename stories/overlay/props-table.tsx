import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { OverlayPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "OverlayProps",
                content: <ApiTable sections={OverlayPropsData} />,
            },
        ]}
    />
);
