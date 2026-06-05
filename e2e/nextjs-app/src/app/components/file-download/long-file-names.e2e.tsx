"use client";

import { FileDownload } from "@lifesg/react-design-system/file-download";

const LONG_NAME_FILE_ITEMS = [
    {
        id: "file-long-1",
        name: "this-is-a-very-long-file-name-that-should-be-truncated-after-two-lines-on-mobile-viewport.pdf",
        mimeType: "application/pdf",
        size: 2621440,
        filePath: "/files/long-name.pdf",
    },
    {
        id: "file-long-2",
        name: "another extremely long file name with spaces that will exceed the available width and trigger line clamping behaviour in the component.docx",
        mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        size: 524288,
        filePath: "/files/long-name.docx",
    },
    {
        id: "file-long-3",
        name: "short.xlsx",
        mimeType:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        size: 102400,
        filePath: "/files/short.xlsx",
    },
];

export default function Story() {
    return (
        <div className="story-background">
            <FileDownload
                data-testid="file-download"
                title="Long file names"
                description="Files with long names to test truncation"
                fileItems={LONG_NAME_FILE_ITEMS}
                onDownload={() => {}}
            />
        </div>
    );
}
