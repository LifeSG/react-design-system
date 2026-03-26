import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    UneditableSectionItemPropsData,
    UneditableSectionItemSectionPropsData,
    UneditableSectionPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "UneditableSectionProps",
                content: <ApiTable sections={UneditableSectionPropsData} />,
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
