import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { FileUpload } from "src/file-upload";
import { FileInputPropsData, FileItemPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "FileUpload", content: <ArgTypes of={FileUpload} /> },
            {
                label: "FileItemProps",
                content: <ApiTable sections={FileItemPropsData} />,
            },
            {
                label: "FileInputProps",
                content: <ApiTable sections={FileInputPropsData} />,
            },
        ]}
    />
);
