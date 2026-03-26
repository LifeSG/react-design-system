import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { OtpInputPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "OtpInputProps",
                content: <ApiTable sections={OtpInputPropsData} />,
            },
        ]}
    />
);
