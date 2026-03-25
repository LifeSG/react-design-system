import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { ErrorDisplay } from "src/error-display";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "ErrorDisplay", content: <ArgTypes of={ErrorDisplay} /> },
        ]}
    />
);
