import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Button } from "src/button";
import { ButtonBasePropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Button", content: <ArgTypes of={Button} /> },
            {
                label: "ButtonBaseProps",
                content: <ApiTable sections={ButtonBasePropsData} />,
            },
        ]}
    />
);
