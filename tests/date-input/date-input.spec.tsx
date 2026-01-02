import {
    act,
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
    within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DateInput } from "../../src";

const FIELD_TESTID = "e2e";
const CALENDAR_TESTID = "calendar-dropdown";

// TODO: act can be removed after upgrading react-testing-library
// =============================================================================
// UNIT TESTS
// =============================================================================
describe("DateInput", () => {
    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date("2024-02-01T12:00:00"));
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    beforeEach(() => {
        jest.resetAllMocks();

        global.requestAnimationFrame = (cb: FrameRequestCallback) => {
            cb(0);
            return 0;
        };

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render the field with calendar not shown by default", async () => {
        render(<DateInput data-testid="e2e" />);

        expect(screen.queryByTestId(FIELD_TESTID)).toBeVisible();
        expect(screen.queryByTestId(CALENDAR_TESTID)).not.toBeInTheDocument();
    });

    it("should show calendar for current month by default", async () => {
        const user = userEvent.setup({
            advanceTimers: jest.advanceTimersByTime,
        });

        render(<DateInput data-testid="e2e" />);

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

    it("should show calendar for selected month", async () => {
        const user = userEvent.setup({
            advanceTimers: jest.advanceTimersByTime,
        });

        render(<DateInput data-testid="e2e" value="2023-01-01" />);

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() =>
            expect(screen.queryByTestId(CALENDAR_TESTID)).toBeVisible()
        );
        expect(screen.getByText("Jan")).toBeVisible();
        expect(screen.getByText("2023")).toBeVisible();
    });

    it("should not open calendar for readOnly field", async () => {
        const user = userEvent.setup({
            advanceTimers: jest.advanceTimersByTime,
        });
        const mockOnFocus = jest.fn();

        render(<DateInput data-testid="e2e" readOnly onFocus={mockOnFocus} />);

        await user.click(screen.getByTestId(FIELD_TESTID));

        expect(screen.queryByTestId(CALENDAR_TESTID)).not.toBeInTheDocument();
        expect(mockOnFocus).not.toHaveBeenCalled();
    });

    it("should not open calendar for disabled field", async () => {
        const user = userEvent.setup({
            advanceTimers: jest.advanceTimersByTime,
        });
        const mockOnFocus = jest.fn();

        render(<DateInput data-testid="e2e" disabled onFocus={mockOnFocus} />);

        await user.click(screen.getByTestId(FIELD_TESTID));

        expect(screen.queryByTestId(CALENDAR_TESTID)).not.toBeInTheDocument();
        expect(mockOnFocus).not.toHaveBeenCalled();
    });

    it("should render the field prefilled for valid date (YYYY-MM-DD)", async () => {
        render(<DateInput data-testid="e2e" value="2024-02-01" />);

        expect(screen.queryByTestId(FIELD_TESTID)).toBeVisible();
        expect(screen.getByLabelText("Date")).toHaveValue("01");
        expect(screen.getByLabelText("Month")).toHaveValue("02");
        expect(screen.getByLabelText("Year")).toHaveValue("2024");
    });

    it("should render the field prefilled for valid date (YYY-MM-DD)", async () => {
        render(<DateInput data-testid="e2e" value="999-02-01" />);

        expect(screen.queryByTestId(FIELD_TESTID)).toBeVisible();
        expect(screen.getByLabelText("Date")).toHaveValue("01");
        expect(screen.getByLabelText("Month")).toHaveValue("02");
        expect(screen.getByLabelText("Year")).toHaveValue("999");
    });

    it("should render the field without prefill for invalid date (YY-MM-DD)", async () => {
        render(<DateInput data-testid="e2e" value="99-02-01" />);

        expect(screen.queryByTestId(FIELD_TESTID)).toBeVisible();
        expect(screen.getByLabelText("Date")).toHaveValue("");
        expect(screen.getByLabelText("Month")).toHaveValue("");
        expect(screen.getByLabelText("Year")).toHaveValue("");
    });

    it("should render the field without prefill for invalid date (unknown format)", async () => {
        render(<DateInput data-testid="e2e" value="2024" />);

        expect(screen.queryByTestId(FIELD_TESTID)).toBeVisible();
        expect(screen.getByLabelText("Date")).toHaveValue("");
        expect(screen.getByLabelText("Month")).toHaveValue("");
        expect(screen.getByLabelText("Year")).toHaveValue("");
    });

    describe("focus/blur behaviour", () => {
        it("should call onFocus on click and onBlur via outside click", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnFocus = jest.fn();
            const mockOnBlur = jest.fn();

            render(
                <DateInput
                    data-testid="e2e"
                    onFocus={mockOnFocus}
                    onBlur={mockOnBlur}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            expect(mockOnFocus).toHaveBeenCalledTimes(1);
            expect(mockOnBlur).toHaveBeenCalledTimes(0);

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
                <DateInput
                    data-testid="e2e"
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
                <DateInput
                    data-testid="e2e"
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
                    <DateInput
                        data-testid="e2e"
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

            expect(screen.getByLabelText("Date")).toHaveFocus();
            expect(mockOnFocus).toHaveBeenCalledTimes(1);
            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await user.keyboard("{Tab}"); // Month input
            await user.keyboard("{Tab}"); // Year input
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
                expect(screen.getByLabelText("Year")).toHaveFocus();
                expect(screen.getByTestId(CALENDAR_TESTID)).toBeVisible();
                expect(mockOnFocus).toHaveBeenCalledTimes(2);
                expect(mockOnBlur).toHaveBeenCalledTimes(1);
            });
        });
    });

    describe("with buttons", () => {
        it("should handle date selection by click", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(<DateInput data-testid="e2e" onChange={mockOnChange} />);

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            await user.click(screen.getByText("15"));

            expect(screen.queryByTestId(CALENDAR_TESTID)).toBeVisible();
            expect(mockOnChange).not.toHaveBeenCalled();

            await user.click(screen.getByText("Done"));

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(screen.getByLabelText("Date")).toHaveValue("15");
            expect(screen.getByLabelText("Month")).toHaveValue("02");
            expect(screen.getByLabelText("Year")).toHaveValue("2024");
            expect(mockOnChange).toHaveBeenCalledWith("2024-02-15");
        });

        it("should handle date selection by manual input", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(<DateInput data-testid="e2e" onChange={mockOnChange} />);

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            await user.type(screen.getByLabelText("Date"), "01");
            await user.type(screen.getByLabelText("Month"), "01");
            await user.type(screen.getByLabelText("Year"), "2023");

            expect(
                within(screen.getByTestId(CALENDAR_TESTID)).getByText("Jan")
            ).toBeVisible();
            expect(
                within(screen.getByTestId(CALENDAR_TESTID)).getByText("2023")
            ).toBeVisible();

            expect(mockOnChange).not.toHaveBeenCalled();

            await user.click(screen.getByText("Done"));

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(screen.getByLabelText("Date")).toHaveValue("01");
            expect(screen.getByLabelText("Month")).toHaveValue("01");
            expect(screen.getByLabelText("Year")).toHaveValue("2023");
            expect(mockOnChange).toHaveBeenCalledWith("2023-01-01");
        });

        it("should handle date selection by manual input (3-digit year input with leading zero)", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(<DateInput data-testid="e2e" onChange={mockOnChange} />);

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            await user.type(screen.getByLabelText("Date"), "01");
            await user.type(screen.getByLabelText("Month"), "01");
            await user.type(screen.getByLabelText("Year"), "0923");

            expect(
                within(screen.getByTestId(CALENDAR_TESTID)).getByText("Jan")
            ).toBeVisible();
            expect(
                within(screen.getByTestId(CALENDAR_TESTID)).getByText("0923")
            ).toBeVisible();

            expect(mockOnChange).not.toHaveBeenCalled();

            await user.click(screen.getByText("Done"));

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(screen.getByLabelText("Date")).toHaveValue("01");
            expect(screen.getByLabelText("Month")).toHaveValue("01");
            expect(screen.getByLabelText("Year")).toHaveValue("923");
            expect(mockOnChange).toHaveBeenCalledWith("0923-01-01");
        });

        it("should not handle date selection by manual input (2-digit year input with 2 leading zero)", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(<DateInput data-testid="e2e" onChange={mockOnChange} />);

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            await user.type(screen.getByLabelText("Date"), "01");
            await user.type(screen.getByLabelText("Month"), "01");
            await user.type(screen.getByLabelText("Year"), "0099");

            expect(mockOnChange).not.toHaveBeenCalled();

            await user.click(screen.getByText("Done"));

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(screen.getByLabelText("Date")).toHaveValue("01");
            expect(screen.getByLabelText("Month")).toHaveValue("01");
            expect(screen.getByLabelText("Year")).toHaveValue("0099");
            expect(mockOnChange).toHaveBeenCalledWith("");
        });

        it("should not handle date selection by manual input (invalid year)", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(<DateInput data-testid="e2e" onChange={mockOnChange} />);

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            await user.type(screen.getByLabelText("Date"), "01");
            await user.type(screen.getByLabelText("Month"), "01");
            await user.type(screen.getByLabelText("Year"), "999");

            expect(mockOnChange).not.toHaveBeenCalled();

            await user.click(screen.getByText("Done"));

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(screen.getByLabelText("Date")).toHaveValue("01");
            expect(screen.getByLabelText("Month")).toHaveValue("01");
            expect(screen.getByLabelText("Year")).toHaveValue("999");
            expect(mockOnChange).toHaveBeenCalledWith("");
        });

        it("should reset to initial value if selection by click is not confirmed", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(
                <DateInput
                    data-testid="e2e"
                    value="2024-04-30"
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

            expect(screen.getByLabelText("Date")).toHaveValue("30");
            expect(screen.getByLabelText("Month")).toHaveValue("04");
            expect(screen.getByLabelText("Year")).toHaveValue("2024");
            expect(mockOnChange).not.toHaveBeenCalled();
        });

        it("should reset to initial value if manual input is not confirmed", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(
                <DateInput
                    data-testid="e2e"
                    value="2024-04-30"
                    onChange={mockOnChange}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            await act(async () => {
                await user.type(screen.getByLabelText("Date"), "01");
                await user.type(screen.getByLabelText("Month"), "01");
                await user.type(screen.getByLabelText("Year"), "2023");
                await user.click(document.body);
            });

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(screen.getByLabelText("Date")).toHaveValue("30");
            expect(screen.getByLabelText("Month")).toHaveValue("04");
            expect(screen.getByLabelText("Year")).toHaveValue("2024");
            expect(mockOnChange).not.toHaveBeenCalled();
        });

        it("should handle clearing of date", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(
                <DateInput
                    data-testid="e2e"
                    value="2024-03-02"
                    onChange={mockOnChange}
                />
            );

            await user.click(screen.getByLabelText("Year"));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            // clear year
            await user.keyboard("{Backspace}");
            await user.keyboard("{Backspace}");
            // clear month
            await user.keyboard("{Backspace}");
            await user.keyboard("{Backspace}");
            // clear day
            await user.keyboard("{Backspace}");

            await user.click(screen.getByText("Done"));

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(screen.getByLabelText("Date")).toHaveValue("");
            expect(screen.getByLabelText("Month")).toHaveValue("");
            expect(screen.getByLabelText("Year")).toHaveValue("");
            expect(mockOnChange).toHaveBeenCalledWith("");
        });
    });

    describe("without buttons", () => {
        it("should handle date selection by click", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(
                <DateInput
                    data-testid="e2e"
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

            expect(screen.getByLabelText("Date")).toHaveValue("15");
            expect(screen.getByLabelText("Month")).toHaveValue("02");
            expect(screen.getByLabelText("Year")).toHaveValue("2024");
            expect(mockOnChange).toHaveBeenCalledWith("2024-02-15");
        });

        it("should handle date selection by keyboard input", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(
                <DateInput
                    data-testid="e2e"
                    withButton={false}
                    onChange={mockOnChange}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            await user.type(screen.getByLabelText("Date"), "01");
            await user.type(screen.getByLabelText("Month"), "01");
            await user.type(screen.getByLabelText("Year"), "2023");

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(screen.getByLabelText("Date")).toHaveValue("01");
            expect(screen.getByLabelText("Month")).toHaveValue("01");
            expect(screen.getByLabelText("Year")).toHaveValue("2023");
            expect(mockOnChange).toHaveBeenCalledWith("2023-01-01");
        });

        it("should handle date selection by keyboard input (3-digit year input with leading zero)", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(
                <DateInput
                    data-testid="e2e"
                    withButton={false}
                    onChange={mockOnChange}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            await user.type(screen.getByLabelText("Date"), "01");
            await user.type(screen.getByLabelText("Month"), "01");
            await user.type(screen.getByLabelText("Year"), "0923");

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(screen.getByLabelText("Date")).toHaveValue("01");
            expect(screen.getByLabelText("Month")).toHaveValue("01");
            expect(screen.getByLabelText("Year")).toHaveValue("923");
            expect(mockOnChange).toHaveBeenCalledWith("0923-01-01");
        });

        it("should not handle date selection by manual input (2-digit year input with 2 leading zero)", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(
                <DateInput
                    data-testid="e2e"
                    withButton={false}
                    onChange={mockOnChange}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            await user.type(screen.getByLabelText("Date"), "01");
            await user.type(screen.getByLabelText("Month"), "01");
            await user.type(screen.getByLabelText("Year"), "0023");

            expect(screen.getByLabelText("Date")).toHaveValue("01");
            expect(screen.getByLabelText("Month")).toHaveValue("01");
            expect(screen.getByLabelText("Year")).toHaveValue("0023");
            expect(mockOnChange).not.toHaveBeenCalled();
        });

        it("should not handle date selection by keyboard input (invalid year)", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(
                <DateInput
                    data-testid="e2e"
                    withButton={false}
                    onChange={mockOnChange}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            await user.type(screen.getByLabelText("Date"), "01");
            await user.type(screen.getByLabelText("Month"), "01");
            await user.type(screen.getByLabelText("Year"), "923");

            expect(screen.getByLabelText("Date")).toHaveValue("01");
            expect(screen.getByLabelText("Month")).toHaveValue("01");
            expect(screen.getByLabelText("Year")).toHaveValue("923");
            expect(mockOnChange).not.toHaveBeenCalled();
        });

        it("should handle clearing of date", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockOnChange = jest.fn();

            render(
                <DateInput
                    data-testid="e2e"
                    withButton={false}
                    value="2024-03-02"
                    onChange={mockOnChange}
                />
            );

            await user.click(screen.getByLabelText("Year"));

            await waitFor(() => screen.getByTestId(CALENDAR_TESTID));

            // clear year
            await user.keyboard("{Backspace}");
            await user.keyboard("{Backspace}");
            // clear month
            await user.keyboard("{Backspace}");
            await user.keyboard("{Backspace}");
            // clear day
            await user.keyboard("{Backspace}");

            await act(async () => {
                await user.click(document.body);
            });

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(CALENDAR_TESTID)
            );

            expect(screen.getByLabelText("Date")).toHaveValue("");
            expect(screen.getByLabelText("Month")).toHaveValue("");
            expect(screen.getByLabelText("Year")).toHaveValue("");
            expect(mockOnChange).toHaveBeenCalledWith("");
        });
    });
});
