import { fireEvent, render, screen } from "@testing-library/react";
import { InputRangeSlider } from "src/input-range-slider";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("InputRangeSlider", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render default component", () => {
        render(<InputRangeSlider />);

        expect(screen.queryAllByRole("slider")).toHaveLength(2);
        expect(screen.queryByTestId("slider-thumb-0")).toHaveAttribute(
            "aria-valuenow",
            "0"
        );
        expect(screen.queryByTestId("slider-thumb-1")).toHaveAttribute(
            "aria-valuenow",
            "1"
        );
    });

    it("should render component with value", () => {
        render(<InputRangeSlider min={1} max={10} value={[5, 8]} />);

        expect(screen.queryByTestId("slider-thumb-0")).toHaveAttribute(
            "aria-valuenow",
            "5"
        );
        expect(screen.queryByTestId("slider-thumb-1")).toHaveAttribute(
            "aria-valuenow",
            "8"
        );
    });

    it("should handle change", () => {
        const mockChange = jest.fn();
        render(<InputRangeSlider onChange={mockChange} numOfThumbs={2} />);

        const thumb = screen.getByTestId("slider-track-0").parentElement!;
        fireEvent.mouseDown(thumb);

        expect(mockChange).toHaveBeenCalledWith([0, 1]);
    });

    describe("slider labels", () => {
        it("should render min and max labels", () => {
            render(<InputRangeSlider showSliderLabels />);

            expect(screen.queryByText("0")).toBeInTheDocument();
            expect(screen.queryByText("100")).toBeInTheDocument();
        });

        it("should render min and max labels with prefix", () => {
            render(
                <InputRangeSlider showSliderLabels sliderLabelPrefix="test" />
            );

            expect(screen.queryByText("test0")).toBeInTheDocument();
            expect(screen.queryByText("test100")).toBeInTheDocument();
        });

        it("should render min and max labels with suffix", () => {
            render(
                <InputRangeSlider showSliderLabels sliderLabelSuffix="test" />
            );

            expect(screen.queryByText("0test")).toBeInTheDocument();
            expect(screen.queryByText("100test")).toBeInTheDocument();
        });

        it("should render min and max labels with custom render function", () => {
            render(
                <InputRangeSlider
                    showSliderLabels
                    renderSliderLabel={(val) => <div>${val}.00</div>}
                />
            );

            expect(screen.queryByText("$0.00")).toBeInTheDocument();
            expect(screen.queryByText("$100.00")).toBeInTheDocument();
        });
    });
});
