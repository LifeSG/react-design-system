import { ApiTable, PropTableTabs } from "stories/storybook-common";
import {
    FileDownloadPropsData,
    FileItemDownloadPropsData,
} from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "FileDownloadProps",
                content: <ApiTable sections={FileDownloadPropsData} />,
            },
            {
                label: "FileItemDownloadProps",
                content: <ApiTable sections={FileItemDownloadPropsData} />,
            },
        ]}
    />
);
