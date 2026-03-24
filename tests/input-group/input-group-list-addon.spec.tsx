import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "src/form";
import { InputGroup } from "src/input-group";
import { waitForElementToBeRemoved } from "../common/waitForElementRemoved";

const FIELD_TESTID = "test";
const INPUT_TESTID = "input";
const SELECTOR_TESTID = "selector";
const SELECTOR_LABEL_TESTID = "selector-label";
const DROPDOWN_TESTID = "dropdown-list";
const OPTIONS = ["Option 1", "Option 2", "Option 3"];
const LABEL = "Test label";
const DESCRIPTION = "Test subtitle";
const DROPDOWN_INSTRUCTION = "Press space to open options";
const ERROR = "Error message";

describe("InputGroup - List addon", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        // Make requestAnimationFrame synchronous to avoid async focus issues in tests (see https://github.com/floating-ui/floating-ui/issues/2488)
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

    it("should render the component", () => {
        render(
            <InputGroup
                data-testid={FIELD_TESTID}
                addon={{
                    type: "list",
                    attributes: {
                        options: OPTIONS,
                    },
                }}
            />
        );

        expect(screen.getByText("Select")).toBeVisible();
        expect(screen.queryByTestId(DROPDOWN_TESTID)).not.toBeInTheDocument();
    });

    it("should render the component with initial value", () => {
        render(
            <InputGroup
                data-testid={FIELD_TESTID}
                addon={{
                    type: "list",
                    attributes: {
                        options: OPTIONS,
                        selectedOption: "Option 1",
                    },
                }}
                value="Initial value"
            />
        );

        expect(screen.getByTestId(INPUT_TESTID)).toHaveValue("Initial value");
        expect(screen.getByTestId(SELECTOR_TESTID)).toHaveTextContent(
            "Option 1"
        );
    });

    it("should open dropdown list when selector is clicked", async () => {
        const user = userEvent.setup();

        render(
            <InputGroup
                data-testid={FIELD_TESTID}
                addon={{
                    type: "list",
                    attributes: {
                        options: OPTIONS,
                    },
                }}
            />
        );

        await user.click(screen.getByTestId(SELECTOR_TESTID));

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
            <InputGroup
                data-testid={FIELD_TESTID}
                addon={{
                    type: "list",
                    attributes: {
                        options: OPTIONS,
                    },
                }}
            />
        );

        await user.click(screen.getByTestId(SELECTOR_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.getByTestId(SELECTOR_TESTID));

        await waitFor(() => {
            expect(
                screen.queryByTestId(DROPDOWN_TESTID)
            ).not.toBeInTheDocument();
        });
    });

    it("should select list item correctly and trigger onSelectOption callback", async () => {
        const user = userEvent.setup();
        const mockOnSelectOption = jest.fn();

        render(
            <InputGroup
                data-testid={FIELD_TESTID}
                addon={{
                    type: "list",
                    attributes: {
                        options: OPTIONS,
                        onSelectOption: mockOnSelectOption,
                    },
                }}
            />
        );

        await user.click(screen.getByTestId(SELECTOR_TESTID));

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

    it("should handle input changes and trigger onChange callback", async () => {
        const user = userEvent.setup();
        const mockOnChange = jest.fn();

        render(
            <InputGroup
                data-testid={FIELD_TESTID}
                addon={{
                    type: "list",
                    attributes: {
                        options: OPTIONS,
                    },
                }}
                onChange={mockOnChange}
            />
        );

        await user.type(screen.getByTestId(INPUT_TESTID), "Value");

        expect(mockOnChange).toHaveBeenCalled();
        expect(mockOnChange.mock.lastCall[0].target.value).toBe("Value");
    });

    describe("focus/blur behaviour", () => {
        it("should call onBlur via outside click if dropdown is not open", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            render(
                <InputGroup
                    data-testid={FIELD_TESTID}
                    addon={{
                        type: "list",
                        attributes: {
                            options: OPTIONS,
                        },
                    }}
                    onBlur={mockOnBlur}
                />
            );

            await user.click(screen.getByTestId(SELECTOR_TESTID));

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

            await user.click(document.body);

            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it("should dismiss dropdown if it is open", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            render(
                <InputGroup
                    data-testid={FIELD_TESTID}
                    addon={{
                        type: "list",
                        attributes: {
                            options: OPTIONS,
                        },
                    }}
                    onBlur={mockOnBlur}
                />
            );

            await user.click(screen.getByTestId(SELECTOR_TESTID));

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
                <InputGroup
                    data-testid={FIELD_TESTID}
                    addon={{
                        type: "list",
                        attributes: {
                            options: OPTIONS,
                        },
                    }}
                    onBlur={mockOnBlur}
                />
            );

            await user.click(screen.getByTestId(SELECTOR_TESTID));

            await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
            await waitFor(() =>
                expect(
                    screen.queryByRole("option", { name: "Option 1" })
                ).toHaveFocus()
            );

            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await user.keyboard("{Escape}");

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );

            expect(screen.queryByTestId(SELECTOR_TESTID)).toHaveFocus();
            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await user.click(document.body);

            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it("should call onBlur from input", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            render(
                <InputGroup
                    data-testid={FIELD_TESTID}
                    addon={{
                        type: "list",
                        attributes: {
                            options: OPTIONS,
                        },
                    }}
                    onBlur={mockOnBlur}
                />
            );

            await user.click(screen.getByTestId(INPUT_TESTID));

            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await user.click(document.body);

            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it("should call onFocus and onBlur when cycling through the tab sequence", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            render(
                <>
                    <button data-testid="before" />
                    <InputGroup
                        data-testid={FIELD_TESTID}
                        addon={{
                            type: "list",
                            attributes: {
                                options: OPTIONS,
                                valueExtractor: (item: string) => item,
                                listExtractor: (item: string) => item,
                                enableSearch: true,
                            },
                        }}
                        onBlur={mockOnBlur}
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

            await user.keyboard("{Tab}");

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );
            expect(screen.getByTestId(INPUT_TESTID)).toHaveFocus();

            await user.keyboard("{Tab}");

            expect(screen.getByTestId("after")).toHaveFocus();
            expect(mockOnBlur).toHaveBeenCalledTimes(1);

            await user.keyboard("{Shift>}{Tab}{/Shift}");

            expect(screen.getByTestId(INPUT_TESTID)).toHaveFocus();

            await user.keyboard("{Shift>}{Tab}{/Shift}");

            await waitFor(() => {
                expect(screen.queryByTestId(SELECTOR_TESTID)).toHaveFocus();
                expect(
                    screen.queryByTestId(DROPDOWN_TESTID)
                ).not.toBeInTheDocument();
                expect(mockOnBlur).toHaveBeenCalledTimes(1);
            });
        });
    });

    describe("readonly behaviour", () => {
        it("should render readonly state with selected option", () => {
            render(
                <InputGroup
                    data-testid={FIELD_TESTID}
                    addon={{
                        type: "list",
                        attributes: {
                            options: OPTIONS,
                            selectedOption: "Option 2",
                        },
                    }}
                    readOnly
                />
            );

            expect(screen.getByTestId(SELECTOR_LABEL_TESTID)).toHaveTextContent(
                "Option 2"
            );
            expect(
                screen.queryByTestId(SELECTOR_TESTID)
            ).not.toBeInTheDocument();
        });

        it("should not render readonly state without selected option", () => {
            render(
                <InputGroup
                    data-testid={FIELD_TESTID}
                    addon={{
                        type: "list",
                        attributes: {
                            options: OPTIONS,
                        },
                    }}
                    readOnly
                />
            );

            expect(
                screen.queryByTestId(SELECTOR_LABEL_TESTID)
            ).not.toBeInTheDocument();
            expect(
                screen.queryByTestId(SELECTOR_TESTID)
            ).not.toBeInTheDocument();
        });

        it("should not open dropdown when readonly", async () => {
            const user = userEvent.setup();

            render(
                <InputGroup
                    data-testid={FIELD_TESTID}
                    addon={{
                        type: "list",
                        attributes: {
                            options: OPTIONS,

                            selectedOption: "Option 1",
                        },
                    }}
                    readOnly
                />
            );

            expect(screen.getByTestId(INPUT_TESTID)).toHaveAttribute(
                "readonly"
            );

            await user.click(screen.getByTestId(SELECTOR_LABEL_TESTID));

            expect(
                screen.queryByTestId(DROPDOWN_TESTID)
            ).not.toBeInTheDocument();
        });
    });

    describe("disabled behaviour", () => {
        it("should not open dropdown when disabled", async () => {
            const user = userEvent.setup();

            render(
                <InputGroup
                    data-testid={FIELD_TESTID}
                    addon={{
                        type: "list",
                        attributes: {
                            options: OPTIONS,
                        },
                    }}
                    disabled
                />
            );

            expect(screen.getByTestId(INPUT_TESTID)).toHaveAttribute(
                "aria-disabled",
                "true"
            );

            await user.click(screen.getByTestId(SELECTOR_TESTID));

            expect(
                screen.queryByTestId(DROPDOWN_TESTID)
            ).not.toBeInTheDocument();
        });
    });

    describe("accessible names", () => {
        it("should apply the correct label", () => {
            render(
                <Form.InputGroup
                    label={LABEL}
                    addon={{
                        type: "list",
                        attributes: {
                            options: OPTIONS,
                        },
                    }}
                />
            );

            expect(
                screen.getByRole("combobox", {
                    name: LABEL,
                    description: DROPDOWN_INSTRUCTION,
                })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("textbox", {
                    name: LABEL,
                })
            ).toBeInTheDocument();
        });

        it("should apply the correct label and description", () => {
            render(
                <Form.InputGroup
                    label={{ children: LABEL, subtitle: DESCRIPTION }}
                    addon={{
                        type: "list",
                        attributes: {
                            options: OPTIONS,
                        },
                    }}
                />
            );

            expect(
                screen.getByRole("combobox", {
                    name: LABEL,
                    description: `${DESCRIPTION} ${DROPDOWN_INSTRUCTION}`,
                })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("textbox", {
                    name: LABEL,
                    description: DESCRIPTION,
                })
            ).toBeInTheDocument();
        });

        it("should apply the error state and error description", () => {
            render(
                <Form.InputGroup
                    label={{ children: LABEL, subtitle: DESCRIPTION }}
                    errorMessage={ERROR}
                    addon={{
                        type: "list",
                        attributes: {
                            options: OPTIONS,
                        },
                    }}
                />
            );

            const combobox = screen.getByRole("combobox", {
                name: LABEL,
                description: `${ERROR} ${DESCRIPTION} ${DROPDOWN_INSTRUCTION}`,
            });
            const textbox = screen.getByRole("textbox", {
                name: LABEL,
                description: `${ERROR} ${DESCRIPTION}`,
            });
            expect(combobox).toBeInTheDocument();
            expect(combobox).toBeInvalid();
            expect(textbox).toBeInTheDocument();
            expect(textbox).toBeInvalid();
        });
    });
});
