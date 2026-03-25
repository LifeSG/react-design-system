import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { PopoverInlinePropsData } from "../generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "PopoverInline",
                content: <ApiTable sections={PopoverInlinePropsData} />,
            },
        ]}
    />
);
