import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
            const fileItems: FileItemProps[] = [MOCK_NON_IMAGE_FILE];

            const rendered = render(<FileUpload fileItems={fileItems} />);

            expect(screen.getByText("bugs-bunny.pdf")).toBeInTheDocument();
            expect(screen.getByText("3 KB")).toBeInTheDocument();
            expect(
                rendered.getByTestId("some-delete-button")
            ).toBeInTheDocument();
        });

        it("should render the image files in its edit mode if no description is specified for the image", () => {
            const fileItems: FileItemProps[] = MOCK_FILE_ITEMS;

            const rendered = render(
                <FileUpload fileItems={fileItems} editableFileItems />
            );

            expect(screen.getByText("bugs-bunny.png")).toBeInTheDocument();
            expect(screen.getByText("3 KB")).toBeInTheDocument();
            expect(
                rendered.getByTestId("some-edit-display")
            ).toBeInTheDocument();
        });

        it("should render the image files with description in the display view while files without description to be in the edit mode", () => {
            const fileItems: FileItemProps[] = [
                MOCK_IMAGE_ITEM_WITH_DESCRIPTION,
                {
                    id: "another",
                    name: "donald-duck.png",
                    type: "image/png",
                    size: 4000,
                    truncateText: false, // Test purposes
                },
            ];

            const rendered = render(
                <FileUpload fileItems={fileItems} editableFileItems />
            );

            // First image to be in list view but with edit button
            expect(screen.getByText("bugs-bunny.png")).toBeInTheDocument();
            expect(screen.getByText("3 KB")).toBeInTheDocument();
            expect(
                rendered.getByTestId("some-edit-button")
            ).toBeInTheDocument();

            // Second image to be in edit view
            expect(screen.getByText("donald-duck.png")).toBeInTheDocument();
            expect(screen.getByText("4 KB")).toBeInTheDocument();
            expect(
                rendered.getByTestId("another-edit-display")
            ).toBeInTheDocument();
        });

        it("should not render image files in edit mode if progress of less than 1 is indicated", () => {
            const fileItems: FileItemProps[] = [
                { ...MOCK_IMAGE_ITEM, progress: 0.5 },
            ];

            const rendered = render(
                <FileUpload fileItems={fileItems} editableFileItems />
            );

            expect(
                rendered.queryByTestId("some-edit-display")
            ).not.toBeInTheDocument();
            expect(
                rendered.getByTestId("some-progress-bar")
            ).toBeInTheDocument();
        });

        it("should not render image files in edit mode if there is an error for the file item", () => {
            const fileItems: FileItemProps[] = [
                { ...MOCK_IMAGE_ITEM, errorMessage: "Woops!" },
            ];

            const rendered = render(
                <FileUpload fileItems={fileItems} editableFileItems />
            );

            expect(
                rendered.queryByTestId("some-edit-display")
            ).not.toBeInTheDocument();
            expect(screen.getAllByText("Woops!")).toHaveLength(2); // render 2 elements. For mobile and desktop
            expect(
                rendered.getByTestId("some-error-delete-button")
            ).toBeInTheDocument();
        });

        it("should render the thumbnail of a file if specified", () => {
            const MOCK_IMG_DATA_URL =
                "https://picsum.photos/seed/picsum/200/300";
            const fileItems: FileItemProps[] = [
                {
                    ...MOCK_IMAGE_ITEM_WITH_DESCRIPTION,
                    thumbnailImageDataUrl: MOCK_IMG_DATA_URL,
                },
            ];

            const rendered = render(
                <FileUpload fileItems={fileItems} editableFileItems />
            );

            expect(rendered.getByTestId("some-thumbnail")).toBeInTheDocument();
            expect(
                rendered.getByTestId("some-thumbnail-image")
            ).toHaveAttribute("src", MOCK_IMG_DATA_URL);
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

            const fileItems: FileItemProps[] = [MOCK_NON_IMAGE_FILE];

            const rendered = render(
                <FileUpload fileItems={fileItems} onDelete={onDeleteCallback} />
            );
            const deleteButton = rendered.getByTestId("some-delete-button");

            fireEvent.click(deleteButton);

            expect(onDeleteCallback).toBeCalledWith(MOCK_NON_IMAGE_FILE);
        });
    });

    describe("Edit", () => {
        it("should render the textarea, save and cancel buttons in edit mode, with the save button being disabled", () => {
            const fileItems: FileItemProps[] = MOCK_FILE_ITEMS;

            const rendered = render(
                <FileUpload fileItems={fileItems} editableFileItems />
            );

            expect(screen.getByText("Photo description")).toBeInTheDocument();
            expect(rendered.getByTestId("some-textarea")).toBeInTheDocument();

            const saveButton = rendered.getByTestId("some-save-button");
            const cancelButton = rendered.getByTestId("some-cancel-button");

            expect(saveButton).toBeInTheDocument();
            expect(saveButton).toBeDisabled();
            expect(cancelButton).toBeInTheDocument();
            expect(cancelButton).not.toBeDisabled();
        });

        it("should enable the save button if there is entry in the description textarea", () => {
            const fileItems: FileItemProps[] = MOCK_FILE_ITEMS;

            const rendered = render(
                <FileUpload fileItems={fileItems} editableFileItems />
            );

            const saveButton = rendered.getByTestId("some-save-button");
            expect(saveButton).toBeInTheDocument();
            expect(saveButton).toBeDisabled();

            // Enter value
            const textarea = rendered.getByTestId("some-textarea");
            fireEvent.change(textarea, { target: { value: "Hello world" } });
            expect(saveButton).not.toBeDisabled();
        });

        it("should delete the file item if the cancel button is clicked on a new upload", () => {
            const fileItems: FileItemProps[] = MOCK_FILE_ITEMS;
            const mockFn = jest.fn();

            const rendered = render(
                <FileUpload
                    fileItems={fileItems}
                    editableFileItems
                    onDelete={mockFn}
                />
            );

            expect(screen.getByText("bugs-bunny.png")).toBeInTheDocument();

            const cancelButton = rendered.getByTestId("some-cancel-button");
            fireEvent.click(cancelButton);

            expect(mockFn).toBeCalledWith(MOCK_IMAGE_ITEM);
        });

        it("should return the file item with the description via onEdit upon entering into the textarea", () => {
            const fileItems: FileItemProps[] = [MOCK_IMAGE_ITEM];
            const mockFn = jest.fn();

            const rendered = render(
                <FileUpload
                    fileItems={fileItems}
                    editableFileItems
                    onEdit={mockFn}
                />
            );

            const textarea = rendered.getByTestId("some-textarea");
            fireEvent.change(textarea, { target: { value: "Hello world" } });
            fireEvent.click(rendered.getByTestId("some-save-button"));

            expect(mockFn).toBeCalledWith({
                ...MOCK_IMAGE_ITEM,
                description: "Hello world",
            });
        });
    });

    describe("Sort", () => {
        it("should render the drag handles for the items if they are sortable", () => {
            const fileItems: FileItemProps[] = [
                {
                    ...MOCK_IMAGE_ITEM_WITH_DESCRIPTION,
                    id: "imageFile",
                },
                MOCK_NON_IMAGE_FILE,
            ];

            const rendered = render(
                <FileUpload fileItems={fileItems} editableFileItems sortable />
            );

            expect(
                rendered.getByTestId("imageFile-drag-handle")
            ).toBeInTheDocument();
            expect(
                rendered.getByTestId("some-drag-handle")
            ).toBeInTheDocument();
        });

        it("should not render the drag handle if there are items in edit mode", () => {
            const fileItems: FileItemProps[] = [
                {
                    ...MOCK_IMAGE_ITEM,
                    id: "imageFile",
                },
                MOCK_NON_IMAGE_FILE,
            ];

            const rendered = render(
                <FileUpload fileItems={fileItems} editableFileItems sortable />
            );

            expect(
                rendered.queryByTestId("imageFile-drag-handle")
            ).not.toBeInTheDocument();
            expect(
                rendered.queryByTestId("some-drag-handle")
            ).not.toBeInTheDocument();
        });
    });

    describe("Readonly", () => {
        it("should not render the action buttons if the component is in readOnly mode", () => {
            const fileItems: FileItemProps[] = [
                MOCK_IMAGE_ITEM_WITH_DESCRIPTION,
                {
                    ...MOCK_NON_IMAGE_FILE,
                    errorMessage: "Some error",
                    id: "another",
                },
            ];

            const rendered = render(
                <FileUpload
                    fileItems={fileItems}
                    readOnly
                    editableFileItems
                    sortable
                />
            );

            const { queryByTestId } = rendered;
            const uploadButton = screen.queryByRole("button", {
                name: "Upload files",
            });

            expect(queryByTestId("some-delete-button")).not.toBeInTheDocument();
            expect(
                queryByTestId("some-editable-button")
            ).not.toBeInTheDocument();
            expect(queryByTestId("some-drag-handle")).not.toBeInTheDocument();
            expect(
                queryByTestId("another-delete-button")
            ).not.toBeInTheDocument();
            expect(
                queryByTestId("another-drag-handle")
            ).not.toBeInTheDocument();
            expect(
                queryByTestId("another-error-delete-button")
            ).not.toBeInTheDocument();
            expect(uploadButton).not.toBeInTheDocument();
        });
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_TITLE = "File upload component";
const DEFAULT_DESCRIPTION = "This is a description";
const MOCK_IMAGE_ITEM = {
    id: "some",
    name: "bugs-bunny.png",
    type: "image/png",
    size: 3000,
    truncateText: false, // Test purposes
};
const MOCK_IMAGE_ITEM_WITH_DESCRIPTION = {
    ...MOCK_IMAGE_ITEM,
    description: "Some description",
};

const MOCK_FILE_ITEMS = [MOCK_IMAGE_ITEM];
const MOCK_NON_IMAGE_FILE = {
    id: "some",
    name: "bugs-bunny.pdf",
    type: "application/pdf",
    size: 3000,
    truncateText: false, // Test purposes
};
