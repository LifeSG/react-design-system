import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { ModalBoxPropsData, ModalPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "ModalProps",
                content: <ApiTable sections={ModalPropsData} />,
            },
            {
                label: "ModalBoxProps",
                content: <ApiTable sections={ModalBoxPropsData} />,
            },
        ]}
    />
);
