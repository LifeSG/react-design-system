import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { PhoneNumberInputPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "PhoneNumberInputProps",
                content: <ApiTable sections={PhoneNumberInputPropsData} />,
            },
        ]}
    />
);
