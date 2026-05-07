import { render, screen } from "@testing-library/react";
import { HistogramSlider } from "src/histogram-slider";
import * as styles from "src/histogram-slider/histogram-slider.styles";

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

        // required to mock the width of the slider track for calculating the thumb position in tests to not return NaN
        jest.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(
            100
        );
    });

    afterEach(() => {
        jest.restoreAllMocks();
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

    it("should forward className to the root element", () => {
        render(
            <HistogramSlider
                bins={MOCK_BIN_DATA}
                interval={1}
                data-testid="histogram-slider"
                className="custom-class"
            />
        );

        expect(screen.getByTestId("histogram-slider")).toHaveClass(
            "custom-class"
        );
    });

    describe("bars", () => {
        it("should render a bar for each bin", () => {
            const { container } = render(
                <HistogramSlider bins={MOCK_BIN_DATA} interval={1} />
            );

            const bars = container.querySelectorAll(`.${styles.bar}`);
            expect(bars).toHaveLength(MOCK_BIN_DATA.length);
        });

        it("should apply selected class to bars within selection", () => {
            const { container } = render(
                <HistogramSlider
                    bins={MOCK_BIN_DATA}
                    interval={1}
                    value={[1, 2]}
                />
            );

            const bars = container.querySelectorAll(`.${styles.bar}`);
            expect(bars[0]).toHaveClass(styles.barSelected);
            expect(bars[1]).not.toHaveClass(styles.barSelected);
        });

        it("should apply disabled class to bars when disabled", () => {
            const { container } = render(
                <HistogramSlider
                    bins={MOCK_BIN_DATA}
                    interval={1}
                    value={[2, 3]}
                    disabled
                />
            );

            const bars = container.querySelectorAll(`.${styles.bar}`);
            expect(bars[0]).toHaveClass(styles.barDisabled);
            expect(bars[0]).not.toHaveClass(styles.barSelected);
            expect(bars[0]).not.toHaveClass(styles.barSelectedDisabled);
        });

        it("should apply selectedDisabled class to selected bars when disabled", () => {
            const { container } = render(
                <HistogramSlider
                    bins={MOCK_BIN_DATA}
                    interval={1}
                    value={[1, 2]}
                    disabled
                />
            );

            const bars = container.querySelectorAll(`.${styles.bar}`);
            expect(bars[0]).toHaveClass(styles.barSelectedDisabled);
            expect(bars[0]).not.toHaveClass(styles.barSelected);
            expect(bars[0]).not.toHaveClass(styles.barDisabled);
        });

        it("should apply disabled class to bars when readOnly", () => {
            const { container } = render(
                <HistogramSlider
                    bins={MOCK_BIN_DATA}
                    interval={1}
                    value={[2, 3]}
                    readOnly
                />
            );

            const bars = container.querySelectorAll(`.${styles.bar}`);
            expect(bars[0]).toHaveClass(styles.barDisabled);
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
