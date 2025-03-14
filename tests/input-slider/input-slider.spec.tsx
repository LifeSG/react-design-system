import { fireEvent, render, screen } from "@testing-library/react";
import { InputSlider } from "src/input-slider";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("InputSlider", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render default component", () => {
        render(<InputSlider />);

        expect(screen.queryByRole("slider")).toBeInTheDocument();
        expect(screen.queryByTestId("slider-thumb-0")).toHaveAttribute(
            "aria-valuenow",
            "0"
        );
    });

    it("should render component with value", () => {
        render(<InputSlider min={1} max={10} value={5} />);

        expect(screen.queryByTestId("slider-thumb-0")).toHaveAttribute(
            "aria-valuenow",
            "5"
        );
    });

    it("should handle change", () => {
        const mockChange = jest.fn();
        render(<InputSlider onChange={mockChange} />);

        const slider = screen.getByTestId("slider-track-0").parentElement!;
        fireEvent.mouseDown(slider);

        expect(mockChange).toHaveBeenCalledWith(0);
    });

    describe("slider labels", () => {
        it("should render min and max labels", () => {
            render(<InputSlider showSliderLabels />);

            expect(screen.queryByText("0")).toBeInTheDocument();
            expect(screen.queryByText("100")).toBeInTheDocument();
        });

        it("should render min and max labels with prefix", () => {
            render(<InputSlider showSliderLabels sliderLabelPrefix="test" />);

            expect(screen.queryByText("test0")).toBeInTheDocument();
            expect(screen.queryByText("test100")).toBeInTheDocument();
        });

        it("should render min and max labels with suffix", () => {
            render(<InputSlider showSliderLabels sliderLabelSuffix="test" />);

            expect(screen.queryByText("0test")).toBeInTheDocument();
            expect(screen.queryByText("100test")).toBeInTheDocument();
        });

        it("should render min and max labels with custom render function", () => {
            render(
                <InputSlider
                    showSliderLabels
                    renderSliderLabel={(val) => <div>${val}.00</div>}
                />
            );

            expect(screen.queryByText("$0.00")).toBeInTheDocument();
            expect(screen.queryByText("$100.00")).toBeInTheDocument();
        });
    });
});
