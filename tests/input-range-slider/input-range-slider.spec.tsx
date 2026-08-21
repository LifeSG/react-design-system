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

        // required to mock the width of the slider track for calculating the thumb position in tests to not return NaN
        jest.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(
            100
        );
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("should render default component", () => {
        render(<InputRangeSlider />);

        expect(screen.queryAllByRole("slider")).toHaveLength(2);
        expect(screen.queryByTestId("slider-input-0")).toHaveValue("0");
        expect(screen.queryByTestId("slider-input-1")).toHaveValue("1");
    });

    it("should forward className to the root element", () => {
        render(
            <InputRangeSlider data-testid="input" className="custom-class" />
        );

        expect(screen.getByTestId("input")).toHaveClass("custom-class");
    });

    it("should render component with value", () => {
        render(<InputRangeSlider min={1} max={10} value={[5, 8]} />);

        expect(screen.queryByTestId("slider-input-0")).toHaveValue("5");
        expect(screen.queryByTestId("slider-input-1")).toHaveValue("8");
    });

    it("should handle change", () => {
        const mockChange = jest.fn();
        render(<InputRangeSlider onChange={mockChange} numOfThumbs={2} />);

        const thumb = screen.getByTestId("slider-track-0").parentElement!;
        fireEvent.pointerDown(thumb);

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

    describe("step", () => {
        it("should initialise thumbs aligned to step", () => {
            render(
                <InputRangeSlider min={0} max={50} step={5} numOfThumbs={2} />
            );

            expect(screen.queryByTestId("slider-input-0")).toHaveValue("0");
            expect(screen.queryByTestId("slider-input-1")).toHaveValue("5");
        });

        it("should move by step via native input change", () => {
            const mockChange = jest.fn();
            render(
                <InputRangeSlider
                    min={0}
                    max={50}
                    step={5}
                    value={[10, 40]}
                    onChange={mockChange}
                />
            );

            const input = screen.getByTestId("slider-input-0");
            fireEvent.change(input, { target: { value: "15" } });

            expect(mockChange).toHaveBeenCalledWith([15, 40]);
        });

        it("should respect step with decimal values", () => {
            render(
                <InputRangeSlider
                    min={0}
                    max={1}
                    step={0.1}
                    value={[0.3, 0.7]}
                />
            );

            expect(screen.queryByTestId("slider-input-0")).toHaveValue("0.3");
            expect(screen.queryByTestId("slider-input-1")).toHaveValue("0.7");
        });
    });

    describe("keyboard navigation", () => {
        it("should move thumb by step on ArrowRight", () => {
            const mockChange = jest.fn();
            render(
                <InputRangeSlider
                    min={0}
                    max={10}
                    step={1}
                    value={[3, 7]}
                    onChange={mockChange}
                />
            );

            const input = screen.getByTestId("slider-input-0");
            fireEvent.change(input, { target: { value: "4" } });

            expect(mockChange).toHaveBeenCalledWith([4, 7]);
        });

        it("should move thumb by step on ArrowLeft", () => {
            const mockChange = jest.fn();
            render(
                <InputRangeSlider
                    min={0}
                    max={10}
                    step={1}
                    value={[3, 7]}
                    onChange={mockChange}
                />
            );

            const input = screen.getByTestId("slider-input-0");
            fireEvent.change(input, { target: { value: "2" } });

            expect(mockChange).toHaveBeenCalledWith([2, 7]);
        });

        it("should move thumb to min on Home", () => {
            const mockChange = jest.fn();
            render(
                <InputRangeSlider
                    min={0}
                    max={10}
                    step={1}
                    value={[3, 7]}
                    onChange={mockChange}
                />
            );

            const input = screen.getByTestId("slider-input-0");
            fireEvent.change(input, { target: { value: "0" } });

            expect(mockChange).toHaveBeenCalledWith([0, 7]);
        });

        it("should move thumb to max on End", () => {
            const mockChange = jest.fn();
            render(
                <InputRangeSlider
                    min={0}
                    max={10}
                    step={1}
                    value={[3, 7]}
                    onChange={mockChange}
                />
            );

            const input = screen.getByTestId("slider-input-1");
            fireEvent.change(input, { target: { value: "10" } });

            expect(mockChange).toHaveBeenCalledWith([3, 10]);
        });

        it("should not move thumb beyond adjacent thumb with minRange", () => {
            const mockChange = jest.fn();
            render(
                <InputRangeSlider
                    min={0}
                    max={10}
                    step={1}
                    minRange={2}
                    value={[3, 5]}
                    onChange={mockChange}
                />
            );

            const input = screen.getByTestId("slider-input-0");
            fireEvent.change(input, { target: { value: "4" } });

            expect(mockChange).not.toHaveBeenCalled();
            expect(screen.getByTestId("slider-input-0")).toHaveValue("3");
        });

        it("should move by custom step on keyboard", () => {
            const mockChange = jest.fn();
            render(
                <InputRangeSlider
                    min={0}
                    max={50}
                    step={5}
                    value={[10, 40]}
                    onChange={mockChange}
                />
            );

            const input = screen.getByTestId("slider-input-0");
            fireEvent.change(input, { target: { value: "15" } });

            expect(mockChange).toHaveBeenCalledWith([15, 40]);
        });
    });
});
