import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { UnitNumberInputPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "UnitNumberInputProps",
                content: <ApiTable sections={UnitNumberInputPropsData} />,
            },
        ]}
    />
);
