import { ArgTypes } from "@storybook/addon-docs/blocks";
import { PropTableTabs } from "stories/storybook-common";
import { OtpInput } from "src/otp-input";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "OtpInput", content: <ArgTypes of={OtpInput} /> }]}
    />
);
