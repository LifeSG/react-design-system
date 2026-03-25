import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { ModalV2 } from "src/modal-v2";
import {
    ModalCardPropsData,
    ModalCloseButtonPropsData,
    ModalContentPropsData,
    ModalFooterPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "ModalV2", content: <ArgTypes of={ModalV2} /> },
            {
                label: "ModalCardProps",
                content: <ApiTable sections={ModalCardPropsData} />,
            },
            {
                label: "ModalCloseButtonProps",
                content: <ApiTable sections={ModalCloseButtonPropsData} />,
            },
            {
                label: "ModalContentProps",
                content: <ApiTable sections={ModalContentPropsData} />,
            },
            {
                label: "ModalFooterProps",
                content: <ApiTable sections={ModalFooterPropsData} />,
            },
        ]}
    />
);
