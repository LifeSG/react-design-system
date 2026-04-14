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
