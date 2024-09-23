import { act, render, screen, waitFor } from "@testing-library/react";
import { FormTimeRangePicker } from "../../src/form/form-time-range-picker";
import { TimeRangePicker } from "../../src/time-range-picker/time-range-picker";
import { TimeHelper } from "../../src/util/time-helper";
import userEvent from "@testing-library/user-event";

// =============================================================================
// UNIT TESTS
// =============================================================================
const START_LABEL = "Start time input";
const END_LABEL = "End time input";
const DROPDOWN_TESTID = "dropdown-list";

describe("TimeRangePicker", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    describe("Combobox variant", () => {
        it("should render the component", () => {
            render(<TimeRangePicker variant={"combobox"} />);

            expect(screen.queryByLabelText(START_LABEL)).toBeInTheDocument();
            expect(screen.queryByLabelText(END_LABEL)).toBeInTheDocument();
            expect(
                screen.queryByTestId(DROPDOWN_TESTID)
            ).not.toBeInTheDocument();
        });

        it("should render with initial values", () => {
            render(
                <TimeRangePicker
                    variant={"combobox"}
                    value={{ start: "9:00am", end: "3:00pm" }}
                />
            );

            expect(screen.queryByLabelText(START_LABEL)).toHaveValue("9:00am");
            expect(screen.queryByLabelText(END_LABEL)).toHaveValue("3:00pm");
        });

        it("should handle clear button click", async () => {
            const user = userEvent.setup();
            render(
                <TimeRangePicker
                    variant={"combobox"}
                    value={{ start: "9:00am", end: "3:00pm" }}
                />
            );

            await user.click(screen.queryByLabelText("Clear"));

            expect(screen.queryByLabelText(START_LABEL)).toHaveValue("");
            expect(screen.queryByLabelText(END_LABEL)).toHaveValue("");
        });

        it("should open dropdown on input click", async () => {
            const user = userEvent.setup();
            render(<TimeRangePicker variant={"combobox"} />);
            user.click(screen.getByLabelText(START_LABEL));
            await waitFor(() =>
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible()
            );
        });

        describe("generated dropdown options", () => {
            it("should have end first option be after start time", async () => {
                render(
                    <TimeRangePicker
                        variant={"combobox"}
                        value={{ start: "9:00am", end: "" }}
                    />
                );

                screen.getByLabelText(END_LABEL).focus();
                expect(screen.queryAllByRole("option")[0]).toHaveTextContent(
                    "9:00am"
                );
            });

            it("should have correct options for 24hr format", async () => {
                render(
                    <TimeRangePicker variant={"combobox"} format={"24hr"} />
                );

                screen.getByLabelText(START_LABEL).focus();
                expect(screen.queryAllByRole("option")[0]).toHaveTextContent(
                    "00:00"
                );
            });

            it("should have correct start/end limits", async () => {
                render(
                    <TimeRangePicker
                        variant={"combobox"}
                        startLimit="1:00pm"
                        endLimit="6:00pm"
                    />
                );

                screen.getByLabelText(START_LABEL).focus();
                expect(screen.queryAllByRole("option")[0]).toHaveTextContent(
                    "1:00pm"
                );
                screen.getByLabelText(END_LABEL).focus();
                expect(
                    screen.queryAllByRole("option").slice(-1)[0]
                ).toHaveTextContent("6:00pm");
            });

            it("should have correct interval between options", async () => {
                render(
                    <TimeRangePicker
                        variant={"combobox"}
                        startLimit="1:00pm"
                        endLimit="4:00pm"
                        interval={60}
                    />
                );

                screen.getByLabelText(START_LABEL).focus();
                const options = screen
                    .getAllByRole("option")
                    .map((option) => option.textContent);
                expect(options).toEqual([
                    "1:00pm",
                    "2:00pm",
                    "3:00pm",
                    "4:00pm",
                ]);
            });
        });

        describe("validation errors", () => {
            it("should show error if start time is after end time", () => {
                render(
                    <TimeRangePicker
                        variant={"combobox"}
                        value={{ start: "3:00pm", end: "2:00pm" }}
                    />
                );

                expect(
                    screen.queryByText("End time must be after start time")
                ).toBeInTheDocument();
            });

            it("should show error if start input cannot be parsed", async () => {
                const user = userEvent.setup();
                const mockOnChange = jest.fn();
                render(
                    <TimeRangePicker
                        variant={"combobox"}
                        onChange={mockOnChange}
                    />
                );

                screen.getByLabelText(START_LABEL).focus();
                await act(async () => {
                    await user.keyboard("abc");
                });
                expect(
                    screen.queryByText("Invalid start time")
                ).toBeInTheDocument();

                await act(async () => {
                    await user.keyboard("{Enter}");
                });
                expect(screen.getByLabelText(START_LABEL)).toHaveValue("");
                expect(mockOnChange).toHaveBeenCalledTimes(0);

                // Remain at start if both fields are empty
                expect(screen.getByLabelText(START_LABEL)).toHaveFocus();
            });

            it("should show error if end input cannot be parsed", async () => {
                const user = userEvent.setup();
                render(<TimeRangePicker variant={"combobox"} />);

                screen.getByLabelText(END_LABEL).focus();
                await act(async () => {
                    await user.keyboard("xyz");
                });

                expect(
                    screen.queryByText("Invalid end time")
                ).toBeInTheDocument();
            });

            it("should show error message when 'errorMessage' prop is true", async () => {
                render(
                    <FormTimeRangePicker
                        variant="combobox"
                        value={{ start: "abc", end: "xyz" }}
                        errorMessage={"Error Message"}
                    />
                );

                // "Error Message" should overwrite internal error
                expect(screen.queryByText("Error Message")).toBeInTheDocument();
            });
        });

        describe("parseInput tests", () => {
            it("should parse regex matching strings", async () => {
                expect(TimeHelper.parseInput("0")).toBe("12:00am");
                expect(TimeHelper.parseInput("0:")).toBe("12:00am");
                expect(TimeHelper.parseInput("9.30")).toBe("9:30am");
                expect(TimeHelper.parseInput("24")).toBe("12:00am");
                expect(TimeHelper.parseInput("1a")).toBe("1:00am");
                expect(TimeHelper.parseInput("1am")).toBe("1:00am");
                expect(TimeHelper.parseInput("8p")).toBe("8:00pm");
                expect(TimeHelper.parseInput("20")).toBe("8:00pm");
                expect(TimeHelper.parseInput("20am")).toBe("8:00pm");
                expect(TimeHelper.parseInput("2359")).toBe("11:59pm");
            });

            it("should parse for 24hr format", async () => {
                expect(TimeHelper.parseInput("0", "24hr")).toBe("00:00");
                expect(TimeHelper.parseInput("24", "24hr")).toBe("00:00");
                expect(TimeHelper.parseInput("1am", "24hr")).toBe("01:00");
                expect(TimeHelper.parseInput("8p", "24hr")).toBe("20:00");
                expect(TimeHelper.parseInput("20", "24hr")).toBe("20:00");
                expect(TimeHelper.parseInput("20am", "24hr")).toBe("20:00");
            });

            it("should give am for 7 to 11", async () => {
                expect(TimeHelper.parseInput("7")).toBe("7:00am");
                expect(TimeHelper.parseInput("8")).toBe("8:00am");
                expect(TimeHelper.parseInput("9")).toBe("9:00am");
                expect(TimeHelper.parseInput("10")).toBe("10:00am");
                expect(TimeHelper.parseInput("11")).toBe("11:00am");
            });

            it("should give pm for 12 to 6", async () => {
                expect(TimeHelper.parseInput("12")).toBe("12:00pm");
                expect(TimeHelper.parseInput("1")).toBe("1:00pm");
                expect(TimeHelper.parseInput("2")).toBe("2:00pm");
                expect(TimeHelper.parseInput("3")).toBe("3:00pm");
                expect(TimeHelper.parseInput("4")).toBe("4:00pm");
                expect(TimeHelper.parseInput("5")).toBe("5:00pm");
                expect(TimeHelper.parseInput("6")).toBe("6:00pm");
            });

            it("should give undefined (error) for invalid input", async () => {
                expect(TimeHelper.parseInput("am")).toBeUndefined();
                expect(TimeHelper.parseInput("pm")).toBeUndefined();
                expect(TimeHelper.parseInput(":00")).toBeUndefined();
                expect(TimeHelper.parseInput("00::")).toBeUndefined();
                expect(TimeHelper.parseInput("1:1")).toBeUndefined();
                expect(TimeHelper.parseInput("1:60")).toBeUndefined();
                expect(TimeHelper.parseInput("25")).toBeUndefined();
                expect(TimeHelper.parseInput("1ama")).toBeUndefined();
                expect(TimeHelper.parseInput("11111")).toBeUndefined();
            });
        });

        describe("change behavior", () => {
            it("should select list item correctly", async () => {
                const user = userEvent.setup();
                const mockOnChange = jest.fn();
                const mockOnBlur = jest.fn();

                render(
                    <TimeRangePicker
                        variant={"combobox"}
                        onChange={mockOnChange}
                        onBlur={mockOnBlur}
                    />
                );

                const startInput = screen.getByLabelText(START_LABEL);

                // Click start dropdown option
                user.click(startInput);
                await waitFor(() => {
                    expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
                });
                await act(async () => {
                    await user.click(screen.queryByText("9:00am"));
                });
                await waitFor(() => expect(startInput).toHaveValue("9:00am"));
                expect(mockOnChange).toHaveBeenCalledTimes(1);

                // Click end dropdown option
                await act(async () => {
                    await user.click(screen.queryByText("10:00am"));
                });
                await waitFor(() =>
                    expect(screen.getByLabelText(END_LABEL)).toHaveValue(
                        "10:00am"
                    )
                );

                expect(mockOnChange).toHaveBeenCalledTimes(2);
                expect(mockOnBlur).toHaveBeenCalledTimes(1);
                expect(
                    screen.queryByTestId(DROPDOWN_TESTID)
                ).not.toBeInTheDocument();
            });

            it("should handle Enter key", async () => {
                const user = userEvent.setup();
                const mockOnChange = jest.fn();
                render(
                    <TimeRangePicker
                        variant={"combobox"}
                        onChange={mockOnChange}
                    />
                );

                const startInput = screen.getByLabelText(START_LABEL);

                startInput.focus();
                user.keyboard("{9}{Enter}");
                await waitFor(() => expect(startInput).toHaveValue("9:00am"));
                expect(mockOnChange).toHaveBeenCalledTimes(1);
            });

            it("should handle Tab key", async () => {
                const user = userEvent.setup();
                const mockOnChange = jest.fn();
                render(
                    <TimeRangePicker
                        variant={"combobox"}
                        onChange={mockOnChange}
                    />
                );

                const startInput = screen.getByLabelText(START_LABEL);

                startInput.focus();
                user.keyboard("9");
                user.keyboard("{Tab}");
                await waitFor(() => expect(startInput).toHaveValue("9:00am"));
                expect(mockOnChange).toHaveBeenCalledTimes(1);
            });
        });

        describe("focus/blur behavior", () => {
            it("should call onFocus on click", async () => {
                const user = userEvent.setup();
                const mockOnFocus = jest.fn();

                render(
                    <TimeRangePicker
                        variant={"combobox"}
                        onFocus={mockOnFocus}
                    />
                );

                await user.click(screen.getByLabelText(START_LABEL));
                expect(mockOnFocus).toHaveBeenCalledTimes(1);
            });

            it("should call onBlur via outside click", async () => {
                const user = userEvent.setup();
                const mockOnBlur = jest.fn();

                render(
                    <TimeRangePicker variant={"combobox"} onBlur={mockOnBlur} />
                );

                user.click(screen.getByLabelText(START_LABEL));
                await waitFor(() => screen.queryByTestId(DROPDOWN_TESTID));
                expect(mockOnBlur).toHaveBeenCalledTimes(0);

                await act(async () => {
                    await user.click(screen.queryByText("1:00am"));
                });
                expect(mockOnBlur).toHaveBeenCalledTimes(0);

                await act(async () => {
                    await user.click(document.body);
                });
                expect(mockOnBlur).toHaveBeenCalledTimes(1);
            });

            it("should dismiss dropdown via Esc key", async () => {
                const user = userEvent.setup();
                const mockOnBlur = jest.fn();

                render(
                    <TimeRangePicker variant={"combobox"} onBlur={mockOnBlur} />
                );

                user.click(screen.getByLabelText(START_LABEL));
                await waitFor(() =>
                    expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible()
                );
                expect(mockOnBlur).toHaveBeenCalledTimes(0);

                await user.keyboard("{Escape}");
                expect(
                    screen.queryByTestId(DROPDOWN_TESTID)
                ).not.toBeInTheDocument();

                expect(screen.getByLabelText(START_LABEL)).toHaveFocus();
                expect(mockOnBlur).toHaveBeenCalledTimes(0);
            });

            it("should call onBlur after end input", async () => {
                const user = userEvent.setup();
                const mockOnBlur = jest.fn();
                const mockOnFocus = jest.fn();

                render(
                    <>
                        <TimeRangePicker
                            variant={"combobox"}
                            onBlur={mockOnBlur}
                            onFocus={mockOnFocus}
                        />
                    </>
                );

                // Enter end input
                user.click(screen.getByLabelText(END_LABEL));
                await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
                await waitFor(() =>
                    expect(screen.getByLabelText(END_LABEL)).toHaveFocus()
                );
                await act(async () => {
                    await user.keyboard("{5}{Enter}");
                });
                expect(mockOnBlur).toHaveBeenCalledTimes(1);
                expect(mockOnFocus).toHaveBeenCalledTimes(1);
                expect(
                    screen.queryByTestId(DROPDOWN_TESTID)
                ).not.toBeInTheDocument();
            });

            it("should call onFocus and onBlur when cycling through the tab sequence", async () => {
                const user = userEvent.setup();
                const mockOnBlur = jest.fn();
                const mockOnFocus = jest.fn();

                render(
                    <>
                        <button data-testid="before" />
                        <TimeRangePicker
                            variant={"combobox"}
                            onBlur={mockOnBlur}
                            onFocus={mockOnFocus}
                        />
                        <button data-testid="after" />
                    </>
                );

                await user.keyboard("{Tab}");
                expect(screen.getByTestId("before")).toHaveFocus();

                // Tab to start (onFocus)
                await act(async () => {
                    await user.keyboard("{Tab}{9}");
                });
                await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
                await waitFor(() =>
                    expect(screen.getByLabelText(START_LABEL)).toHaveFocus()
                );
                expect(mockOnBlur).toHaveBeenCalledTimes(0);
                expect(mockOnFocus).toHaveBeenCalledTimes(1);

                // Tab to end
                await act(async () => {
                    await user.keyboard("{Tab}{5}");
                });
                expect(screen.getByLabelText(END_LABEL)).toHaveFocus();
                expect(mockOnBlur).toHaveBeenCalledTimes(0);
                expect(mockOnFocus).toHaveBeenCalledTimes(1);

                // Tab to clear
                await act(async () => {
                    await user.keyboard("{Tab}");
                });
                expect(screen.queryByLabelText("Clear")).toHaveFocus();
                expect(mockOnBlur).toHaveBeenCalledTimes(0);
                expect(mockOnFocus).toHaveBeenCalledTimes(1);

                // Tab to dropdown
                await act(async () => {
                    await user.keyboard("{Tab}");
                });
                expect(
                    screen.getByRole("option", { name: "5:00pm" })
                ).toHaveFocus();
                expect(mockOnBlur).toHaveBeenCalledTimes(0);
                expect(mockOnFocus).toHaveBeenCalledTimes(1);

                // Tab to after (onBlur)
                await act(async () => {
                    await user.keyboard("{Tab}");
                });
                expect(screen.getByTestId("after")).toHaveFocus();
                expect(mockOnBlur).toHaveBeenCalledTimes(1);
                expect(mockOnFocus).toHaveBeenCalledTimes(1);
                expect(
                    screen.queryByTestId(DROPDOWN_TESTID)
                ).not.toBeInTheDocument();

                // Tab back to clear
                await act(async () => {
                    await user.keyboard("{Shift>}{Tab}{/Shift}");
                });
                expect(screen.queryByLabelText("Clear")).toHaveFocus();
                expect(mockOnBlur).toHaveBeenCalledTimes(1);
                expect(mockOnFocus).toHaveBeenCalledTimes(1);

                // Tab back to end (onFocus)
                await act(async () => {
                    await user.keyboard("{Shift>}{Tab}{/Shift}");
                });
                expect(screen.getByLabelText(END_LABEL)).toHaveFocus();
                expect(mockOnBlur).toHaveBeenCalledTimes(1);
                expect(mockOnFocus).toHaveBeenCalledTimes(2);
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });
        });

        describe("readonly/disabled behavior", () => {
            it("should be disabled when 'disabled' prop is true", async () => {
                const user = userEvent.setup();
                render(<TimeRangePicker variant={"combobox"} disabled />);

                const start = screen.getByLabelText(START_LABEL);
                const end = screen.getByLabelText(END_LABEL);

                expect(start).toBeDisabled();
                expect(end).toBeDisabled();

                await user.click(start);
                expect(start).not.toHaveFocus();
                expect(
                    screen.queryByTestId(DROPDOWN_TESTID)
                ).not.toBeInTheDocument();
            });

            it("should be readOnly when 'readOnly' prop is true", async () => {
                const user = userEvent.setup();
                render(<TimeRangePicker variant={"combobox"} readOnly />);

                const start = screen.getByLabelText(START_LABEL);
                await user.click(start);
                expect(
                    screen.queryByTestId(DROPDOWN_TESTID)
                ).not.toBeInTheDocument();
            });
        });
    });
});
