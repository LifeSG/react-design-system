import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { AccordionItemPropsData, AccordionPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "AccordionProps",
                content: <ApiTable sections={AccordionPropsData} />,
            },
            {
                label: "AccordionItemProps",
                content: <ApiTable sections={AccordionItemPropsData} />,
            },
        ]}
    />
);
