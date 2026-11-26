import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputMultiSelect } from "../../src/input-multi-select";
import { waitForElementToBeRemoved } from "../common/waitForElementRemoved";
import { useState } from "react";
import { Form } from "../../src";

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

    describe("displayVariant", () => {
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

            it("should be the default display", () => {
                render(
                    <InputMultiSelect
                        data-testid={FIELD_TESTID}
                        options={OPTIONS}
                        selectedOptions={["Option 1", "Option 2"]}
                    />
                );

                const selector = screen.getByTestId(SELECTOR_TESTID);
                expect(selector.tagName).toBe("BUTTON");
                expect(screen.getByText("2 selected")).toBeVisible();
                expect(
                    screen.queryByTestId("selected-tag-list")
                ).not.toBeInTheDocument();
                expect(
                    screen.queryByRole("button", { name: /^Remove/ })
                ).not.toBeInTheDocument();
            });

            it("should show the custom all selected label", () => {
                render(
                    <InputMultiSelect
                        data-testid={FIELD_TESTID}
                        options={OPTIONS}
                        selectedOptions={OPTIONS}
                        customLabels={{ allSelectedLabel: "Everything" }}
                    />
                );

                expect(screen.getByText("Everything")).toBeVisible();
            });
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
                expect(screen.queryByText("Option 3")).not.toBeInTheDocument();
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

            it("should use the title when listExtractor returns an object", () => {
                render(
                    <InputMultiSelect
                        data-testid={FIELD_TESTID}
                        options={OPTIONS}
                        selectedOptions={["Option 1"]}
                        listExtractor={(item) => ({
                            title: item + " title",
                            secondaryLabel: item + " label",
                        })}
                        displayVariant="tag"
                    />
                );

                expect(screen.getByText("Option 1 title")).toBeInTheDocument();
                expect(
                    screen.queryByText("Option 1 label")
                ).not.toBeInTheDocument();
                expect(
                    screen.getByRole("button", {
                        name: "Remove Option 1 title",
                    })
                ).toBeInTheDocument();
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

            it("should use the custom all selected label", () => {
                render(
                    <InputMultiSelect
                        data-testid={FIELD_TESTID}
                        options={OPTIONS}
                        selectedOptions={OPTIONS}
                        customLabels={{ allSelectedLabel: "Everything" }}
                        displayVariant="tag"
                    />
                );

                expect(screen.getByRole("combobox")).toHaveTextContent(
                    "Everything"
                );
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

            it("should add and remove tags when options are toggled in the dropdown", async () => {
                const user = userEvent.setup();

                render(<ControlledTagSelect initial={["Option 1"]} />);

                await user.click(screen.getByRole("combobox"));
                await waitFor(() => {
                    expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
                });

                await user.click(
                    screen.getByRole("option", { name: "Option 3" })
                );
                expect(
                    screen.getByRole("button", { name: "Remove Option 3" })
                ).toBeInTheDocument();

                await user.click(
                    screen.getByRole("option", { name: "Option 1" })
                );
                expect(
                    screen.queryByRole("button", {
                        name: "Remove Option 1",
                    })
                ).not.toBeInTheDocument();
            });

            it.each([
                ["disabled", { disabled: true }],
                ["readOnly", { readOnly: true }],
            ])("should show the tags without the x when %s", (_, props) => {
                render(
                    <InputMultiSelect
                        data-testid={FIELD_TESTID}
                        options={OPTIONS}
                        selectedOptions={["Option 1", "Option 2"]}
                        displayVariant="tag"
                        {...props}
                    />
                );

                expect(screen.getByText("Option 1")).toBeInTheDocument();
                expect(screen.getByRole("combobox")).toHaveTextContent(
                    "2 selected"
                );
                expect(
                    screen.queryByRole("button", { name: /^Remove/ })
                ).not.toBeInTheDocument();
            });

            it.each([
                ["disabled", { disabled: true }],
                ["readOnly", { readOnly: true }],
            ])("should not open the dropdown when %s", async (_, props) => {
                const user = userEvent.setup();

                render(
                    <InputMultiSelect
                        data-testid={FIELD_TESTID}
                        options={OPTIONS}
                        selectedOptions={["Option 1"]}
                        displayVariant="tag"
                        {...props}
                    />
                );

                await user.click(screen.getByTestId(SELECTOR_TESTID));

                expect(
                    screen.queryByTestId(DROPDOWN_TESTID)
                ).not.toBeInTheDocument();
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

                it("should name the combobox by an external label", () => {
                    render(
                        <>
                            <span id="lbl">Fruits</span>
                            <InputMultiSelect
                                options={OPTIONS}
                                selectedOptions={["Option 1", "Option 2"]}
                                displayVariant="tag"
                                aria-labelledby="lbl"
                            />
                        </>
                    );

                    const combobox = screen.getByRole("combobox");
                    expect(combobox).toHaveAccessibleName("Fruits");
                    expect(combobox).toHaveTextContent("2 selected");
                });

                it("should expose the placeholder when nothing is selected", () => {
                    render(
                        <InputMultiSelect
                            data-testid={FIELD_TESTID}
                            options={OPTIONS}
                            placeholder="Pick one"
                            displayVariant="tag"
                        />
                    );

                    expect(screen.getByRole("combobox")).toHaveTextContent(
                        "Pick one"
                    );
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

                    const combobox = screen.getByRole("combobox", {
                        name: LABEL,
                    });
                    ["Remove Option 1", "Remove Option 2"].forEach((name) => {
                        expect(combobox).not.toContainElement(
                            screen.getByRole("button", { name })
                        );
                    });
                });
            });

            describe("keyboard", () => {
                it("should not remove tags on Backspace or Delete", async () => {
                    const user = userEvent.setup();

                    render(
                        <ControlledTagSelect
                            initial={["Option 1", "Option 2"]}
                        />
                    );

                    act(() => screen.getByRole("combobox").focus());
                    await user.keyboard("{Backspace}{Delete}");

                    expect(
                        screen.getByRole("button", {
                            name: "Remove Option 1",
                        })
                    ).toBeInTheDocument();
                    expect(
                        screen.getByRole("button", {
                            name: "Remove Option 2",
                        })
                    ).toBeInTheDocument();
                });

                it("should move focus from the combobox to the remove button with Tab", async () => {
                    const user = userEvent.setup();

                    render(
                        <ControlledTagSelect
                            initial={["Option 1", "Option 2"]}
                        />
                    );

                    act(() => screen.getByRole("combobox").focus());
                    await user.tab();

                    expect(
                        screen.getByRole("button", {
                            name: "Remove Option 1",
                        })
                    ).toHaveFocus();
                });

                it("should remove the tag without opening the dropdown when Enter is pressed on x", async () => {
                    const user = userEvent.setup();

                    render(
                        <ControlledTagSelect
                            initial={["Option 1", "Option 2"]}
                        />
                    );

                    act(() => screen.getByRole("combobox").focus());
                    await user.tab();
                    await user.keyboard("{Enter}");

                    expect(
                        screen.queryByRole("button", {
                            name: "Remove Option 1",
                        })
                    ).not.toBeInTheDocument();
                    expect(
                        screen.getByRole("button", {
                            name: "Remove Option 2",
                        })
                    ).toBeInTheDocument();
                    expect(
                        screen.queryByTestId(DROPDOWN_TESTID)
                    ).not.toBeInTheDocument();
                });

                it("should open the dropdown when Enter is pressed on the combobox", async () => {
                    const user = userEvent.setup();

                    render(
                        <ControlledTagSelect
                            initial={["Option 1", "Option 2"]}
                        />
                    );

                    act(() => screen.getByRole("combobox").focus());
                    await user.keyboard("{Enter}");

                    await waitFor(() => {
                        expect(
                            screen.queryByTestId(DROPDOWN_TESTID)
                        ).toBeVisible();
                    });
                });

                it("should open the dropdown with Space and dismiss it with Escape", async () => {
                    const user = userEvent.setup();

                    render(
                        <ControlledTagSelect
                            initial={["Option 1", "Option 2"]}
                        />
                    );

                    act(() => screen.getByRole("combobox").focus());
                    await user.keyboard(" ");

                    await waitFor(() => {
                        expect(
                            screen.queryByTestId(DROPDOWN_TESTID)
                        ).toBeVisible();
                    });

                    await user.keyboard("{Escape}");

                    await waitFor(() => {
                        expect(
                            screen.queryByTestId(DROPDOWN_TESTID)
                        ).not.toBeInTheDocument();
                    });
                });
            });

            describe("removing tags", () => {
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
                        screen.getByRole("button", {
                            name: "Remove Option 1",
                        })
                    );

                    expect(mockOnSelectOptions).toHaveBeenCalledWith([
                        "Option 2",
                    ]);
                    expect(
                        screen.queryByText("Option 1")
                    ).not.toBeInTheDocument();
                    expect(
                        screen.queryByTestId(DROPDOWN_TESTID)
                    ).not.toBeInTheDocument();
                });

                it("should uncheck the removed option in the dropdown", async () => {
                    const user = userEvent.setup();

                    render(
                        <ControlledTagSelect
                            initial={["Option 1", "Option 2"]}
                        />
                    );

                    await user.click(
                        screen.getByRole("button", {
                            name: "Remove Option 1",
                        })
                    );
                    await user.click(screen.getByRole("combobox"));

                    await waitFor(() => {
                        expect(
                            screen.queryByTestId(DROPDOWN_TESTID)
                        ).toBeVisible();
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
                        <ControlledTagSelect
                            initial={["Option 1", "Option 2"]}
                        />
                    );

                    await user.click(screen.getByRole("combobox"));
                    await user.click(
                        await screen.findByRole("button", {
                            name: "Clear all",
                        })
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
});
