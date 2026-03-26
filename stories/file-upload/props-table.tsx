import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    FileInputPropsData,
    FileItemPropsData,
    FileUploadPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "FileUploadProps",
                content: <ApiTable sections={FileUploadPropsData} />,
            },
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
