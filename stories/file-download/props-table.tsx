import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { FileDownload } from "src/file-download";
import { FileItemDownloadPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            { label: "FileDownload", content: <ArgTypes of={FileDownload} /> },
            {
                label: "FileItemDownloadProps",
                content: <ApiTable sections={FileItemDownloadPropsData} />,
            },
        ]}
    />
);
