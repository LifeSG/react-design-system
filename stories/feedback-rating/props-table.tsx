import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { FeedbackRatingPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "FeedbackRatingProps",
                content: <ApiTable sections={FeedbackRatingPropsData} />,
            },
        ]}
    />
);
