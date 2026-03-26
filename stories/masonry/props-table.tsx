import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { MasonryGridPropsData, MasonryTilePropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "MasonryTileProps",
                content: <ApiTable sections={MasonryTilePropsData} />,
            },
            {
                label: "MasonryGridProps",
                content: <ApiTable sections={MasonryGridPropsData} />,
            },
        ]}
    />
);
