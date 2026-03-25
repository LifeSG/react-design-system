import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Footer } from "src/footer";
import { FooterLinkPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Footer", content: <ArgTypes of={Footer} /> },
            {
                label: "FooterLinkProps",
                content: <ApiTable sections={FooterLinkPropsData} />,
            },
        ]}
    />
);
