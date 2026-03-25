import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Accordion } from "src/accordion";
import { AccordionItemPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Accordion", content: <ArgTypes of={Accordion} /> },
            {
                label: "AccordionItemProps",
                content: <ApiTable sections={AccordionItemPropsData} />,
            },
        ]}
    />
);
