import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Masonry } from "src/masonry";
import { MasonryGridPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Masonry", content: <ArgTypes of={Masonry} /> },
            {
                label: "MasonryGridProps",
                content: <ApiTable sections={MasonryGridPropsData} />,
            },
        ]}
    />
);
