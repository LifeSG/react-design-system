import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Toggle } from "src/toggle";
import { ToggleCompositeSectionPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Toggle", content: <ArgTypes of={Toggle} /> },
            {
                label: "ToggleCompositeSectionProps",
                content: (
                    <ApiTable sections={ToggleCompositeSectionPropsData} />
                ),
            },
        ]}
    />
);
