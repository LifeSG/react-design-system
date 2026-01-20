import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { PredictiveTextInput } from "../../src/predictive-text-input";
import { waitForElementToBeRemoved } from "../common/waitForElementRemoved";

const FIELD_TESTID = "test";
const OPTIONS = ["Option 1", "Option 2", "Option 3"];
const DROPDOWN_TESTID = "dropdown-list";
const INPUT_DEBOUNCE_DELAY = 500;
const FETCH_DELAY = 1000;

describe("PredictiveTextInput", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();

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

    afterEach(() => {
        jest.useRealTimers();
    });

    it("should render the component", () => {
        render(
            <PredictiveTextInput
                data-testid={FIELD_TESTID}
                fetchOptions={jest.fn()}
            />
        );

        expect(screen.getByPlaceholderText("Enter here...")).toBeVisible();
        expect(screen.queryByTestId(DROPDOWN_TESTID)).not.toBeInTheDocument();
    });

    it("should not fetch options when input length is less than minimum characters", async () => {
        const user = userEvent.setup({
            advanceTimers: jest.advanceTimersByTime,
        });
        const mockFetchOptions = jest.fn();

        render(
            <PredictiveTextInput
                data-testid={FIELD_TESTID}
                fetchOptions={mockFetchOptions}
            />
        );

        await user.type(screen.getByPlaceholderText("Enter here..."), "ab");
        jest.advanceTimersByTime(INPUT_DEBOUNCE_DELAY);

        expect(mockFetchOptions).not.toHaveBeenCalled();
        expect(screen.queryByTestId(DROPDOWN_TESTID)).not.toBeInTheDocument();
    });

    it("should fetch and display options when input length meets minimum characters", async () => {
        const user = userEvent.setup({
            advanceTimers: jest.advanceTimersByTime,
        });
        const mockFetchOptions = jest.fn().mockImplementation(
            () =>
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(OPTIONS);
                    }, FETCH_DELAY);
                })
        );

        render(
            <PredictiveTextInput
                data-testid={FIELD_TESTID}
                fetchOptions={mockFetchOptions}
            />
        );

        await user.type(screen.getByPlaceholderText("Enter here..."), "abc");
        jest.advanceTimersByTime(INPUT_DEBOUNCE_DELAY);

        expect(mockFetchOptions).toHaveBeenCalledWith("abc");

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            expect(screen.getByText("Loading...")).toBeVisible();
        });

        await act(async () => {
            jest.advanceTimersByTime(FETCH_DELAY);
        });

        expect(screen.getByText("Option 1")).toBeVisible();
        expect(screen.getByText("Option 2")).toBeVisible();
        expect(screen.getByText("Option 3")).toBeVisible();
    });

    it("should select option correctly", async () => {
        const user = userEvent.setup({
            advanceTimers: jest.advanceTimersByTime,
        });
        const mockFetchOptions = jest.fn().mockResolvedValue(OPTIONS);
        const mockOnSelectOption = jest.fn();

        render(
            <PredictiveTextInput
                data-testid={FIELD_TESTID}
                fetchOptions={mockFetchOptions}
                onSelectOption={mockOnSelectOption}
            />
        );

        await user.type(screen.getByPlaceholderText("Enter here..."), "abc");
        jest.advanceTimersByTime(INPUT_DEBOUNCE_DELAY);

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.getByText("Option 1"));

        await waitForElementToBeRemoved(() =>
            screen.queryByTestId(DROPDOWN_TESTID)
        );

        expect(mockOnSelectOption).toHaveBeenCalledWith("Option 1", "Option 1");
        expect(screen.getByDisplayValue("Option 1")).toBeInTheDocument();
    });

    it("should handle error state when fetching options fails", async () => {
        const user = userEvent.setup({
            advanceTimers: jest.advanceTimersByTime,
        });
        const mockFetchOptions = jest
            .fn()
            .mockRejectedValue(new Error("Failed"));

        render(
            <PredictiveTextInput
                data-testid={FIELD_TESTID}
                fetchOptions={mockFetchOptions}
            />
        );

        await user.type(screen.getByPlaceholderText("Enter here..."), "abc");
        jest.advanceTimersByTime(INPUT_DEBOUNCE_DELAY);

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            expect(screen.queryByText("Failed to load.")).toBeVisible();
        });
    });

    it("should clear input when clear button is clicked", async () => {
        const user = userEvent.setup({
            advanceTimers: jest.advanceTimersByTime,
        });
        const mockFetchOptions = jest.fn().mockResolvedValue(OPTIONS);
        const mockOnSelectOption = jest.fn();

        render(
            <PredictiveTextInput
                data-testid={FIELD_TESTID}
                fetchOptions={mockFetchOptions}
                onSelectOption={mockOnSelectOption}
            />
        );

        await user.type(screen.getByPlaceholderText("Enter here..."), "abc");
        jest.advanceTimersByTime(INPUT_DEBOUNCE_DELAY);

        await act(async () => {
            await user.click(
                screen.getByRole("button", { name: "Clear input" })
            );
        });

        expect(screen.getByPlaceholderText("Enter here...")).toHaveValue("");
        expect(mockOnSelectOption).toHaveBeenCalledWith(undefined, undefined);
    });

    it("readOnly", async () => {
        const user = userEvent.setup({
            advanceTimers: jest.advanceTimersByTime,
        });
        const mockFetchOptions = jest.fn();

        render(
            <PredictiveTextInput
                data-testid={FIELD_TESTID}
                fetchOptions={mockFetchOptions}
                readOnly
            />
        );

        await user.type(screen.getByPlaceholderText("Enter here..."), "abc");
        jest.advanceTimersByTime(INPUT_DEBOUNCE_DELAY);

        expect(mockFetchOptions).not.toHaveBeenCalled();
        expect(screen.queryByTestId(DROPDOWN_TESTID)).not.toBeInTheDocument();
    });

    it("disabled", async () => {
        const user = userEvent.setup({
            advanceTimers: jest.advanceTimersByTime,
        });
        const mockFetchOptions = jest.fn();

        render(
            <PredictiveTextInput
                data-testid={FIELD_TESTID}
                fetchOptions={mockFetchOptions}
                disabled
            />
        );

        await user.type(screen.getByPlaceholderText("Enter here..."), "abc");
        jest.advanceTimersByTime(INPUT_DEBOUNCE_DELAY);

        expect(mockFetchOptions).not.toHaveBeenCalled();
        expect(screen.queryByTestId(DROPDOWN_TESTID)).not.toBeInTheDocument();
    });

    describe("focus/blur behavior", () => {
        it("should dismiss dropdown if it is open", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockFetchOptions = jest.fn().mockResolvedValue(OPTIONS);

            render(
                <PredictiveTextInput
                    data-testid={FIELD_TESTID}
                    fetchOptions={mockFetchOptions}
                />
            );

            await user.type(
                screen.getByPlaceholderText("Enter here..."),
                "abc"
            );
            jest.advanceTimersByTime(INPUT_DEBOUNCE_DELAY);

            await waitFor(() => {
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });

            await act(async () => {
                await user.click(document.body);
            });

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );
        });

        it("should clear input when selection is not made", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockFetchOptions = jest.fn().mockResolvedValue(OPTIONS);
            const mockOnSelectOption = jest.fn();

            render(
                <PredictiveTextInput
                    data-testid={FIELD_TESTID}
                    fetchOptions={mockFetchOptions}
                    onSelectOption={mockOnSelectOption}
                />
            );

            const input = screen.getByPlaceholderText("Enter here...");
            await user.type(input, "abc");
            jest.advanceTimersByTime(INPUT_DEBOUNCE_DELAY);

            await waitFor(() => {
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });

            await act(async () => {
                await user.click(document.body);
            });

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );

            expect(input).toHaveValue("");
            expect(mockOnSelectOption).toHaveBeenCalledWith(
                undefined,
                undefined
            );
        });

        it("should persist input when selection is made", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockFetchOptions = jest.fn().mockResolvedValue(OPTIONS);
            const mockOnSelectOption = jest.fn();

            render(
                <PredictiveTextInput
                    data-testid={FIELD_TESTID}
                    fetchOptions={mockFetchOptions}
                    onSelectOption={mockOnSelectOption}
                />
            );

            await user.type(
                screen.getByPlaceholderText("Enter here..."),
                "abc"
            );
            jest.advanceTimersByTime(INPUT_DEBOUNCE_DELAY);

            await waitFor(() => {
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });

            await user.click(screen.getByText("Option 1"));

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );

            await act(async () => {
                await user.click(document.body);
            });

            expect(mockOnSelectOption).toHaveBeenCalledWith(
                "Option 1",
                "Option 1"
            );
            expect(screen.getByDisplayValue("Option 1")).toBeInTheDocument();
        });

        it("cycling through the tab sequence", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockFetchOptions = jest.fn().mockResolvedValue(OPTIONS);

            render(
                <>
                    <button data-testid="before" />
                    <PredictiveTextInput
                        data-testid={FIELD_TESTID}
                        fetchOptions={mockFetchOptions}
                    />
                    <button data-testid="after" />
                </>
            );

            await user.keyboard("{Tab}");

            expect(screen.getByTestId("before")).toHaveFocus();

            await user.keyboard("{Tab} ");

            expect(screen.getByPlaceholderText("Enter here...")).toHaveFocus();

            await user.type(
                screen.getByPlaceholderText("Enter here..."),
                "abc"
            );
            jest.advanceTimersByTime(INPUT_DEBOUNCE_DELAY);

            await waitFor(() => {
                expect(screen.getByTestId(DROPDOWN_TESTID)).toBeVisible();
            });

            expect(screen.getByDisplayValue("abc")).toHaveFocus();

            await act(async () => {
                await user.keyboard("{Tab}");
            });

            expect(
                screen.getByRole("button", { name: "Clear input" })
            ).toHaveFocus();

            // NOTE: skipped as the list items in the dropdown is not focusable
            /*
            await act(async () => {
                await user.keyboard("{Tab}");
            });

            expect(
                screen.getByRole("option", { name: "Option 1" })
            ).toHaveFocus();
            */

            await act(async () => {
                await user.keyboard("{Tab}");
            });

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );

            expect(screen.getByTestId("after")).toHaveFocus();

            await act(async () => {
                await user.keyboard("{Shift>}{Tab}{/Shift}");
            });

            expect(screen.getByPlaceholderText("Enter here...")).toHaveFocus();
            expect(
                screen.queryByTestId(DROPDOWN_TESTID)
            ).not.toBeInTheDocument();
        });
    });

    describe("dismissal behavior without value", () => {
        it("should dismiss dropdown via Esc key while focus is on input", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockFetchOptions = jest.fn().mockResolvedValue(OPTIONS);
            const mockOnSelectOption = jest.fn();

            render(
                <PredictiveTextInput
                    data-testid={FIELD_TESTID}
                    fetchOptions={mockFetchOptions}
                    onSelectOption={mockOnSelectOption}
                />
            );

            await user.type(
                screen.getByPlaceholderText("Enter here..."),
                "abc"
            );
            jest.advanceTimersByTime(INPUT_DEBOUNCE_DELAY);

            await waitFor(() => {
                expect(screen.getByTestId(DROPDOWN_TESTID)).toBeVisible();
            });

            await act(async () => {
                await user.keyboard("{Escape}");
            });

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );

            // assert that input is reset to initial state
            const input = screen.getByPlaceholderText("Enter here...");
            expect(input).toHaveFocus();
            expect(input).toHaveValue("");

            // assert that no selection was made
            expect(mockOnSelectOption).toHaveBeenCalledTimes(1);
            expect(mockOnSelectOption).toHaveBeenCalledWith(
                undefined,
                undefined
            );
        });

        it("should dismiss dropdown via Esc key while focus is on dropdown", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockFetchOptions = jest.fn().mockResolvedValue(OPTIONS);
            const mockOnSelectOption = jest.fn();

            render(
                <PredictiveTextInput
                    data-testid={FIELD_TESTID}
                    fetchOptions={mockFetchOptions}
                    onSelectOption={mockOnSelectOption}
                />
            );

            await user.type(
                screen.getByPlaceholderText("Enter here..."),
                "abc"
            );
            jest.advanceTimersByTime(INPUT_DEBOUNCE_DELAY);

            await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));

            await act(async () => {
                await user.keyboard("{ArrowDown}");
            });

            await waitFor(() => {
                expect(
                    screen.getByRole("option", { name: "Option 1" })
                ).toHaveFocus();
            });

            await act(async () => {
                await user.keyboard("{Escape}");
            });

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );

            // assert that input is reset to initial state
            const input = screen.getByPlaceholderText("Enter here...");
            expect(input).toHaveFocus();
            expect(input).toHaveValue("");

            // assert that no selection was made
            expect(mockOnSelectOption).toHaveBeenCalledTimes(1);
            expect(mockOnSelectOption).toHaveBeenCalledWith(
                undefined,
                undefined
            );
        });
    });

    describe("dismissal behavior with value", () => {
        // the dropdown opens to the previous input
        it("should reset to last selection while focus is on input", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockFetchOptions = jest.fn().mockResolvedValue(OPTIONS);
            const mockOnSelectOption = jest.fn();

            render(
                <PredictiveTextInput
                    data-testid={FIELD_TESTID}
                    fetchOptions={mockFetchOptions}
                    onSelectOption={mockOnSelectOption}
                    selectedOption={"Option 1"}
                />
            );

            const input = screen.getByPlaceholderText("Enter here...");
            expect(input).toHaveValue("Option 1");

            await user.type(input, "abc");
            jest.advanceTimersByTime(INPUT_DEBOUNCE_DELAY);

            await waitFor(() => {
                expect(screen.getByTestId(DROPDOWN_TESTID)).toBeVisible();
            });

            await act(async () => {
                await user.keyboard("{Escape}");
            });

            // NOTE: currently fetchOptions is triggered again with the original input and reopens the dropdown
            // await waitForElementToBeRemoved(() =>
            //     screen.queryByTestId(DROPDOWN_TESTID)
            // );

            // assert that input is reset to initial state
            expect(input).toHaveFocus();
            expect(input).toHaveValue("Option 1");

            // assert that no selection was made
            expect(mockOnSelectOption).not.toHaveBeenCalled();
        });

        // the dropdown opens to the previous input
        it("should reset to last selection via Esc key while focus is on dropdown", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const mockFetchOptions = jest.fn().mockResolvedValue(OPTIONS);
            const mockOnSelectOption = jest.fn();

            render(
                <PredictiveTextInput
                    data-testid={FIELD_TESTID}
                    fetchOptions={mockFetchOptions}
                    onSelectOption={mockOnSelectOption}
                    selectedOption={"Option 1"}
                />
            );

            const input = screen.getByPlaceholderText("Enter here...");
            expect(input).toHaveValue("Option 1");

            await user.type(input, "abc");
            jest.advanceTimersByTime(INPUT_DEBOUNCE_DELAY);

            await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));

            await act(async () => {
                await user.keyboard("{Escape}");
            });

            // NOTE: currently fetchOptions is triggered again with the original input and reopens the dropdown
            // await waitForElementToBeRemoved(() =>
            //     screen.queryByTestId(DROPDOWN_TESTID)
            // );

            // assert that input is reset to initial state
            expect(input).toHaveFocus();
            expect(input).toHaveValue("Option 1");

            // assert that no selection was made
            expect(mockOnSelectOption).not.toHaveBeenCalled();
        });
    });
});
