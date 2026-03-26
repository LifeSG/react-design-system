import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    TypographyLinkPropsData,
    TypographyPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "TypographyProps",
                content: <ApiTable sections={TypographyPropsData} />,
            },
            {
                label: "TypographyLinkProps",
                content: <ApiTable sections={TypographyLinkPropsData} />,
            },
        ]}
    />
);
