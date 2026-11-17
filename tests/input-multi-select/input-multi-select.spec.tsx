import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { Form } from "src/form";
import { InputMultiSelect } from "src/input-multi-select";

import { setupCommonDomMocks } from "../_common";
import { waitForElementToBeRemoved } from "../_common/waitForElementRemoved";

jest.mock("react-resize-detector");

const FIELD_TESTID = "test";
const SELECTOR_TESTID = "selector";
const DROPDOWN_TESTID = "dropdown-list";
const OPTIONS = ["Option 1", "Option 2", "Option 3"];
const LABEL = "Form label";

const ControlledTagSelect = ({ initial }: { initial: string[] }) => {
    const [selected, setSelected] = useState<string[]>(initial);

    return (
        <InputMultiSelect
            data-testid={FIELD_TESTID}
            options={OPTIONS}
            selectedOptions={selected}
            onSelectOptions={setSelected}
            displayVariant="tag"
        />
    );
};

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

    describe("count display variant", () => {
        it.each([
            ["the placeholder", [], "Select"],
            ["the selected count", ["Option 1", "Option 2"], "2 selected"],
            ["all selected", OPTIONS, "All selected"],
        ])(
            "should name the combobox by the label and give %s as its value",
            (_, selectedOptions, value) => {
                render(
                    <Form.MultiSelect
                        label={LABEL}
                        options={OPTIONS}
                        selectedOptions={selectedOptions}
                    />
                );

                expect(
                    screen.getByRole("combobox", { name: LABEL })
                ).toHaveTextContent(value);
            }
        );
    });

    describe("tag display variant", () => {
        it("should show one tag per selected option", () => {
            render(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    selectedOptions={["Option 1", "Option 2"]}
                    displayVariant="tag"
                />
            );

            expect(screen.getByText("Option 1")).toBeInTheDocument();
            expect(screen.getByText("Option 2")).toBeInTheDocument();
            // the count is rendered inside the combobox, visually hidden
            expect(screen.getByRole("combobox")).toHaveTextContent(
                "2 selected"
            );
        });

        it("should use the same labels as the dropdown items", () => {
            render(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={[{ name: "Apple" }, { name: "Banana" }]}
                    selectedOptions={[{ name: "Banana" }]}
                    listExtractor={(item) => item.name}
                    displayVariant="tag"
                />
            );

            expect(screen.getByText("Banana")).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "Remove Banana" })
            ).toBeInTheDocument();
        });

        it("should keep the count display by default", () => {
            render(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    selectedOptions={["Option 1", "Option 2"]}
                />
            );

            expect(screen.getByText("2 selected")).toBeVisible();
            expect(
                screen.queryByRole("button", { name: /^Remove/ })
            ).not.toBeInTheDocument();
        });

        it("should show the placeholder when nothing is selected", () => {
            render(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    displayVariant="tag"
                />
            );

            expect(screen.getByText("Select")).toBeVisible();
            expect(
                screen.queryByRole("button", { name: /^Remove/ })
            ).not.toBeInTheDocument();
        });

        it("should deselect the option without opening the dropdown when x is clicked", async () => {
            const user = userEvent.setup();
            const mockOnSelectOptions = jest.fn();

            render(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    selectedOptions={["Option 1", "Option 2"]}
                    onSelectOptions={mockOnSelectOptions}
                    displayVariant="tag"
                />
            );

            await user.click(
                screen.getByRole("button", { name: "Remove Option 1" })
            );

            expect(mockOnSelectOptions).toHaveBeenCalledWith(["Option 2"]);
            expect(
                screen.queryByTestId(DROPDOWN_TESTID)
            ).not.toBeInTheDocument();
        });

        it("should open the dropdown when the field is clicked", async () => {
            const user = userEvent.setup();

            render(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    selectedOptions={["Option 1"]}
                    displayVariant="tag"
                />
            );

            // the tags let clicks through to the combobox
            await user.click(screen.getByRole("combobox"));

            await waitFor(() => {
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });
        });

        it("should toggle the dropdown through the combobox", async () => {
            const user = userEvent.setup();

            render(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    displayVariant="tag"
                />
            );

            await user.click(screen.getByTestId(SELECTOR_TESTID));

            await waitFor(() => {
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });
            expect(screen.getByRole("combobox")).toHaveAttribute(
                "aria-expanded",
                "true"
            );

            await user.click(screen.getByTestId(SELECTOR_TESTID));

            await waitFor(() => {
                expect(
                    screen.queryByTestId(DROPDOWN_TESTID)
                ).not.toBeInTheDocument();
            });
        });

        it("should show every tag when all options are selected", () => {
            render(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    selectedOptions={OPTIONS}
                    displayVariant="tag"
                />
            );

            OPTIONS.forEach((option) => {
                expect(screen.getByText(option)).toBeInTheDocument();
            });
            // the label is rendered inside the combobox, visually hidden
            expect(screen.getByRole("combobox")).toHaveTextContent(
                "All selected"
            );
        });

        it("should expose the selected count to assistive technologies", () => {
            render(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    selectedOptions={["Option 1", "Option 2"]}
                    displayVariant="tag"
                />
            );

            expect(screen.getByRole("combobox")).toHaveTextContent(
                "2 selected"
            );
        });

        it("should expose the placeholder to assistive technologies when nothing is selected", () => {
            render(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    placeholder="Pick one"
                    displayVariant="tag"
                />
            );

            expect(screen.getByRole("combobox")).toHaveTextContent("Pick one");
        });

        it.each([
            ["disabled", { disabled: true }],
            ["readOnly", { readOnly: true }],
        ])("should not show the x when %s", (_, props) => {
            render(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    selectedOptions={["Option 1"]}
                    displayVariant="tag"
                    {...props}
                />
            );

            expect(screen.getByText("Option 1")).toBeInTheDocument();
            expect(
                screen.queryByRole("button", { name: /^Remove/ })
            ).not.toBeInTheDocument();
        });

        it("should not nest buttons in the selector", () => {
            render(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    selectedOptions={["Option 1"]}
                    displayVariant="tag"
                />
            );

            expect(
                screen.getByTestId(SELECTOR_TESTID).querySelector("button")
            ).toBeNull();
        });

        describe("accessibility tree", () => {
            it("should name the combobox by the label and give the count as its value", () => {
                render(
                    <Form.MultiSelect
                        label={LABEL}
                        options={OPTIONS}
                        selectedOptions={["Option 1", "Option 2"]}
                        displayVariant="tag"
                    />
                );

                expect(
                    screen.getByRole("combobox", { name: LABEL })
                ).toHaveTextContent("2 selected");
            });

            it("should render the remove buttons alongside the combobox", () => {
                render(
                    <Form.MultiSelect
                        label={LABEL}
                        options={OPTIONS}
                        selectedOptions={["Option 1", "Option 2"]}
                        displayVariant="tag"
                    />
                );

                const combobox = screen.getByRole("combobox", { name: LABEL });
                ["Remove Option 1", "Remove Option 2"].forEach((name) => {
                    expect(combobox).not.toContainElement(
                        screen.getByRole("button", { name })
                    );
                });
            });

            it.each([
                ["disabled", { disabled: true }],
                ["readOnly", { readOnly: true }],
            ])("should keep the count as the value when %s", (_, props) => {
                render(
                    <Form.MultiSelect
                        label={LABEL}
                        options={OPTIONS}
                        selectedOptions={["Option 1", "Option 2"]}
                        displayVariant="tag"
                        {...props}
                    />
                );

                expect(
                    screen.getByRole("combobox", { name: LABEL })
                ).toHaveTextContent("2 selected");
                expect(
                    screen.queryByRole("button", { name: /^Remove/ })
                ).not.toBeInTheDocument();
            });
        });

        describe("keyboard", () => {
            it("should not remove tags on Backspace or Delete", async () => {
                const user = userEvent.setup();

                render(
                    <ControlledTagSelect initial={["Option 1", "Option 2"]} />
                );

                screen.getByRole("combobox").focus();
                await user.keyboard("{Backspace}{Delete}");

                expect(
                    screen.getByRole("button", { name: "Remove Option 1" })
                ).toBeInTheDocument();
                expect(
                    screen.getByRole("button", { name: "Remove Option 2" })
                ).toBeInTheDocument();
            });

            it("should move focus from the combobox to the remove button with Tab", async () => {
                const user = userEvent.setup();

                render(
                    <ControlledTagSelect initial={["Option 1", "Option 2"]} />
                );

                screen.getByRole("combobox").focus();
                await user.tab();

                expect(
                    screen.getByRole("button", { name: "Remove Option 1" })
                ).toHaveFocus();
            });

            it("should remove the tag without opening the dropdown when Enter is pressed on x", async () => {
                const user = userEvent.setup();

                render(
                    <ControlledTagSelect initial={["Option 1", "Option 2"]} />
                );

                screen.getByRole("combobox").focus();
                await user.tab();
                await user.keyboard("{Enter}");

                expect(
                    screen.queryByRole("button", { name: "Remove Option 1" })
                ).not.toBeInTheDocument();
                expect(
                    screen.getByRole("button", { name: "Remove Option 2" })
                ).toBeInTheDocument();
                expect(
                    screen.queryByTestId(DROPDOWN_TESTID)
                ).not.toBeInTheDocument();
            });

            it("should open the dropdown when Enter is pressed on the combobox", async () => {
                const user = userEvent.setup();

                render(
                    <ControlledTagSelect initial={["Option 1", "Option 2"]} />
                );

                screen.getByRole("combobox").focus();
                await user.keyboard("{Enter}");

                await waitFor(() => {
                    expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
                });
            });
        });

        describe("removing tags", () => {
            it("should uncheck the removed option in the dropdown", async () => {
                const user = userEvent.setup();

                render(
                    <ControlledTagSelect initial={["Option 1", "Option 2"]} />
                );

                await user.click(
                    screen.getByRole("button", { name: "Remove Option 1" })
                );
                await user.click(screen.getByRole("combobox"));

                await waitFor(() => {
                    expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
                });
                expect(
                    screen.getByRole("option", { name: "Option 1" })
                ).toHaveAttribute("aria-selected", "false");
                expect(
                    screen.getByRole("option", { name: "Option 2" })
                ).toHaveAttribute("aria-selected", "true");
            });

            it("should show the placeholder after clearing all", async () => {
                const user = userEvent.setup();

                render(
                    <ControlledTagSelect initial={["Option 1", "Option 2"]} />
                );

                await user.click(screen.getByRole("combobox"));
                await user.click(
                    await screen.findByRole("button", { name: "Clear all" })
                );

                expect(
                    screen.queryByRole("button", { name: /^Remove/ })
                ).not.toBeInTheDocument();
                expect(screen.getByRole("combobox")).toHaveTextContent(
                    "Select"
                );
            });
        });
    });
});
