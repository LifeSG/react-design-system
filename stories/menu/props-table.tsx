import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    MenuContentPropsData,
    MenuItemPropsData,
    MenuLinkPropsData,
    MenuPropsData,
    MenuSectionPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "MenuProps",
                content: <ApiTable sections={MenuPropsData} />,
            },
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
