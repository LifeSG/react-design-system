import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { FooterLinkPropsData, FooterPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "FooterProps",
                content: <ApiTable sections={FooterPropsData} />,
            },
            {
                label: "FooterLinkProps",
                content: <ApiTable sections={FooterLinkPropsData} />,
            },
        ]}
    />
);
