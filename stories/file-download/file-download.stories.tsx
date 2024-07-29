import type { Meta, StoryObj } from "@storybook/react";
import { FileDownload } from "src/file-download";

type Component = typeof FileDownload;

const meta: Meta<Component> = {
    title: "Modules/FileDownload",
    component: FileDownload,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <FileDownload
                fileName={"project-final-final.pdf"}
                fileSize={65}
                file={new Blob()}
            />
        );
    },
};

export const LoadingState: StoryObj<Component> = {
    render: () => {
        return (
            <FileDownload
                fileName={"project-final-final.pdf"}
                fileSize={65}
                file={new Blob()}
                loading={true}
            />
        );
    },
};
