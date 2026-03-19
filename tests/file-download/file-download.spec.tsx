import { fireEvent, render, screen } from "@testing-library/react";
import { FileDownload } from "src/file-download";

jest.mock("react-responsive", () => ({
    useMediaQuery: jest.fn().mockReturnValue(false),
}));

describe("FileDownload", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should render loading spinner while download is in progress", () => {
        const onDownload = jest.fn(() => new Promise<void>(() => undefined));

        render(
            <FileDownload
                fileItems={[MOCK_FILE_ITEM]}
                onDownload={onDownload}
            />
        );

        fireEvent.click(screen.getByTestId("file-1-download-button"));

        expect(onDownload).toHaveBeenCalledWith(MOCK_FILE_ITEM);
        expect(
            screen.getByTestId("component-loading-spinner")
        ).toBeInTheDocument();
    });
});

const MOCK_FILE_ITEM = {
    id: "file-1",
    name: "sample.pdf",
    mimeType: "application/pdf",
    size: 1024,
    filePath: "/tmp/sample.pdf",
};
