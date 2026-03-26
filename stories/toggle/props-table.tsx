import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    ToggleCompositeSectionPropsData,
    TogglePropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "ToggleProps",
                content: <ApiTable sections={TogglePropsData} />,
            },
            {
                label: "ToggleCompositeSectionProps",
                content: (
                    <ApiTable sections={ToggleCompositeSectionPropsData} />
                ),
            },
        ]}
    />
);
