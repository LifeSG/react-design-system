import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Sidenav } from "src/sidenav";
import {
    SidenavDrawerItemPropsData,
    SidenavDrawerSubitemPropsData,
    SidenavGroupPropsData,
    SidenavItemPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Sidenav", content: <ArgTypes of={Sidenav} /> },
            {
                label: "SidenavGroupProps",
                content: <ApiTable sections={SidenavGroupPropsData} />,
            },
            {
                label: "SidenavItemProps",
                content: <ApiTable sections={SidenavItemPropsData} />,
            },
            {
                label: "SidenavDrawerItemProps",
                content: <ApiTable sections={SidenavDrawerItemPropsData} />,
            },
            {
                label: "SidenavDrawerSubitemProps",
                content: <ApiTable sections={SidenavDrawerSubitemPropsData} />,
            },
        ]}
    />
);
