import {
    act,
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
    within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DateRangeInput } from "src/date-range-input";

const FIELD_TESTID = "e2e";
const CALENDAR_TESTID = "calendar-dropdown";

// TODO: act can be removed after upgrading react-testing-library
// =============================================================================
// UNIT TESTS
// =============================================================================
describe("DateRangeInput (week variant)", () => {
    beforeEach(() => {
        jest.resetAllMocks();
        jest.useFakeTimers({
            doNotFake: ["setInterval", "setTimeout", "requestAnimationFrame"],
        }).setSystemTime(new Date("2024-02-10T12:00:00")); // first day of week starts in month

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("should render the field with calendar not shown by default", async () => {
        render(<DateRangeInput data-testid="e2e" variant="week" />);

        expect(screen.queryByTestId(FIELD_TESTID)).toBeVisible();
        expect(screen.queryByTestId(CALENDAR_TESTID)).not.toBeInTheDocument();
    });

    it("should show calendar for current month by default", async () => {
        const user = userEvent.setup({
            advanceTimers: jest.advanceTimersByTime,
        });

        render(<DateRangeInput data-testid="e2e" variant="week" />);

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() =>
            expect(screen.queryByTestId(CALENDAR_TESTID)).toBeVisible()
        );
        expect(
            within(screen.getByTestId(CALENDAR_TESTID)).getByText("Feb")
        ).toBeVisible();
        expect(
            within(screen.getByTestId(CALENDAR_TESTID)).getByText("2024")
        ).toBeVisible();
    });

    it("should not open calendar for readOnly field", async () => {
        const user = userEvent.setup({
            advanceTimers: jest.advanceTimersByTime,
        });
        const mockOnFocus = jest.fn();

        render(
            <DateRangeInput
                data-testid="e2e"
                variant="week"
                readOnly
                onFocus={mockOnFocus}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        expect(screen.queryByTestId(CALENDAR_TESTID)).not.toBeInTheDocument();
        expect(mockOnFocus).not.toHaveBeenCalled();
    });

    it("should not open calendar for disabled field", async () => {
        const user = userEvent.setup({
            advanceTimers: jest.advanceTimersByTime,
        });
        const mockOnFocus = jest.fn();

        render(
            <DateRangeInput
                data-testid="e2e"
                variant="week"
                disabled
                onFocus={mockOnFocus}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        expect(screen.queryByTestId(CALENDAR_TESTID)).not.toBeInTheDocument();
        expect(mockOnFocus).not.toHaveBeenCalled();
    });

    describe("focus/blur behaviour", () => {
        it("should call onFocus on click and onBlur via outside click", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnFocus = jest.fn();
            const mockOnBlur = jest.fn();

            render(
                <DateRangeInput
                    data-testid="e2e"
                    variant="week"
                    onFocus={mockOnFocus}
                    onBlur={mockOnBlur}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            expect(mockOnFocus).toHaveBeenCalledTimes(1);
            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await user.click(screen.getByText("10"));
            await user.click(screen.getByText("Done"));

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(mockOnFocus).toHaveBeenCalledTimes(1);
            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await user.click(document.body);

            expect(mockOnFocus).toHaveBeenCalledTimes(1);
            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it("should dismiss calendar if it is open", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnFocus = jest.fn();
            const mockOnBlur = jest.fn();

            render(
                <DateRangeInput
                    data-testid="e2e"
                    variant="week"
                    onFocus={mockOnFocus}
                    onBlur={mockOnBlur}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            expect(mockOnFocus).toHaveBeenCalledTimes(1);
            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await act(async () => {
                await user.click(document.body);
            });

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(mockOnFocus).toHaveBeenCalledTimes(1);
            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it("should dismiss calendar via Esc key", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnFocus = jest.fn();
            const mockOnBlur = jest.fn();

            render(
                <DateRangeInput
                    data-testid="e2e"
                    variant="week"
                    onFocus={mockOnFocus}
                    onBlur={mockOnBlur}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            await user.keyboard("{Escape}");

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(mockOnFocus).toHaveBeenCalledTimes(1);
            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await user.click(document.body);

            expect(mockOnFocus).toHaveBeenCalledTimes(1);
            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it("should call onFocus and onBlur when cycling through the tab sequence", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnFocus = jest.fn();
            const mockOnBlur = jest.fn();

            render(
                <>
                    <button data-testid="before" />
                    <DateRangeInput
                        data-testid="e2e"
                        variant="week"
                        value="2024-01-01"
                        onFocus={mockOnFocus}
                        onBlur={mockOnBlur}
                    />
                    <button data-testid="after" />
                </>
            );

            await user.keyboard("{Tab}");

            expect(screen.getByTestId("before")).toHaveFocus();

            await user.keyboard("{Tab}");

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            expect(screen.getByTestId(FIELD_TESTID)).toHaveFocus();
            expect(mockOnFocus).toHaveBeenCalledTimes(1);
            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await user.keyboard("{Tab}"); // Enters calendar view
            await user.keyboard("{Tab}"); // Calendar Month selector
            await user.keyboard("{Tab}"); // Calendar Year selector
            await user.keyboard("{Tab}"); // Calendar Left chevron button
            await user.keyboard("{Tab}"); // Calendar Right chevron button
            await user.keyboard("{Tab}"); // Day cell in calendar

            expect(
                screen.getByRole("button", { name: "Cancel" })
            ).toHaveFocus();

            await user.keyboard("{Tab}");

            expect(screen.getByRole("button", { name: "Done" })).toHaveFocus();

            await user.keyboard("{Tab}");

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(screen.getByTestId("after")).toHaveFocus();
            expect(mockOnFocus).toHaveBeenCalledTimes(1);
            expect(mockOnBlur).toHaveBeenCalledTimes(1);

            await act(async () => {
                await user.keyboard("{Shift>}{Tab}{/Shift}");
            });

            await waitFor(() => {
                expect(screen.getByLabelText("End Year")).toHaveFocus();
                expect(screen.getByTestId(CALENDAR_TESTID)).toBeVisible();
            });

            expect(mockOnFocus).toHaveBeenCalledTimes(2);
            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });
    });

    describe("with buttons", () => {
        it("should handle date selection by click", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(
                <DateRangeInput
                    data-testid="e2e"
                    variant="week"
                    onChange={mockOnChange}
                />
            );

            await user.click(screen.getByLabelText("Start Date"));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            await user.click(screen.getByText("15"));

            expect(screen.queryByTestId(CALENDAR_TESTID)).toBeVisible();
            expect(mockOnChange).not.toHaveBeenCalled();

            await user.click(screen.getByText("Done"));

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(screen.getByLabelText("Start Date")).toHaveValue("11");
            expect(screen.getByLabelText("Start Month")).toHaveValue("02");
            expect(screen.getByLabelText("Start Year")).toHaveValue("2024");
            expect(screen.getByLabelText("End Date")).toHaveValue("17");
            expect(screen.getByLabelText("End Month")).toHaveValue("02");
            expect(screen.getByLabelText("End Year")).toHaveValue("2024");
            expect(mockOnChange).toHaveBeenCalledWith(
                "2024-02-11",
                "2024-02-17"
            );
        });

        it("should reset to initial value if selection by click is not confirmed", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(
                <DateRangeInput
                    data-testid="e2e"
                    variant="week"
                    value="2024-04-07"
                    valueEnd="2024-04-13"
                    onChange={mockOnChange}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            await act(async () => {
                await user.click(screen.getByText("15"));
                await user.click(document.body);
            });

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(screen.getByLabelText("Start Date")).toHaveValue("07");
            expect(screen.getByLabelText("Start Month")).toHaveValue("04");
            expect(screen.getByLabelText("Start Year")).toHaveValue("2024");
            expect(screen.getByLabelText("End Date")).toHaveValue("13");
            expect(screen.getByLabelText("End Month")).toHaveValue("04");
            expect(screen.getByLabelText("End Year")).toHaveValue("2024");
            expect(mockOnChange).not.toHaveBeenCalled();
        });
    });

    describe("without buttons", () => {
        it("should handle date selection by click", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(
                <DateRangeInput
                    data-testid="e2e"
                    variant="week"
                    withButton={false}
                    onChange={mockOnChange}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            await user.click(screen.getByText("15"));

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(screen.getByLabelText("Start Date")).toHaveValue("11");
            expect(screen.getByLabelText("Start Month")).toHaveValue("02");
            expect(screen.getByLabelText("Start Year")).toHaveValue("2024");
            expect(screen.getByLabelText("End Date")).toHaveValue("17");
            expect(screen.getByLabelText("End Month")).toHaveValue("02");
            expect(screen.getByLabelText("End Year")).toHaveValue("2024");
            expect(mockOnChange).toHaveBeenCalledWith(
                "2024-02-11",
                "2024-02-17"
            );
        });
    });
});
