import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    ModalCardPropsData,
    ModalCloseButtonPropsData,
    ModalContentPropsData,
    ModalFooterPropsData,
    ModalV2PropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "ModalV2Props",
                content: <ApiTable sections={ModalV2PropsData} />,
            },
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
