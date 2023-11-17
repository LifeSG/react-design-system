import { fireEvent, render, screen } from "@testing-library/react";
import { FullscreenImageCarousel } from "../../src";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Fullscreen Image Carousel", () => {
    beforeEach(() => {
        jest.resetAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render the component", () => {
        render(<FullscreenImageCarousel images={IMAGES} show={true} />);
        expect(screen.getByTestId("image-carousel-modal")).toBeInTheDocument();
    });
    it("should render images", () => {
        render(<FullscreenImageCarousel images={IMAGES} show={true} />);
        {
            const elements = document.getElementsByClassName("carousel-image");
            expect(elements.length).toBe(4);
        }
        {
            const elements = document.getElementsByClassName("thumbnail-image");
            expect(elements.length).toBe(4);
        }
    });
    describe("Text should change when change slides index", () => {
        it("when click arrow button", async () => {
            render(<FullscreenImageCarousel images={IMAGES} show={true} />);
            expect(screen.getByText("1/4")).toBeInTheDocument();
            fireEvent.click(screen.getByTestId("forward-btn"));
            expect(screen.getByText("2/4")).toBeInTheDocument();
            fireEvent.click(screen.getByTestId("prev-btn"));
            expect(screen.getByText("1/4")).toBeInTheDocument();
        });
        it("when click thumbnail image", async () => {
            render(<FullscreenImageCarousel images={IMAGES} show={true} />);
            const elements = document.getElementsByClassName("thumbnail-image");
            console.log(elements);

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
    "https://images.pexels.com/photos/206893/pexels-photo-206893.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG",
    "https://plus.unsplash.com/premium_photo-1667423049497-291580083466?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519557663006-e0423f3a092b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
