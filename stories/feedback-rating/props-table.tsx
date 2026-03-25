import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { FeedbackRating } from "src/feedback-rating";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "FeedbackRating",
                content: <ArgTypes of={FeedbackRating} />,
            },
        ]}
    />
);
