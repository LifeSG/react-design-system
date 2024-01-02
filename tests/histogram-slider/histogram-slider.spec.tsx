import { fireEvent, render, screen } from "@testing-library/react";
import { HistogramSlider } from "src/histogram-slider";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("HistogramSlider", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render default component", () => {
        render(<HistogramSlider bins={MOCK_BIN_DATA} interval={1} />);

        expect(screen.queryAllByRole("slider")).toHaveLength(2);
        expect(screen.queryByTestId("slider-thumb-0")).toHaveAttribute(
            "aria-valuenow",
            "1"
        );
        expect(screen.queryByTestId("slider-thumb-1")).toHaveAttribute(
            "aria-valuenow",
            "2"
        );
    });

    it("should render component with value", () => {
        render(
            <HistogramSlider bins={MOCK_BIN_DATA} interval={1} value={[2, 3]} />
        );

        expect(screen.queryByTestId("slider-thumb-0")).toHaveAttribute(
            "aria-valuenow",
            "2"
        );
        expect(screen.queryByTestId("slider-thumb-1")).toHaveAttribute(
            "aria-valuenow",
            "3"
        );
    });

    it("should handle change", () => {
        const mockChange = jest.fn();
        render(
            <HistogramSlider
                bins={MOCK_BIN_DATA}
                interval={1}
                onChange={mockChange}
            />
        );

        const thumb = screen.queryByTestId("slider-track-0").parentElement;
        fireEvent.mouseDown(thumb);

        expect(mockChange).toHaveBeenCalledWith([1, 2]);
    });

    describe("range labels", () => {
        it("should render range labels", () => {
            render(
                <HistogramSlider
                    bins={MOCK_BIN_DATA}
                    interval={1}
                    showRangeLabels
                />
            );

            expect(screen.queryByText("1")).toBeInTheDocument();
            expect(screen.queryByText("2")).toBeInTheDocument();
        });

        it("should render range labels with prefix", () => {
            render(
                <HistogramSlider
                    bins={MOCK_BIN_DATA}
                    interval={1}
                    showRangeLabels
                    rangeLabelPrefix="test"
                />
            );

            expect(screen.queryByText("test1")).toBeInTheDocument();
            expect(screen.queryByText("test2")).toBeInTheDocument();
        });

        it("should render range labels with suffix", () => {
            render(
                <HistogramSlider
                    bins={MOCK_BIN_DATA}
                    interval={1}
                    showRangeLabels
                    rangeLabelSuffix="test"
                />
            );

            expect(screen.queryByText("1test")).toBeInTheDocument();
            expect(screen.queryByText("2test")).toBeInTheDocument();
        });

        it("should render range labels with custom render function", () => {
            render(
                <HistogramSlider
                    bins={MOCK_BIN_DATA}
                    interval={1}
                    showRangeLabels
                    renderRangeLabel={(val) => <div>${val}.00</div>}
                />
            );

            expect(screen.queryByText("$1.00")).toBeInTheDocument();
            expect(screen.queryByText("$2.00")).toBeInTheDocument();
        });
    });
});

// =============================================================================
// MOCKS
// =============================================================================
const MOCK_BIN_DATA = [
    { count: 1, minValue: 1 },
    { count: 1, minValue: 2 },
    { count: 1, minValue: 3 },
];
