import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    MaskAttributePropsData,
    MaskedInputPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "MaskedInputProps",
                content: <ApiTable sections={MaskedInputPropsData} />,
            },
            {
                label: "MaskAttributeProps",
                content: <ApiTable sections={MaskAttributePropsData} />,
            },
        ]}
    />
);
