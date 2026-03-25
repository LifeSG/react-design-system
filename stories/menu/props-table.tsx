import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Menu } from "src/menu";
import {
    MenuContentPropsData,
    MenuItemPropsData,
    MenuLinkPropsData,
    MenuSectionPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Menu", content: <ArgTypes of={Menu} /> },
            {
                label: "MenuContentProps",
                content: <ApiTable sections={MenuContentPropsData} />,
            },
            {
                label: "MenuSectionProps",
                content: <ApiTable sections={MenuSectionPropsData} />,
            },
            {
                label: "MenuItemProps",
                content: <ApiTable sections={MenuItemPropsData} />,
            },
            {
                label: "MenuLinkProps",
                content: <ApiTable sections={MenuLinkPropsData} />,
            },
        ]}
    />
);
