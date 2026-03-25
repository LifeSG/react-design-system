import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { V2_Layout } from "src/v2_layout";
import {
    V2_ColPropsData,
    V2_CommonLayoutPropsData,
    V2_ContainerPropsData,
    V2_ContentPropsData,
    V2_SectionPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "V2_Layout", content: <ArgTypes of={V2_Layout} /> },
            {
                label: "V2_CommonLayoutProps",
                content: <ApiTable sections={V2_CommonLayoutPropsData} />,
            },
            {
                label: "V2_SectionProps",
                content: <ApiTable sections={V2_SectionPropsData} />,
            },
            {
                label: "V2_ContainerProps",
                content: <ApiTable sections={V2_ContainerPropsData} />,
            },
            {
                label: "V2_ContentProps",
                content: <ApiTable sections={V2_ContentPropsData} />,
            },
            {
                label: "V2_ColProps",
                content: <ApiTable sections={V2_ColPropsData} />,
            },
        ]}
    />
);
