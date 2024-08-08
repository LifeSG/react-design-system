import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SelectHistogram } from "../../src";

const SELECTOR_TESTID = "select-histogram-selector";
const FIELD_TESTID = "select-histogram";

const MOCK_BIN_DATA = [
    { count: 1, minValue: 1 },
    { count: 1, minValue: 2 },
    { count: 1, minValue: 3 },
];

const expectRangeLabel = (
    from: number,
    to: number,
    rangeLabelPrefix?: string,
    rangeLabelSuffix?: string
) => {
    const fromLabel = rangeLabelPrefix
        ? rangeLabelPrefix + from
        : rangeLabelSuffix
        ? from + rangeLabelSuffix
        : from;

    const toLabel = rangeLabelPrefix
        ? rangeLabelPrefix + to
        : rangeLabelSuffix
        ? to + rangeLabelSuffix
        : to;

    expect(screen.getByText(fromLabel)).toBeVisible();
    expect(screen.getByText("-")).toBeVisible(); // show separator
    expect(screen.getByText(toLabel)).toBeVisible();
};

describe("SelectHistogram", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render the component", async () => {
        render(
            <SelectHistogram
                data-testid={FIELD_TESTID}
                histogramSlider={{ bins: MOCK_BIN_DATA, interval: 1 }}
            />
        );

        expect(screen.getByTestId(SELECTOR_TESTID)).toBeVisible();
        expectRangeLabel(1, 2);
    });

    it("should open dropdown panel and show histogram slider when selector is clicked", async () => {
        const user = userEvent.setup();

        render(
            <SelectHistogram
                data-testid={FIELD_TESTID}
                histogramSlider={{ bins: MOCK_BIN_DATA, interval: 1 }}
            />
        );

        await user.click(screen.queryByTestId(SELECTOR_TESTID));

        expect(screen.getByTestId(SELECTOR_TESTID)).toBeVisible();
        expectRangeLabel(1, 2);
        expect(screen.getByTestId(FIELD_TESTID)).toBeInTheDocument();
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

    it("should handle change", async () => {
        const user = userEvent.setup();
        const mockChange = jest.fn();

        render(
            <SelectHistogram
                data-testid={FIELD_TESTID}
                histogramSlider={{
                    bins: MOCK_BIN_DATA,
                    interval: 1,
                    onChange: mockChange,
                }}
            />
        );

        await user.click(screen.queryByTestId(SELECTOR_TESTID));

        const thumb = screen.queryByTestId("slider-track-0");

        await waitFor(() => {
            fireEvent.mouseDown(thumb.parentElement);
            expect(mockChange).toHaveBeenCalledWith([1, 2]);
        });
    });

    it("should toggle dropdown list when selector is clicked", async () => {
        const user = userEvent.setup();
        const mockChange = jest.fn();

        render(
            <SelectHistogram
                data-testid={FIELD_TESTID}
                histogramSlider={{
                    bins: MOCK_BIN_DATA,
                    interval: 1,
                    onChange: mockChange,
                }}
            />
        );

        await user.click(screen.queryByTestId(SELECTOR_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(FIELD_TESTID)).toBeVisible();
        });

        await user.click(screen.queryByTestId(SELECTOR_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(FIELD_TESTID)).not.toBeInTheDocument();
        });
    });

    describe("range labels in the selector", () => {
        it("should render range labels", () => {
            render(
                <SelectHistogram
                    data-testid={FIELD_TESTID}
                    histogramSlider={{ bins: MOCK_BIN_DATA, interval: 1 }}
                />
            );

            expectRangeLabel(1, 2);
        });

        it("should render range labels with prefix", () => {
            render(
                <SelectHistogram
                    data-testid={FIELD_TESTID}
                    histogramSlider={{
                        bins: MOCK_BIN_DATA,
                        interval: 1,
                        rangeLabelPrefix: "test",
                    }}
                />
            );

            expectRangeLabel(1, 2, "test");
        });

        it("should render range labels with suffix", () => {
            render(
                <SelectHistogram
                    data-testid={FIELD_TESTID}
                    histogramSlider={{
                        bins: MOCK_BIN_DATA,
                        interval: 1,
                        rangeLabelSuffix: "test",
                    }}
                />
            );

            expectRangeLabel(1, 2, undefined, "test");
        });

        it("should render range labels with custom render function", () => {
            render(
                <SelectHistogram
                    data-testid={FIELD_TESTID}
                    histogramSlider={{
                        bins: MOCK_BIN_DATA,
                        interval: 1,
                        renderRangeLabel: (val) => <div>${val}.00</div>,
                    }}
                />
            );

            expect(screen.queryByText("$1.00")).toBeInTheDocument();
            expect(screen.queryByText("$2.00")).toBeInTheDocument();
        });
    });
});
