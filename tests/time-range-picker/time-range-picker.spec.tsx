import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormTimeRangePicker } from "../../src/form/form-time-range-picker";
import { TimeRangePicker } from "../../src/time-range-picker/time-range-picker";
import { waitForElementToBeRemoved } from "../common/waitForElementRemoved";

// =============================================================================
// UNIT TESTS
// =============================================================================
const START_LABEL = "Start time";
const END_LABEL = "End time";
const DROPDOWN_TESTID = "dropdown-list";

describe("TimeRangePicker", () => {
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

            await user.click(screen.getByLabelText("Clear"));

            expect(screen.queryByLabelText(START_LABEL)).toHaveValue("");
            expect(screen.queryByLabelText(END_LABEL)).toHaveValue("");
        });

        it("should open dropdown on input click", async () => {
            const user = userEvent.setup();
            render(<TimeRangePicker variant={"combobox"} />);

            await user.click(screen.getByLabelText(START_LABEL));

            await waitFor(() =>
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible()
            );
        });

        describe("generated dropdown options", () => {
            it("should scroll the start dropdown to the initial start time", async () => {
                const user = userEvent.setup();

                render(
                    <TimeRangePicker
                        variant={"combobox"}
                        initialScrollStartTime="9:00am"
                        startLimit="8:00am"
                        endLimit="10:00am"
                        interval={60}
                    />
                );

                await user.click(screen.getByLabelText(START_LABEL));

                await waitFor(() => {
                    expect(
                        screen.getByRole("option", { name: "9:00am" })
                    ).toHaveAttribute("tabindex", "0");
                    expect(
                        screen.queryAllByRole("option").map((option) => {
                            return option.textContent;
                        })
                    ).toEqual(["8:00am", "9:00am", "10:00am"]);
                });
            });

            it("should scroll the end dropdown to the initial end time", async () => {
                const user = userEvent.setup();

                render(
                    <TimeRangePicker
                        variant={"combobox"}
                        initialScrollEndTime="3:00pm"
                        startLimit="1:00pm"
                        endLimit="5:00pm"
                        interval={60}
                    />
                );

                await user.click(screen.getByLabelText(END_LABEL));

                await waitFor(() => {
                    expect(
                        screen.getByRole("option", { name: "3:00pm" })
                    ).toHaveAttribute("tabindex", "0");
                    expect(
                        screen.queryAllByRole("option").map((option) => {
                            return option.textContent;
                        })
                    ).toEqual([
                        "1:00pm",
                        "2:00pm",
                        "3:00pm",
                        "4:00pm",
                        "5:00pm",
                    ]);
                });
            });

            it("should scroll the start dropdown to the initialised value instead of the initial start time", async () => {
                const user = userEvent.setup();

                // Time range picker with start value of 10:00am
                render(
                    <TimeRangePicker
                        variant={"combobox"}
                        initialScrollStartTime="9:00am"
                        startLimit="8:00am"
                        value={{ start: "10:00am", end: "11:00am" }}
                        endLimit="11:00am"
                        interval={60}
                    />
                );

                expect(screen.getByLabelText(START_LABEL)).toHaveValue(
                    "10:00am"
                );

                await user.click(screen.getByLabelText(START_LABEL));

                // Scroll start should be 10:00am (from the initialised value)
                await waitFor(() => {
                    expect(
                        screen.getByRole("option", { name: "10:00am" })
                    ).toHaveAttribute("tabindex", "0");
                    expect(
                        screen.getByRole("option", { name: "9:00am" })
                    ).toHaveAttribute("tabindex", "-1");
                });
            });

            it("should scroll the start dropdown to the selected value instead of the initial start time", async () => {
                const user = userEvent.setup();

                // Time range picker without start value
                render(
                    <TimeRangePicker
                        variant={"combobox"}
                        initialScrollStartTime="9:00am"
                        startLimit="8:00am"
                        endLimit="11:00am"
                        interval={60}
                    />
                );

                await user.click(screen.getByLabelText(START_LABEL));

                // Assert that scroll time is as expected (from initialScrollStartTime)
                await waitFor(() => {
                    expect(
                        screen.getByRole("option", { name: "9:00am" })
                    ).toHaveAttribute("tabindex", "0");
                });

                // After clicking on 10:00am selection and reopening the dropdown, first option should be 10:00am instead
                await user.click(
                    screen.getByRole("option", { name: "10:00am" })
                );

                expect(screen.getByLabelText(START_LABEL)).toHaveValue(
                    "10:00am"
                );

                await user.click(screen.getByLabelText(START_LABEL));

                await waitFor(() => {
                    expect(
                        screen.getByRole("option", { name: "10:00am" })
                    ).toHaveAttribute("tabindex", "0");
                    expect(
                        screen.getByRole("option", { name: "9:00am" })
                    ).toHaveAttribute("tabindex", "-1");
                });
            });

            it("should have end first option be after start time", async () => {
                render(
                    <TimeRangePicker
                        variant={"combobox"}
                        value={{ start: "9:00am", end: "" }}
                    />
                );

                screen.getByLabelText(END_LABEL).focus();

                await waitFor(() =>
                    expect(
                        screen.queryAllByRole("option")[0]
                    ).toHaveTextContent("9:00am")
                );
            });

            it("should have correct options for 24hr format", async () => {
                render(
                    <TimeRangePicker variant={"combobox"} format={"24hr"} />
                );

                screen.getByLabelText(START_LABEL).focus();

                await waitFor(() =>
                    expect(
                        screen.queryAllByRole("option")[0]
                    ).toHaveTextContent("00:00")
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
                await waitFor(() =>
                    expect(
                        screen.queryAllByRole("option")[0]
                    ).toHaveTextContent("1:00pm")
                );

                screen.getByLabelText(END_LABEL).focus();
                await waitFor(() =>
                    expect(
                        screen.queryAllByRole("option").slice(-1)[0]
                    ).toHaveTextContent("6:00pm")
                );
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

                await waitFor(() => {
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
        });

        describe("validation errors", () => {
            it("should show error if start time is after end time", async () => {
                const user = userEvent.setup();
                render(
                    <TimeRangePicker
                        variant={"combobox"}
                        value={{ start: "3:00pm", end: "2:00pm" }}
                    />
                );

                expect(
                    screen.queryByText("End time must be after start time")
                ).toBeInTheDocument();

                await act(async () => {
                    await user.click(screen.getByLabelText(END_LABEL));
                });
                await act(async () => {
                    await user.keyboard("{Enter}");
                });

                expect(screen.getByLabelText(START_LABEL)).toHaveValue(
                    "3:00pm"
                );
                expect(screen.getByLabelText(END_LABEL)).toHaveValue("2:00pm");
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

                expect(screen.queryByText("Error Message")).toBeInTheDocument();
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
                await user.click(startInput);
                await waitFor(() => {
                    expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
                });

                await act(async () => {
                    await user.click(screen.getByText("9:00am"));
                });

                await waitFor(() => expect(startInput).toHaveValue("9:00am"));
                expect(mockOnChange).toHaveBeenCalledTimes(1);

                // Click end dropdown option
                await act(async () => {
                    await user.click(screen.getByText("10:00am"));
                });

                await waitFor(() =>
                    expect(screen.getByLabelText(END_LABEL)).toHaveValue(
                        "10:00am"
                    )
                );
                await waitForElementToBeRemoved(() =>
                    screen.queryByTestId(DROPDOWN_TESTID)
                );

                expect(mockOnChange).toHaveBeenCalledTimes(2);
                expect(mockOnBlur).toHaveBeenCalledTimes(1);
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
                await act(async () => {
                    await user.keyboard("{9}{Enter}");
                });

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

                await act(async () => {
                    await user.keyboard("9");
                    await user.keyboard("{Tab}");
                });

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

                await user.click(screen.getByLabelText(START_LABEL));
                await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
                expect(mockOnBlur).toHaveBeenCalledTimes(0);

                await act(async () => {
                    await user.click(screen.getByText("1:00am"));
                });
                expect(mockOnBlur).toHaveBeenCalledTimes(0);

                await act(async () => {
                    await user.click(document.body);
                });
                expect(mockOnBlur).toHaveBeenCalledTimes(1);
            });

            it("should call onBlur via outside click, if dropdown was dismissed", async () => {
                const user = userEvent.setup();
                const mockOnBlur = jest.fn();

                render(
                    <TimeRangePicker variant={"combobox"} onBlur={mockOnBlur} />
                );

                await user.click(screen.getByLabelText(START_LABEL));
                await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
                expect(mockOnBlur).toHaveBeenCalledTimes(0);

                await act(async () => {
                    await user.click(screen.getByText("1:00am"));
                });
                expect(mockOnBlur).toHaveBeenCalledTimes(0);

                // Dismiss dropdown
                await act(async () => {
                    await user.keyboard("{Escape}");
                });
                await waitForElementToBeRemoved(() =>
                    screen.queryByTestId(DROPDOWN_TESTID)
                );
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

                await user.click(screen.getByLabelText(START_LABEL));
                await waitFor(() =>
                    expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible()
                );
                expect(mockOnBlur).toHaveBeenCalledTimes(0);

                await user.keyboard("{Escape}");
                await waitForElementToBeRemoved(() =>
                    screen.queryByTestId(DROPDOWN_TESTID)
                );

                expect(screen.getByLabelText(START_LABEL)).toHaveFocus();
                expect(mockOnBlur).toHaveBeenCalledTimes(0);
            });

            it("should call onBlur after end input", async () => {
                const user = userEvent.setup();
                const mockOnBlur = jest.fn();
                const mockOnFocus = jest.fn();

                render(
                    <TimeRangePicker
                        variant={"combobox"}
                        onBlur={mockOnBlur}
                        onFocus={mockOnFocus}
                    />
                );

                // Enter end input
                await user.click(screen.getByLabelText(END_LABEL));
                await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
                await waitFor(() =>
                    expect(screen.getByLabelText(END_LABEL)).toHaveFocus()
                );

                await act(async () => {
                    await user.keyboard("{5}{Enter}");
                });

                await waitForElementToBeRemoved(() =>
                    screen.queryByTestId(DROPDOWN_TESTID)
                );

                expect(mockOnBlur).toHaveBeenCalledTimes(1);
                expect(mockOnFocus).toHaveBeenCalledTimes(1);
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

                screen.getByTestId("before").focus();

                // Tab to start (onFocus)
                await act(async () => {
                    await user.keyboard("{Tab}{9}");
                });
                await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
                await waitFor(() =>
                    expect(screen.getByLabelText(START_LABEL)).toHaveFocus()
                );
                expect(mockOnFocus).toHaveBeenCalledTimes(1);

                // Tab to end
                await act(async () => {
                    await user.keyboard("{Tab}{5}");
                });
                expect(screen.getByLabelText(END_LABEL)).toHaveFocus();

                // Tab to clear
                await act(async () => {
                    await user.keyboard("{Tab}");
                });
                expect(screen.queryByLabelText("Clear")).toHaveFocus();

                // Tab to dropdown
                await act(async () => {
                    await user.keyboard("{Tab}");
                });
                expect(
                    screen.getByRole("option", { name: "5:00pm" })
                ).toHaveFocus();
                expect(mockOnBlur).toHaveBeenCalledTimes(0);

                // Tab to after (onBlur)
                await act(async () => {
                    await user.keyboard("{Tab}");
                });
                await waitForElementToBeRemoved(() =>
                    screen.queryByTestId(DROPDOWN_TESTID)
                );

                expect(screen.getByTestId("after")).toHaveFocus();
                expect(mockOnBlur).toHaveBeenCalledTimes(1);
                expect(mockOnFocus).toHaveBeenCalledTimes(1);
            }, 10000);

            it("should call onFocus and onBlur when cycling back through the tab sequence", async () => {
                const user = userEvent.setup();
                const mockOnFocus = jest.fn();

                render(
                    <>
                        <TimeRangePicker
                            variant={"combobox"}
                            onFocus={mockOnFocus}
                            value={{ start: "9:00am", end: "5:00pm" }}
                        />
                        <button data-testid="after" />
                    </>
                );

                screen.getByTestId("after").focus();

                // Tab back to clear
                await act(async () => {
                    await user.keyboard("{Shift>}{Tab}{/Shift}");
                });
                expect(screen.queryByLabelText("Clear")).toHaveFocus();
                expect(mockOnFocus).toHaveBeenCalledTimes(0); // Only called on input focus

                // Tab back to end (onFocus)
                await act(async () => {
                    await user.keyboard("{Shift>}{Tab}{/Shift}");
                });
                expect(screen.getByLabelText(END_LABEL)).toHaveFocus();
                expect(mockOnFocus).toHaveBeenCalledTimes(1);
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();

                // Tab back to start
                await act(async () => {
                    await user.keyboard("{Shift>}{Tab}{/Shift}");
                });
                expect(screen.getByLabelText(START_LABEL)).toHaveFocus();
                expect(mockOnFocus).toHaveBeenCalledTimes(1);
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            }, 10000);
        });

        describe("readonly/disabled behavior", () => {
            it("should be disabled when 'disabled' prop is true", async () => {
                const user = userEvent.setup();
                render(<TimeRangePicker variant={"combobox"} disabled />);

                const start = screen.getByLabelText(START_LABEL);
                const end = screen.getByLabelText(END_LABEL);

                expect(start).toHaveAttribute("aria-disabled", "true");
                expect(end).toHaveAttribute("aria-disabled", "true");
                expect(start).not.toHaveAttribute("disabled");
                expect(end).not.toHaveAttribute("disabled");

                await user.click(start);
                expect(
                    screen.queryByTestId(DROPDOWN_TESTID)
                ).not.toBeInTheDocument();
            });

            it("should be readOnly when 'readOnly' prop is true", async () => {
                const user = userEvent.setup();
                render(<TimeRangePicker variant={"combobox"} readOnly />);

                const start = screen.getByLabelText(START_LABEL);
                expect(start).toHaveAttribute("readonly");
                expect(start).toHaveAttribute("aria-readonly", "true");

                await user.click(start);
                expect(
                    screen.queryByTestId(DROPDOWN_TESTID)
                ).not.toBeInTheDocument();
            });
        });
    });

    describe("Dial variant", () => {
        const getFrom = () => screen.getByTestId("timepicker-selector-from");
        const getTo = () => screen.getByTestId("timepicker-selector-to");
        const getTimepickerDropdown = () =>
            screen.queryByTestId("timepicker-dropdown");

        const getHourInput = () => screen.getByTestId("hour-input");
        const getMinuteInput = () => screen.getByTestId("minute-input");
        const getDoneButton = () => screen.getByTestId("confirm-button");
        const getCancelButton = () => screen.getByTestId("cancel-button");

        const setTimeAndDone = async (
            user: ReturnType<typeof userEvent.setup>,
            hour: string,
            minute: string
        ) => {
            await user.clear(getHourInput());
            await user.type(getHourInput(), hour);
            await user.clear(getMinuteInput());
            await user.type(getMinuteInput(), minute);
            await user.click(getDoneButton());
        };

        it("should render the component", () => {
            render(<TimeRangePicker />);

            expect(getFrom()).toBeInTheDocument();
            expect(getTo()).toBeInTheDocument();
            expect(getTimepickerDropdown()).not.toBeInTheDocument();
        });

        it("should open dropdown on input click", async () => {
            const user = userEvent.setup();

            render(<TimeRangePicker />);
            await user.click(getFrom());
            await waitFor(() => expect(getTimepickerDropdown()).toBeVisible());
        });

        it("should call onFocus on click", async () => {
            const user = userEvent.setup();
            const mockOnFocus = jest.fn();

            render(<TimeRangePicker onFocus={mockOnFocus} />);

            await user.click(getFrom());
            await waitFor(() => expect(getTimepickerDropdown()).toBeVisible());
            expect(mockOnFocus).toHaveBeenCalledTimes(1);
        });

        it("should close dropdown upon input completion", async () => {
            const user = userEvent.setup();
            const mockOnChange = jest.fn();
            const mockOnBlur = jest.fn();

            render(
                <TimeRangePicker
                    onChange={mockOnChange}
                    onBlur={mockOnBlur}
                    format="24hr"
                />
            );

            await user.click(getFrom());
            await waitFor(() => expect(getTimepickerDropdown()).toBeVisible());
            await setTimeAndDone(user, "09", "00");

            await waitFor(() => expect(getTimepickerDropdown()).toBeVisible());
            await setTimeAndDone(user, "10", "00");

            await waitForElementToBeRemoved(() => getTimepickerDropdown());

            expect(mockOnChange).toHaveBeenCalledTimes(2);
            expect(mockOnChange).toHaveBeenLastCalledWith({
                start: "09:00",
                end: "10:00",
            });
            expect(getTimepickerDropdown()).not.toBeInTheDocument();
        });

        it("should close dropdown and keep focus when Cancel is clicked", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            render(
                <>
                    <TimeRangePicker onBlur={mockOnBlur} />
                </>
            );

            await user.click(getFrom());
            await waitFor(() => expect(getTimepickerDropdown()).toBeVisible());

            await user.click(getCancelButton());

            await waitForElementToBeRemoved(() => getTimepickerDropdown());

            expect(mockOnBlur).toHaveBeenCalledTimes(0);
            expect(screen.getByTestId("timepicker-container")).toHaveFocus();

            await act(async () => {
                await user.click(document.body);
            });
            expect(mockOnBlur).toHaveBeenCalledTimes(1);
            expect(
                screen.getByTestId("timepicker-container")
            ).not.toHaveFocus();
        });

        it("should close dropdown and call onBlur when clicking outside", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            render(<TimeRangePicker onBlur={mockOnBlur} />);

            await act(async () => {
                await user.click(getFrom());
            });
            await waitFor(() => expect(getTimepickerDropdown()).toBeVisible());

            await act(async () => {
                await user.click(document.body);
            });

            await waitForElementToBeRemoved(() => getTimepickerDropdown());
            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it("should close dropdown and keep focus when ESC is pressed", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            render(<TimeRangePicker onBlur={mockOnBlur} />);

            await user.click(getFrom());
            await waitFor(() => expect(getTimepickerDropdown()).toBeVisible());

            await user.keyboard("{Escape}");

            await waitForElementToBeRemoved(() => getTimepickerDropdown());

            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            expect(screen.getByTestId("timepicker-container")).toHaveFocus();

            await act(async () => {
                await user.click(document.body);
            });

            expect(mockOnBlur).toHaveBeenCalledTimes(1);
            expect(
                screen.getByTestId("timepicker-container")
            ).not.toHaveFocus();
        });

        it("should call onFocus once only when moving from start to end", async () => {
            const user = userEvent.setup();
            const mockOnFocus = jest.fn();

            render(<TimeRangePicker onFocus={mockOnFocus} />);

            await user.click(getFrom());
            await waitFor(() => expect(getTimepickerDropdown()).toBeVisible());
            expect(mockOnFocus).toHaveBeenCalledTimes(1);

            await user.click(getTo());
            await waitFor(() => expect(getTimepickerDropdown()).toBeVisible());
            expect(mockOnFocus).toHaveBeenCalledTimes(1);
        });
    });
});
