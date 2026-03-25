import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { UneditableSection } from "src/uneditable-section";
import {
    UneditableSectionItemPropsData,
    UneditableSectionItemSectionPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "UneditableSection",
                content: <ArgTypes of={UneditableSection} />,
            },
            {
                label: "UneditableSectionItemProps",
                content: <ApiTable sections={UneditableSectionItemPropsData} />,
            },
            {
                label: "UneditableSectionItemSectionProps",
                content: (
                    <ApiTable
                        sections={UneditableSectionItemSectionPropsData}
                    />
                ),
            },
        ]}
    />
);
