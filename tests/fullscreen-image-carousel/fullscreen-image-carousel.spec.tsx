import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FullscreenImageCarousel } from "../../src/fullscreen-image-carousel";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Fullscreen Image Carousel", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        // have to mock as it's not implemented in jsdom
        window.HTMLElement.prototype.scrollIntoView = jest.fn();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render the component", () => {
        render(<FullscreenImageCarousel items={IMAGES} show={true} />);

        expect(screen.getByTestId("image-carousel-modal")).toBeInTheDocument();
        expect(screen.queryByTestId("delete-btn")).not.toBeInTheDocument();

        const slides = screen.getAllByTestId("slide-item");
        expect(slides.length).toBe(4);
        const thumbnails = screen.getAllByTestId("thumbnail-item");
        expect(thumbnails.length).toBe(4);
    });

    it("should render the delete button and call onDelete with the current item and index", () => {
        const onDelete = jest.fn();

        render(
            <FullscreenImageCarousel
                items={IMAGES}
                show={true}
                onDelete={onDelete}
            />
        );

        expect(screen.getByTestId("delete-btn")).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("forward-btn"));
        expect(screen.getByText("2/4")).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("delete-btn"));

        expect(onDelete).toHaveBeenCalledWith(IMAGES[1], 1);
    });

    it("should display the correct slide current based on the initialIndex", () => {
        render(
            <FullscreenImageCarousel
                items={IMAGES}
                show={true}
                initialActiveItemIndex={1}
            />
        );

        expect(screen.getByText("2/4")).toBeInTheDocument();
    });

    it("should clamp the current slide when items shrink", async () => {
        const { rerender } = render(
            <FullscreenImageCarousel
                items={IMAGES}
                show={true}
                initialActiveItemIndex={3}
            />
        );

        expect(screen.getByText("4/4")).toBeInTheDocument();

        rerender(
            <FullscreenImageCarousel
                items={IMAGES.slice(0, 3)}
                show={true}
                initialActiveItemIndex={3}
            />
        );

        await waitFor(() => {
            expect(screen.getByText("3/3")).toBeInTheDocument();
        });
    });

    describe("Navigation", () => {
        it("should navigate to the correct slide when arrow buttons are clicked", async () => {
            render(<FullscreenImageCarousel items={IMAGES} show={true} />);
            expect(screen.getByText("1/4")).toBeInTheDocument();

            fireEvent.click(screen.getByTestId("forward-btn"));
            expect(screen.getByText("2/4")).toBeInTheDocument();

            fireEvent.click(screen.getByTestId("prev-btn"));
            expect(screen.getByText("1/4")).toBeInTheDocument();
        });

        it("should navigate to the correct slide when thumbnail is clicked", async () => {
            render(<FullscreenImageCarousel items={IMAGES} show={true} />);

            const elements = screen.getAllByTestId("thumbnail-item");

            fireEvent.click(elements[1]);
            expect(screen.getByText("2/4")).toBeInTheDocument();

            fireEvent.click(elements[0]);
            expect(screen.getByText("1/4")).toBeInTheDocument();
        });
    });

    describe("Custom content (renderContent)", () => {
        it("should render custom content from renderContent", () => {
            render(
                <FullscreenImageCarousel
                    items={MIXED_ITEMS}
                    show={true}
                    initialActiveItemIndex={1}
                />
            );

            expect(
                screen.getByTestId("custom-slide-content")
            ).toBeInTheDocument();
        });

        it("should hide magnifier button when current item is custom", () => {
            render(
                <FullscreenImageCarousel
                    items={MIXED_ITEMS}
                    show={true}
                    initialActiveItemIndex={1}
                />
            );

            expect(screen.queryByLabelText("Zoom in")).not.toBeInTheDocument();
        });

        it("should show magnifier button when current item is an image", () => {
            render(
                <FullscreenImageCarousel
                    items={MIXED_ITEMS}
                    show={true}
                    initialActiveItemIndex={0}
                />
            );

            expect(screen.getByLabelText("Zoom in")).toBeInTheDocument();
        });

        it("should render placeholder thumbnail when custom item has no thumbnailSrc", () => {
            render(<FullscreenImageCarousel items={MIXED_ITEMS} show={true} />);

            const thumbnails = screen.getAllByTestId("thumbnail-item");
            // The placeholder renders an SVG icon instead of an <img>,
            // so querying for img elements should return none
            const imgs = thumbnails[1].querySelectorAll("img");
            expect(imgs.length).toBe(0);
        });

        it("should use src as fallback thumbnail when image item has no thumbnailSrc", async () => {
            const OriginalImage = global.Image;
            // Simulate image load completing in jsdom (onload never fires natively)
            (global as any).Image = class {
                width = 100;
                height = 100;
                onload: (() => void) | null = null;
                set src(_: string) {
                    Promise.resolve().then(() => this.onload?.());
                }
            };

            render(
                <FullscreenImageCarousel
                    items={IMAGES_WITHOUT_THUMBNAIL}
                    show={true}
                />
            );

            await waitFor(() => {
                const img = screen
                    .getAllByTestId("thumbnail-item")[0]
                    .querySelector("img");
                expect(img?.getAttribute("src")).toBe(
                    "https://picsum.photos/id/157/1600/900"
                );
            });

            global.Image = OriginalImage;
        });

        it("should not render custom content for non-adjacent slides", () => {
            render(
                <FullscreenImageCarousel
                    items={SPACED_ITEMS}
                    show={true}
                    initialActiveItemIndex={0}
                />
            );

            expect(
                screen.queryByTestId("custom-slide-content")
            ).not.toBeInTheDocument();
        });
    });

    describe("itemLabel aria-labels", () => {
        it("should use generic wording when any item has itemLabel", () => {
            render(<FullscreenImageCarousel items={MIXED_ITEMS} show={true} />);

            expect(screen.getByLabelText("Carousel")).toBeInTheDocument();
            expect(screen.getByLabelText("Close carousel")).toBeInTheDocument();
            expect(screen.getByLabelText("Previous item")).toBeInTheDocument();
            expect(screen.getByLabelText("Next item")).toBeInTheDocument();
        });

        it("should use image-specific wording when no item has itemLabel", () => {
            render(<FullscreenImageCarousel items={IMAGES} show={true} />);

            expect(screen.getByLabelText("Image carousel")).toBeInTheDocument();
            expect(
                screen.getByLabelText("Close image carousel")
            ).toBeInTheDocument();
            expect(screen.getByLabelText("Previous image")).toBeInTheDocument();
            expect(screen.getByLabelText("Next image")).toBeInTheDocument();
        });

        it("should use per-item itemLabel for the delete button", () => {
            render(
                <FullscreenImageCarousel
                    items={MIXED_ITEMS}
                    show={true}
                    initialActiveItemIndex={1}
                    onDelete={jest.fn()}
                />
            );

            expect(screen.getByLabelText("Delete PDF")).toBeInTheDocument();
        });

        it("should default delete label to 'image' when no itemLabel", () => {
            render(
                <FullscreenImageCarousel
                    items={MIXED_ITEMS}
                    show={true}
                    initialActiveItemIndex={0}
                    onDelete={jest.fn()}
                />
            );

            expect(screen.getByLabelText("Delete image")).toBeInTheDocument();
        });
    });

    describe("File info bar", () => {
        it("should render fileName and fileSize when provided on the current item", () => {
            render(
                <FullscreenImageCarousel
                    items={IMAGES_WITH_FILE_INFO}
                    show={true}
                />
            );

            expect(screen.getByTestId("file-info-bar")).toBeInTheDocument();
            expect(screen.getByTestId("file-info-name")).toHaveTextContent(
                "photo-a.jpg"
            );
            expect(screen.getByTestId("file-info-size")).toHaveTextContent(
                "1.2 MB"
            );
        });

        it("should not render file info bar when no item has fileName or fileSize", () => {
            render(<FullscreenImageCarousel items={IMAGES} show={true} />);

            expect(
                screen.queryByTestId("file-info-bar")
            ).not.toBeInTheDocument();
        });

        it("should render fileName without fileSize for a slide that has no fileSize", () => {
            render(
                <FullscreenImageCarousel
                    items={IMAGES_WITH_FILE_INFO}
                    show={true}
                    initialActiveItemIndex={3}
                />
            );

            expect(screen.getByTestId("file-info-bar")).toBeInTheDocument();
            expect(screen.getByTestId("file-info-name")).toHaveTextContent(
                "photo-d.jpg"
            );
            expect(
                screen.queryByTestId("file-info-size")
            ).not.toBeInTheDocument();
        });

        it("should update the file info bar when navigating to a different slide", () => {
            render(
                <FullscreenImageCarousel
                    items={IMAGES_WITH_FILE_INFO}
                    show={true}
                />
            );

            expect(screen.getByTestId("file-info-name")).toHaveTextContent(
                "photo-a.jpg"
            );

            fireEvent.click(screen.getByTestId("forward-btn"));

            expect(screen.getByTestId("file-info-name")).toHaveTextContent(
                "photo-b.jpg"
            );
            expect(screen.getByTestId("file-info-size")).toHaveTextContent(
                "840 KB"
            );
        });
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const IMAGES = [
    { src: "https://picsum.photos/id/157/1600/900" },
    { src: "https://picsum.photos/id/163/900/300" },
    { src: "https://picsum.photos/id/369/1000/1000" },
    { src: "https://picsum.photos/id/445/300/300" },
];

const MIXED_ITEMS = [
    { src: "https://picsum.photos/id/157/1600/900" },
    {
        type: "custom" as const,
        itemLabel: "PDF",
        renderContent: () => <div data-testid="custom-slide-content">PDF</div>,
    },
];

// Custom item at index 3 with images padding both ends, so index 0 is not adjacent
const SPACED_ITEMS = [
    { src: "https://picsum.photos/id/157/1600/900" },
    { src: "https://picsum.photos/id/163/900/300" },
    { src: "https://picsum.photos/id/369/1000/1000" },
    {
        type: "custom" as const,
        itemLabel: "PDF",
        renderContent: () => <div data-testid="custom-slide-content">PDF</div>,
    },
    { src: "https://picsum.photos/id/445/300/300" },
];

const IMAGES_WITHOUT_THUMBNAIL = [
    { src: "https://picsum.photos/id/157/1600/900" },
    {
        src: "https://picsum.photos/id/163/900/300",
        thumbnailSrc: "https://picsum.photos/id/163/100/100",
    },
];

const IMAGES_WITH_FILE_INFO = [
    {
        src: "https://picsum.photos/id/157/1600/900",
        fileName: "photo-a.jpg",
        fileSize: "1.2 MB",
    },
    {
        src: "https://picsum.photos/id/163/900/300",
        fileName: "photo-b.jpg",
        fileSize: "840 KB",
    },
    {
        src: "https://picsum.photos/id/369/1000/1000",
        fileName: "photo-c.jpg",
        fileSize: "500 KB",
    },
    {
        src: "https://picsum.photos/id/445/300/300",
        fileName: "photo-d.jpg",
    },
];
