import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputMultiSelect } from "src/input-multi-select";

import { setupCommonDomMocks } from "../_common";
import { waitForElementToBeRemoved } from "../_common/waitForElementRemoved";

jest.mock("react-resize-detector");

const FIELD_TESTID = "test";
const SELECTOR_TESTID = "selector";
const DROPDOWN_TESTID = "dropdown-list";
const OPTIONS = ["Option 1", "Option 2", "Option 3"];

describe("InputMultiSelect", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        setupCommonDomMocks();
    });

    it("should render the component", async () => {
        render(
            <InputMultiSelect data-testid={FIELD_TESTID} options={OPTIONS} />
        );

        expect(screen.getByText("Select")).toBeVisible();
        expect(screen.queryByTestId(DROPDOWN_TESTID)).not.toBeInTheDocument();
    });

    it("should open dropdown list when selector is clicked", async () => {
        const user = userEvent.setup();

        render(
            <InputMultiSelect data-testid={FIELD_TESTID} options={OPTIONS} />
        );

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

        render(
            <InputMultiSelect data-testid={FIELD_TESTID} options={OPTIONS} />
        );

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

    it("should trigger onShowOptions and onHideOptions callbacks", async () => {
        const user = userEvent.setup();
        const mockOnShowOptions = jest.fn();
        const mockOnHideOptions = jest.fn();

        render(
            <InputMultiSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                onShowOptions={mockOnShowOptions}
                onHideOptions={mockOnHideOptions}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        expect(mockOnShowOptions).toHaveBeenCalledTimes(1);
        expect(mockOnHideOptions).toHaveBeenCalledTimes(0);

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(
                screen.queryByTestId(DROPDOWN_TESTID)
            ).not.toBeInTheDocument();
        });

        expect(mockOnShowOptions).toHaveBeenCalledTimes(1);
        expect(mockOnHideOptions).toHaveBeenCalledTimes(1);
    });

    it("should dismiss dropdown through custom cta callback", async () => {
        const user = userEvent.setup();
        const mockOnShowOptions = jest.fn();
        const mockOnHideOptions = jest.fn();

        render(
            <InputMultiSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                onShowOptions={mockOnShowOptions}
                onHideOptions={mockOnHideOptions}
                renderCustomCallToAction={(onDismiss) => (
                    <button type="button" onClick={onDismiss}>
                        Done
                    </button>
                )}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        expect(mockOnShowOptions).toHaveBeenCalledTimes(1);
        expect(mockOnHideOptions).toHaveBeenCalledTimes(0);

        await user.click(screen.getByRole("button", { name: "Done" }));

        await waitFor(() => {
            expect(
                screen.queryByTestId(DROPDOWN_TESTID)
            ).not.toBeInTheDocument();
        });

        expect(mockOnHideOptions).toHaveBeenCalledTimes(1);
    });

    it("should render loading spinner when options are loading", async () => {
        const user = userEvent.setup();

        render(
            <InputMultiSelect
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
        const mockOnSelectOptions = jest.fn();

        render(
            <InputMultiSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                onSelectOptions={mockOnSelectOptions}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.getByText("Option 1"));

        expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        expect(mockOnSelectOptions).toHaveBeenCalledWith(["Option 1"]);
    });

    it("should deselect item using valueExtractor comparison", async () => {
        const user = userEvent.setup();
        const mockOnSelectOptions = jest.fn();
        const objectOptions = [
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
        ];

        render(
            <InputMultiSelect
                data-testid={FIELD_TESTID}
                options={objectOptions}
                selectedOptions={[objectOptions[0]]}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                onSelectOptions={mockOnSelectOptions}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.getByText("Option 1"));

        expect(mockOnSelectOptions).toHaveBeenCalledWith([]);
    });

    it("should select all items when select all is clicked", async () => {
        const user = userEvent.setup();
        const mockOnSelectOptions = jest.fn();

        render(
            <InputMultiSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                onSelectOptions={mockOnSelectOptions}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.getByRole("button", { name: "Select all" }));

        expect(mockOnSelectOptions).toHaveBeenCalledWith(OPTIONS);
    });

    it("should clear all items when select all is clicked twice", async () => {
        const user = userEvent.setup();
        const mockOnSelectOptions = jest.fn();

        render(
            <InputMultiSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                onSelectOptions={mockOnSelectOptions}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.getByRole("button", { name: "Select all" }));
        await user.click(screen.getByRole("button", { name: "Clear all" }));

        expect(mockOnSelectOptions).toHaveBeenNthCalledWith(1, OPTIONS);
        expect(mockOnSelectOptions).toHaveBeenNthCalledWith(2, []);
    });

    it("should clear all items when maxSelectable is set", async () => {
        const user = userEvent.setup();
        const mockOnSelectOptions = jest.fn();

        render(
            <InputMultiSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                maxSelectable={2}
                onSelectOptions={mockOnSelectOptions}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.getByRole("button", { name: "Clear all" }));

        expect(mockOnSelectOptions).toHaveBeenCalledWith([]);
    });

    describe("focus/blur behaviour", () => {
        it("should call onBlur via outside click", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            render(
                <InputMultiSelect
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

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );

            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await user.click(document.body);

            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it("should dismiss dropdown if it is open", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            render(
                <InputMultiSelect
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
                <InputMultiSelect
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
                    <InputMultiSelect
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
                await user.keyboard("{Tab}{Tab}");
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
                <InputMultiSelect
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
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    listExtractor={(item) => ({
                        title: item + " title",
                        secondaryLabel: item + " label",
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
                await user.keyboard("1 t");
            });

            expect(screen.getByText("Option 1 title")).toBeVisible();
            expect(
                screen.queryByText("Option 2 title")
            ).not.toBeInTheDocument();
        });

        it("should support default search for label", async () => {
            const user = userEvent.setup();

            render(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    listExtractor={(item) => ({
                        title: item + " title",
                        secondaryLabel: item + " label",
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

            expect(screen.getByText("Option 1 label")).toBeVisible();
            expect(
                screen.queryByText("Option 2 label")
            ).not.toBeInTheDocument();
        });

        it("should support custom search", async () => {
            const user = userEvent.setup();

            render(
                <InputMultiSelect
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
