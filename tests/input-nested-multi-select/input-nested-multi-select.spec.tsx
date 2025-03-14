import {
    act,
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
    within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputNestedMultiSelect, L1OptionProps } from "../../src";
import { MockVirtuosoContextWrapper } from "../__test-utils__/virtuoso/virtuoso-test-mocks";

const FIELD_TESTID = "test";
const SELECTOR_TESTID = "selector";
const DROPDOWN_TESTID = "nested-dropdown-list";
const OPTIONS: L1OptionProps<string, string, string>[] = [
    {
        label: "Parent 1 item",
        value: "1",
        key: "1",
        subItems: [
            {
                label: "Parent 1.1 item",
                value: "1.1",
                key: "10",
                subItems: [
                    {
                        label: "Child 1.1.1 item",
                        value: "1.1.1",
                        key: "100",
                    },
                    {
                        label: "Child 1.1.2 item",
                        value: "1.1.2",
                        key: "200",
                    },
                ],
            },
        ],
    },
];

describe("InputNestedMultiSelect", () => {
    const renderDropdown = (dropdown: JSX.Element) => {
        return render(dropdown, { wrapper: MockVirtuosoContextWrapper });
    };

    beforeEach(() => {
        jest.clearAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render the component", async () => {
        renderDropdown(
            <InputNestedMultiSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
            />
        );

        expect(screen.getByText("Select")).toBeVisible();
        expect(screen.queryByTestId(DROPDOWN_TESTID)).not.toBeInTheDocument();
    });

    it("should open dropdown list when selector is clicked", async () => {
        const user = userEvent.setup();

        renderDropdown(
            <InputNestedMultiSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        expect(screen.queryByText("Parent 1 item")).toBeVisible();
        expect(screen.queryByText("Parent 1.1 item")).toBeVisible();
        expect(screen.queryByText("Child 1.1.1 item")).toBeVisible();
    });

    it("should toggle dropdown list when selector is clicked", async () => {
        const user = userEvent.setup();

        renderDropdown(
            <InputNestedMultiSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
            />
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

    it("should toggle list item correctly", async () => {
        const user = userEvent.setup();
        const mockOnSelectOptions = jest.fn();

        renderDropdown(
            <InputNestedMultiSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                onSelectOptions={mockOnSelectOptions}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.getByText("Child 1.1.1 item"));

        expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeInTheDocument();
        expect(mockOnSelectOptions).toHaveBeenCalledWith(
            [["1", "10", "100"]],
            ["1.1.1"]
        );
        expect(
            within(screen.getByTestId(SELECTOR_TESTID)).queryByText(
                "Child 1.1.1 item"
            )
        ).toBeInTheDocument();

        await user.click(
            within(screen.getByTestId(DROPDOWN_TESTID)).getByText(
                "Child 1.1.1 item"
            )
        );

        expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeInTheDocument();
        expect(mockOnSelectOptions).toHaveBeenCalledWith([], []);
        expect(screen.getByText("Select")).toBeVisible();
    });

    it("should toggle parent item correctly", async () => {
        const user = userEvent.setup();
        const mockOnSelectOptions = jest.fn();

        renderDropdown(
            <InputNestedMultiSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                onSelectOptions={mockOnSelectOptions}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.getByText("Parent 1.1 item"));

        expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeInTheDocument();
        expect(mockOnSelectOptions).toHaveBeenCalledWith(
            [
                ["1", "10", "100"],
                ["1", "10", "200"],
            ],
            ["1.1.1", "1.1.2"]
        );
        expect(
            within(screen.getByTestId(SELECTOR_TESTID)).queryByText(
                "2 selected"
            )
        ).toBeInTheDocument();

        await user.click(screen.getByText("Parent 1.1 item"));

        expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeInTheDocument();
        expect(mockOnSelectOptions).toHaveBeenCalledWith([], []);
        expect(screen.getByText("Select")).toBeVisible();
    });

    it("should toggle mixed parent item correctly", async () => {
        const user = userEvent.setup();
        const mockOnSelectOptions = jest.fn();

        renderDropdown(
            <InputNestedMultiSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                selectedKeyPaths={[["1", "10", "100"]]}
                onSelectOptions={mockOnSelectOptions}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.getByText("Parent 1.1 item"));

        expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeInTheDocument();
        expect(mockOnSelectOptions).toHaveBeenCalledWith(
            [
                ["1", "10", "100"],
                ["1", "10", "200"],
            ],
            ["1.1.1", "1.1.2"]
        );
        expect(
            within(screen.getByTestId(SELECTOR_TESTID)).queryByText(
                "2 selected"
            )
        ).toBeInTheDocument();

        await user.click(screen.getByText("Parent 1.1 item"));

        expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeInTheDocument();
        expect(mockOnSelectOptions).toHaveBeenCalledWith([], []);
        expect(screen.getByText("Select")).toBeVisible();
    });

    it("should select all list items correctly", async () => {
        const user = userEvent.setup();
        const mockOnSelectOptions = jest.fn();

        renderDropdown(
            <InputNestedMultiSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                onSelectOptions={mockOnSelectOptions}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.getByText("Select all"));

        expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeInTheDocument();
        expect(mockOnSelectOptions).toHaveBeenCalledWith(
            [
                ["1", "10", "100"],
                ["1", "10", "200"],
            ],
            ["1.1.1", "1.1.2"]
        );
        expect(screen.getByText("2 selected")).toBeVisible();
    });

    it("should clear all list items correctly", async () => {
        const user = userEvent.setup();
        const mockOnSelectOptions = jest.fn();

        renderDropdown(
            <InputNestedMultiSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                onSelectOptions={mockOnSelectOptions}
                selectedKeyPaths={[["1", "10", "100"]]}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.getByText("Clear all"));

        expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeInTheDocument();
        expect(mockOnSelectOptions).toHaveBeenCalledWith([], []);
        expect(screen.getByText("Select")).toBeVisible();
    });

    describe("focus/blur behaviour", () => {
        it("should call onBlur via outside click", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            renderDropdown(
                <InputNestedMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    onBlur={mockOnBlur}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
            await waitFor(() =>
                expect(
                    screen.queryByRole("treeitem", { name: "Parent 1 item" })
                ).toHaveFocus()
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

            renderDropdown(
                <InputNestedMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    onBlur={mockOnBlur}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
            await waitFor(() =>
                expect(
                    screen.queryByRole("treeitem", { name: "Parent 1 item" })
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

            renderDropdown(
                <InputNestedMultiSelect
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
                    screen.queryByRole("treeitem", { name: "Parent 1 item" })
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

        it("should call onBlur when cycling through the tab sequence", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            renderDropdown(
                <>
                    <button data-testid="before" />
                    <InputNestedMultiSelect
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

            renderDropdown(
                <InputNestedMultiSelect
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
                await user.keyboard("Child");
            });

            const option = screen.getByText("1.1.1 item", { exact: false });
            expect(option.textContent).toEqual("Child 1.1.1 item");
        });
    });
});
