import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FileDownload } from "src/file-download";

const MOCK_FILE_ITEM = {
    id: "file-1",
    name: "sample.pdf",
    mimeType: "application/pdf",
    size: 1024,
    filePath: "/tmp/sample.pdf",
};

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

    describe("Thumbnail fallbacks", () => {
        it("should render the pdf icon for a pdf with no thumbnail", () => {
            render(
                <FileDownload
                    fileItems={[MOCK_FILE_ITEM]}
                    onDownload={jest.fn()}
                />
            );

            expect(screen.getByTestId("file-1-thumbnail")).toBeInTheDocument();
            expect(
                screen.getByTestId("file-1-thumbnail-image")
            ).toHaveAttribute(
                "src",
                "https://assets.life.gov.sg/react-design-system/img/upload/pdf.svg"
            );
        });

        it("should render the supplied thumbnail for a pdf that has one", () => {
            render(
                <FileDownload
                    fileItems={[
                        {
                            ...MOCK_FILE_ITEM,
                            thumbnailImageDataUrl: "data:image/png;base64,abc",
                        },
                    ]}
                    onDownload={jest.fn()}
                />
            );

            expect(
                screen.getByTestId("file-1-thumbnail-image")
            ).toHaveAttribute("src", "data:image/png;base64,abc");
        });

        it("should render no thumbnail slot for an image with no thumbnail", () => {
            render(
                <FileDownload
                    fileItems={[
                        {
                            ...MOCK_FILE_ITEM,
                            name: "photo.png",
                            mimeType: "image/png",
                        },
                    ]}
                    onDownload={jest.fn()}
                />
            );

            expect(
                screen.queryByTestId("file-1-thumbnail")
            ).not.toBeInTheDocument();
        });

        it("should render the supplied thumbnail for a non-image, non-pdf file that has one", () => {
            render(
                <FileDownload
                    fileItems={[
                        {
                            ...MOCK_FILE_ITEM,
                            name: "notes.doc",
                            mimeType: "application/msword",
                            thumbnailImageDataUrl: "data:image/png;base64,abc",
                        },
                    ]}
                    onDownload={jest.fn()}
                />
            );

            expect(
                screen.getByTestId("file-1-thumbnail-image")
            ).toHaveAttribute("src", "data:image/png;base64,abc");
        });

        it("should render no thumbnail slot for a non-image, non-pdf file", () => {
            render(
                <FileDownload
                    fileItems={[
                        {
                            ...MOCK_FILE_ITEM,
                            name: "notes.doc",
                            mimeType: "application/msword",
                        },
                    ]}
                    onDownload={jest.fn()}
                />
            );

            expect(
                screen.queryByTestId("file-1-thumbnail")
            ).not.toBeInTheDocument();
        });

        it("should still render the file name and download button when no thumbnail is rendered", () => {
            render(
                <FileDownload
                    fileItems={[
                        {
                            ...MOCK_FILE_ITEM,
                            name: "photo.png",
                            mimeType: "image/png",
                        },
                    ]}
                    onDownload={jest.fn()}
                />
            );

            expect(screen.getByText("photo.png")).toBeInTheDocument();
            expect(
                screen.getByTestId("file-1-download-button")
            ).toBeInTheDocument();
        });
    });

    describe("onClick", () => {
        it("should call onClick with the file item when the hidden card button is activated", () => {
            const onClick = jest.fn();
            const onDownload = jest.fn();

            render(
                <FileDownload
                    fileItems={[MOCK_FILE_ITEM]}
                    onDownload={onDownload}
                    onClick={onClick}
                />
            );

            fireEvent.click(screen.getByTestId("file-1-card-button"));

            expect(onClick).toHaveBeenCalledWith(MOCK_FILE_ITEM);
            expect(onDownload).not.toHaveBeenCalled();
        });

        it("should call onDownload exactly once when the download button is activated", () => {
            const onClick = jest.fn();
            const onDownload = jest.fn();

            render(
                <FileDownload
                    fileItems={[MOCK_FILE_ITEM]}
                    onDownload={onDownload}
                    onClick={onClick}
                />
            );

            fireEvent.click(screen.getByTestId("file-1-download-button"));

            expect(onDownload).toHaveBeenCalledTimes(1);
            expect(onClick).not.toHaveBeenCalled();
        });

        it("should call onDownload exactly once from the download button when onClick is absent", () => {
            const onDownload = jest.fn();

            render(
                <FileDownload
                    fileItems={[MOCK_FILE_ITEM]}
                    onDownload={onDownload}
                />
            );

            fireEvent.click(screen.getByTestId("file-1-download-button"));

            expect(onDownload).toHaveBeenCalledTimes(1);
        });

        it("should bubble the download click to ancestor listeners when onClick is absent", () => {
            const ancestorHandler = jest.fn();
            const onDownload = jest.fn();

            render(
                <div onClick={ancestorHandler}>
                    <FileDownload
                        fileItems={[MOCK_FILE_ITEM]}
                        onDownload={onDownload}
                    />
                </div>
            );

            fireEvent.click(screen.getByTestId("file-1-download-button"));

            expect(ancestorHandler).toHaveBeenCalledTimes(1);
        });

        it("should fall back to onDownload when the card is activated and onClick is absent", () => {
            const onDownload = jest.fn();

            render(
                <FileDownload
                    fileItems={[MOCK_FILE_ITEM]}
                    onDownload={onDownload}
                />
            );

            fireEvent.click(screen.getByText("sample.pdf"));

            expect(onDownload).toHaveBeenCalledWith(MOCK_FILE_ITEM);
        });

        it("should render the hidden card button only when onClick is provided", () => {
            const { rerender } = render(
                <FileDownload
                    fileItems={[MOCK_FILE_ITEM]}
                    onDownload={jest.fn()}
                />
            );

            expect(
                screen.queryByTestId("file-1-card-button")
            ).not.toBeInTheDocument();

            rerender(
                <FileDownload
                    fileItems={[MOCK_FILE_ITEM]}
                    onDownload={jest.fn()}
                    onClick={jest.fn()}
                />
            );

            expect(
                screen.getByTestId("file-1-card-button")
            ).toBeInTheDocument();
        });

        it("should call onClick exactly once from the hidden card button", () => {
            const onClick = jest.fn();

            render(
                <FileDownload
                    fileItems={[MOCK_FILE_ITEM]}
                    onDownload={jest.fn()}
                    onClick={onClick}
                />
            );

            fireEvent.click(screen.getByTestId("file-1-card-button"));

            expect(onClick).toHaveBeenCalledTimes(1);
        });

        it("should name the hidden card button with the file name by default", () => {
            render(
                <FileDownload
                    fileItems={[MOCK_FILE_ITEM]}
                    onDownload={jest.fn()}
                    onClick={jest.fn()}
                />
            );

            // An exact string match, so "download sample.pdf" is not a candidate
            expect(
                screen.getByRole("button", { name: "sample.pdf" })
            ).toBeInTheDocument();
        });

        it("should prefer the item's ariaLabel for the hidden card button", () => {
            render(
                <FileDownload
                    fileItems={[
                        { ...MOCK_FILE_ITEM, ariaLabel: "View sample.pdf" },
                    ]}
                    onDownload={jest.fn()}
                    onClick={jest.fn()}
                />
            );

            expect(
                screen.getByRole("button", { name: "View sample.pdf" })
            ).toBeInTheDocument();
            expect(
                screen.queryByRole("button", { name: "sample.pdf" })
            ).not.toBeInTheDocument();
        });

        it("should reach onClick from the keyboard", async () => {
            const user = userEvent.setup();
            const onClick = jest.fn();

            render(
                <FileDownload
                    fileItems={[MOCK_FILE_ITEM]}
                    onDownload={jest.fn()}
                    onClick={onClick}
                />
            );

            await user.tab();
            expect(screen.getByTestId("file-1-card-button")).toHaveFocus();

            await user.keyboard("{Enter}");
            expect(onClick).toHaveBeenCalledTimes(1);
        });

        it("should not call onClick or onDownload when the item is not ready", () => {
            const onClick = jest.fn();
            const onDownload = jest.fn();

            render(
                <FileDownload
                    fileItems={[{ ...MOCK_FILE_ITEM, ready: false }]}
                    onDownload={onDownload}
                    onClick={onClick}
                />
            );

            expect(screen.getByTestId("file-1-card-button")).toBeDisabled();

            fireEvent.click(screen.getByTestId("file-1-card-button"));
            fireEvent.click(screen.getByTestId("file-1-download-button"));

            expect(onClick).not.toHaveBeenCalled();
            expect(onDownload).not.toHaveBeenCalled();
        });
    });
});
