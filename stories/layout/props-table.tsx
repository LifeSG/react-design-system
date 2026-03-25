import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Layout } from "src/layout";
import {
    ColPropsData,
    ContainerPropsData,
    ContentPropsData,
    SectionPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Layout", content: <ArgTypes of={Layout} /> },
            {
                label: "ContainerProps",
                content: <ApiTable sections={ContainerPropsData} />,
            },
            {
                label: "SectionProps",
                content: <ApiTable sections={SectionPropsData} />,
            },
            {
                label: "ContentProps",
                content: <ApiTable sections={ContentPropsData} />,
            },
            {
                label: "ColProps",
                content: <ApiTable sections={ColPropsData} />,
            },
        ]}
    />
);
