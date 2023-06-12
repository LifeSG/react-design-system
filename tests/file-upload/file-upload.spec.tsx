import {
    act,
    fireEvent,
    getByTestId,
    render,
    screen,
    waitFor,
} from "@testing-library/react";
import { FileItemProps, FileUpload } from "../../src/file-upload";

describe("FileUpload", () => {
    beforeEach(() => {
        jest.resetAllMocks();
        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    describe("Basic render", () => {
        it("should render the title and description if specified", () => {
            render(
                <FileUpload
                    title={DEFAULT_TITLE}
                    description={DEFAULT_DESCRIPTION}
                />
            );

            expect(screen.getByText(DEFAULT_TITLE)).toBeInTheDocument();
            expect(screen.getByText(DEFAULT_DESCRIPTION)).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "Upload files" })
            ).toBeInTheDocument();
        });

        it("should render the warning banner if specified", () => {
            const warningBannerContent = (
                <div data-testid="custom-warning">
                    This is a warning.
                    <br />
                    This is the file limit.
                </div>
            );

            const rendered = render(
                <FileUpload warning={warningBannerContent} />
            );

            expect(rendered.getByTestId("custom-warning")).toBeInTheDocument();
        });

        it("should render the file items if specified", () => {
            const fileItems: FileItemProps[] = MOCK_FILE_ITEMS;

            const rendered = render(<FileUpload fileItems={fileItems} />);

            expect(screen.getByText("bugs-bunny.png")).toBeInTheDocument();
            expect(screen.getByText("3 KB")).toBeInTheDocument();
            expect(
                rendered.getByTestId("some-delete-button")
            ).toBeInTheDocument();
        });
    });

    describe("Upload", () => {
        let file: File;

        beforeEach(() => {
            file = new File(["(⌐□_□)"], "bugs-bunny.png", {
                type: "image/png",
            });
        });

        it("should fire the onChange callback when a file is uploaded", async () => {
            const onChangeCallback = jest.fn();

            const rendered = render(<FileUpload onChange={onChangeCallback} />);
            const dropzoneInput = rendered.getByTestId("dropzone-input");

            await waitFor(() =>
                fireEvent.change(dropzoneInput, {
                    target: { files: [file] },
                })
            );

            expect(onChangeCallback).toBeCalledWith([file]);
        });
    });

    describe("Delete", () => {
        it("should fire the onDelete callback when a file item's delete button is clicked", () => {
            const onDeleteCallback = jest.fn();

            const fileItems: FileItemProps[] = MOCK_FILE_ITEMS;

            const rendered = render(
                <FileUpload fileItems={fileItems} onDelete={onDeleteCallback} />
            );
            const deleteButton = rendered.getByTestId("some-delete-button");

            fireEvent.click(deleteButton);

            expect(onDeleteCallback).toBeCalledWith(MOCK_FILE_ITEMS[0]);
        });
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_TITLE = "File upload component";
const DEFAULT_DESCRIPTION = "This is a description";
const MOCK_FILE_ITEMS = [
    {
        id: "some",
        name: "bugs-bunny.png",
        type: "image/png",
        size: 3000,
        truncateText: false, // Test purposes
    },
];
