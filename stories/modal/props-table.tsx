import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { Modal } from "src/modal";
import { ModalBoxPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "Modal", content: <ArgTypes of={Modal} /> },
            {
                label: "ModalBoxProps",
                content: <ApiTable sections={ModalBoxPropsData} />,
            },
        ]}
    />
);
