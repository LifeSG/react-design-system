import { fireEvent, render, screen } from "@testing-library/react";
import { FullscreenImageCarousel } from "../../src/fullscreen-image-carousel";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Fullscreen Image Carousel", () => {
    beforeEach(() => {
        jest.resetAllMocks();

        // have to mock as it's not implemented in jsdom
        window.HTMLElement.prototype.scrollIntoView = jest.fn();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render the component", () => {
        render(<FullscreenImageCarousel images={IMAGES} show={true} />);

        expect(screen.getByTestId("image-carousel-modal")).toBeInTheDocument();

        const slides = screen.getAllByTestId("slide-item");
        expect(slides.length).toBe(4);
        const thumbnails = screen.getAllByTestId("thumbnail-item");
        expect(thumbnails.length).toBe(4);
    });

    it("should display the correct slide current based on the initialIndex", () => {
        render(
            <FullscreenImageCarousel
                images={IMAGES}
                show={true}
                initialIndex={1}
            />
        );

        expect(screen.getByText("2/4")).toBeInTheDocument();
    });

    describe("Navigation", () => {
        it("should navigate to the correct slide when arrow buttons are clicked", async () => {
            render(<FullscreenImageCarousel images={IMAGES} show={true} />);
            expect(screen.getByText("1/4")).toBeInTheDocument();

            fireEvent.click(screen.getByTestId("forward-btn"));
            expect(screen.getByText("2/4")).toBeInTheDocument();

            fireEvent.click(screen.getByTestId("prev-btn"));
            expect(screen.getByText("1/4")).toBeInTheDocument();
        });

        it("should navigate to the correct slide when thumbnail is clicked", async () => {
            render(<FullscreenImageCarousel images={IMAGES} show={true} />);

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
