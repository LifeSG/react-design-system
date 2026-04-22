import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    ColDivPropsData,
    ColPropsData,
    ContainerPropsData,
    ContentPropsData,
    SectionPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "ColDivProps",
                content: <ApiTable sections={ColDivPropsData} />,
            },
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
