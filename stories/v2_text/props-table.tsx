import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { V2_TextLinkPropsData, V2_TextPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "V2_TextProps",
                content: <ApiTable sections={V2_TextPropsData} />,
            },
            {
                label: "V2_TextLinkProps",
                content: <ApiTable sections={V2_TextLinkPropsData} />,
            },
        ]}
    />
);
