import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Typography } from "src/typography";
import { TypographyLinkPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Typography", content: <ArgTypes of={Typography} /> },
            {
                label: "TypographyLinkProps",
                content: <ApiTable sections={TypographyLinkPropsData} />,
            },
        ]}
    />
);
