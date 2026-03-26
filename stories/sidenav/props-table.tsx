import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    SidenavDrawerItemPropsData,
    SidenavDrawerSubitemPropsData,
    SidenavGroupPropsData,
    SidenavItemPropsData,
    SidenavPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "SidenavProps",
                content: <ApiTable sections={SidenavPropsData} />,
            },
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
