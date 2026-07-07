import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputSelect } from "src";
import { StringHelper } from "src/util/string-helper";

import { setupCommonDomMocks } from "../_common";
import { waitForElementToBeRemoved } from "../_common/waitForElementRemoved";

jest.mock("react-resize-detector");

const FIELD_TESTID = "test";
const SELECTOR_TESTID = "selector";
const DROPDOWN_TESTID = "dropdown-list";
const OPTIONS = ["Option 1", "Option 2", "Option 3"];

describe("InputSelect", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        setupCommonDomMocks();
    });

    it("should render the component", async () => {
        render(<InputSelect data-testid={FIELD_TESTID} options={OPTIONS} />);

        expect(screen.getByText("Select")).toBeVisible();
        expect(screen.queryByTestId(DROPDOWN_TESTID)).not.toBeInTheDocument();
    });

    it("should open dropdown list when selector is clicked", async () => {
        const user = userEvent.setup();

        render(<InputSelect data-testid={FIELD_TESTID} options={OPTIONS} />);

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        expect(screen.queryByText("Option 1")).toBeVisible();
        expect(screen.queryByText("Option 2")).toBeVisible();
        expect(screen.queryByText("Option 3")).toBeVisible();
    });

    it("should toggle dropdown list when selector is clicked", async () => {
        const user = userEvent.setup();

        render(<InputSelect data-testid={FIELD_TESTID} options={OPTIONS} />);

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(
                screen.queryByTestId(DROPDOWN_TESTID)
            ).not.toBeInTheDocument();
        });
    });

    it("should render loading spinner when options are loading", async () => {
        const user = userEvent.setup();

        render(
            <InputSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                optionsLoadState="loading"
                onRetry={jest.fn()}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.getByTestId("list-loading")).toBeVisible();
        });

        expect(screen.getByText("Loading...")).toBeVisible();
        expect(screen.getByTestId("component-loading-spinner")).toBeVisible();
    });

    it("should select list item correctly", async () => {
        const user = userEvent.setup();
        const mockOnSelectOption = jest.fn();

        render(
            <InputSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                onSelectOption={mockOnSelectOption}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.getByText("Option 1"));

        await waitFor(() => {
            expect(
                screen.queryByTestId(DROPDOWN_TESTID)
            ).not.toBeInTheDocument();
        });

        expect(mockOnSelectOption).toHaveBeenCalledWith("Option 1", "Option 1");
    });

    it("should dismiss dropdown via custom call-to-action", async () => {
        const user = userEvent.setup();
        const mockOnShowOptions = jest.fn();
        const mockOnHideOptions = jest.fn();

        render(
            <InputSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                onShowOptions={mockOnShowOptions}
                onHideOptions={mockOnHideOptions}
                renderCustomCallToAction={(hideOptions) => (
                    <button type="button" onClick={() => hideOptions()}>
                        Dismiss list
                    </button>
                )}
            />
        );

        expect(mockOnShowOptions).toHaveBeenCalledTimes(0);
        expect(mockOnHideOptions).toHaveBeenCalledTimes(0);

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        expect(mockOnShowOptions).toHaveBeenCalledTimes(1);
        expect(mockOnHideOptions).toHaveBeenCalledTimes(0);

        await user.click(screen.getByRole("button", { name: "Dismiss list" }));

        await waitForElementToBeRemoved(() =>
            screen.queryByTestId(DROPDOWN_TESTID)
        );

        expect(mockOnShowOptions).toHaveBeenCalledTimes(1);
        expect(mockOnHideOptions).toHaveBeenCalledTimes(1);
    });

    describe("display value", () => {
        type ObjectOption = {
            id: number;
            label: string;
            code: string;
        };

        const OBJECT_OPTIONS: ObjectOption[] = [
            { id: 1, label: "First option", code: "opt-1" },
            { id: 2, label: "Second option", code: "opt-2" },
        ];

        it("should display selected option using displayValueExtractor", async () => {
            render(
                <InputSelect
                    data-testid={FIELD_TESTID}
                    options={OBJECT_OPTIONS}
                    selectedOption={OBJECT_OPTIONS[0]}
                    displayValueExtractor={(item) =>
                        `Display value: ${item.label}`
                    }
                />
            );

            expect(
                screen.getByText("Display value: First option")
            ).toBeVisible();
        });

        it("should display selected option using valueExtractor and valueToStringFunction", async () => {
            render(
                <InputSelect
                    data-testid={FIELD_TESTID}
                    options={OBJECT_OPTIONS}
                    selectedOption={OBJECT_OPTIONS[0]}
                    valueExtractor={(item) => item.id}
                    valueToStringFunction={(value) => `ID-${value}`}
                />
            );

            expect(screen.getByText("ID-1")).toBeVisible();
        });

        it("should display selected option using extracted value toString when valueToStringFunction is not provided", async () => {
            render(
                <InputSelect
                    data-testid={FIELD_TESTID}
                    options={OBJECT_OPTIONS}
                    selectedOption={OBJECT_OPTIONS[0]}
                    valueExtractor={(item) => item.code}
                />
            );

            expect(screen.getByText("opt-1")).toBeVisible();
        });

        it("should display truncated value when middle truncation is enabled", async () => {
            const truncateSpy = jest
                .spyOn(StringHelper, "truncateOneLine")
                .mockReturnValue("Fir...ion");

            render(
                <InputSelect
                    data-testid={FIELD_TESTID}
                    options={OBJECT_OPTIONS}
                    selectedOption={OBJECT_OPTIONS[0]}
                    displayValueExtractor={(item) => item.label}
                    optionTruncationType="middle"
                />
            );

            expect(truncateSpy).toHaveBeenCalled();
            expect(screen.getByText("Fir...ion")).toBeVisible();
            expect(screen.queryByText("First option")).not.toBeInTheDocument();

            truncateSpy.mockRestore();
        });
    });

    describe("focus/blur behaviour", () => {
        it("should call onBlur via outside click", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            render(
                <InputSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    onBlur={mockOnBlur}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
            await waitFor(() =>
                expect(
                    screen.queryByRole("option", { name: "Option 1" })
                ).toHaveFocus()
            );

            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await user.click(screen.getByText("Option 1"));

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );

            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await act(async () => {
                await user.click(document.body);
            });

            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it("should dismiss dropdown if it is open", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            render(
                <InputSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    onBlur={mockOnBlur}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
            await waitFor(() =>
                expect(
                    screen.queryByRole("option", { name: "Option 1" })
                ).toHaveFocus()
            );

            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await act(async () => {
                await user.click(document.body);
            });

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );

            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it("should dismiss dropdown via Esc key", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            render(
                <InputSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    onBlur={mockOnBlur}
                />
            );

            await act(async () => {
                await user.click(screen.getByTestId(FIELD_TESTID));
            });

            await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
            await waitFor(() =>
                expect(
                    screen.queryByRole("option", { name: "Option 1" })
                ).toHaveFocus()
            );

            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await act(async () => {
                await user.keyboard("{Escape}");
            });

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );

            expect(screen.queryByTestId(SELECTOR_TESTID)).toHaveFocus();
            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await act(async () => {
                await user.click(document.body);
            });

            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it("should call onFocus and onBlur when cycling through the tab sequence", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            render(
                <>
                    <button data-testid="before" />
                    <InputSelect
                        data-testid={FIELD_TESTID}
                        options={OPTIONS}
                        onBlur={mockOnBlur}
                        enableSearch
                    />
                    <button data-testid="after" />
                </>
            );

            await user.keyboard("{Tab}");

            expect(screen.getByTestId("before")).toHaveFocus();

            await user.keyboard("{Tab} ");

            await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
            await waitFor(() => {
                expect(
                    screen.getByLabelText("Enter text to search")
                ).toHaveFocus();
            });
            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await act(async () => {
                await user.keyboard("{Tab}");
            });

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );

            expect(screen.getByTestId("after")).toHaveFocus();
            expect(mockOnBlur).toHaveBeenCalledTimes(1);

            await act(async () => {
                await user.keyboard("{Shift>}{Tab}{/Shift}");
            });

            await waitFor(() => {
                expect(screen.queryByTestId(SELECTOR_TESTID)).toHaveFocus();
                expect(
                    screen.queryByTestId(DROPDOWN_TESTID)
                ).not.toBeInTheDocument();
                expect(mockOnBlur).toHaveBeenCalledTimes(1);
            });
        });
    });

    describe("search behaviour", () => {
        it("should support default search for string options", async () => {
            const user = userEvent.setup();

            render(
                <InputSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    enableSearch
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => {
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });
            await waitFor(() => {
                expect(
                    screen.getByLabelText("Enter text to search")
                ).toHaveFocus();
            });

            await act(async () => {
                await user.keyboard("1");
            });

            expect(screen.queryByText("Option 1")).toBeVisible();
            expect(screen.queryByText("Option 2")).not.toBeInTheDocument();
        });

        it("should support default search for title", async () => {
            const user = userEvent.setup();

            render(
                <InputSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    listExtractor={(item) => ({
                        title: item + " tItLe",
                        secondaryLabel: item + " LaBeL",
                    })}
                    enableSearch
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => {
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });
            await waitFor(() => {
                expect(
                    screen.getByLabelText("Enter text to search")
                ).toHaveFocus();
            });

            await act(async () => {
                await user.keyboard("1 T");
            });

            expect(screen.getByText("Option 1 tItLe")).toBeVisible();
            expect(
                screen.queryByText("Option 2 tItLe")
            ).not.toBeInTheDocument();
        });

        it("should support default search for label", async () => {
            const user = userEvent.setup();

            render(
                <InputSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    listExtractor={(item) => ({
                        title: item + " tItLe",
                        secondaryLabel: item + " LaBeL",
                    })}
                    enableSearch
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => {
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });
            await waitFor(() => {
                expect(
                    screen.getByLabelText("Enter text to search")
                ).toHaveFocus();
            });

            await act(async () => {
                await user.keyboard("1 l");
            });

            expect(screen.getByText("Option 1 LaBeL")).toBeVisible();
            expect(
                screen.queryByText("Option 2 LaBeL")
            ).not.toBeInTheDocument();
        });

        it("should support custom search", async () => {
            const user = userEvent.setup();

            render(
                <InputSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    enableSearch
                    searchFunction={() => ["custom 1"]}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => {
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });
            await waitFor(() => {
                expect(
                    screen.getByLabelText("Enter text to search")
                ).toHaveFocus();
            });

            await act(async () => {
                await user.keyboard("custom");
            });

            expect(screen.queryByText("custom 1")).toBeVisible();
            expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
        });
    });
});
