import {
    act,
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputNestedSelect, L1OptionProps } from "../../src";
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
                ],
            },
        ],
    },
];

describe("InputNestedSelect", () => {
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
            <InputNestedSelect data-testid={FIELD_TESTID} options={OPTIONS} />
        );

        expect(screen.getByText("Select")).toBeVisible();
        expect(screen.queryByTestId(DROPDOWN_TESTID)).not.toBeInTheDocument();
    });

    it("should open dropdown list when selector is clicked", async () => {
        const user = userEvent.setup();

        renderDropdown(
            <InputNestedSelect data-testid={FIELD_TESTID} options={OPTIONS} />
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
            <InputNestedSelect data-testid={FIELD_TESTID} options={OPTIONS} />
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
        const mockOnSelectOption = jest.fn();

        renderDropdown(
            <InputNestedSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                onSelectOption={mockOnSelectOption}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.getByText("Child 1.1.1 item"));

        await waitFor(() => {
            expect(
                screen.queryByTestId(DROPDOWN_TESTID)
            ).not.toBeInTheDocument();
        });

        expect(mockOnSelectOption).toHaveBeenCalledWith(
            ["1", "10", "100"],
            "1.1.1"
        );
    });

    it("should select category item correctly", async () => {
        const user = userEvent.setup();
        const mockOnSelectOption = jest.fn();

        renderDropdown(
            <InputNestedSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                selectableCategory
                onSelectOption={mockOnSelectOption}
            />
        );

        await user.click(screen.getByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.getByText("Parent 1.1 item"));

        await waitFor(() => {
            expect(
                screen.queryByTestId(DROPDOWN_TESTID)
            ).not.toBeInTheDocument();
        });

        expect(mockOnSelectOption).toHaveBeenCalledWith(["1", "10"], "1.1");
    });

    describe("focus/blur behaviour", () => {
        it("should call onBlur via outside click", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            renderDropdown(
                <InputNestedSelect
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

            await user.click(screen.getByText("Child 1.1.1 item"));

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

            renderDropdown(
                <InputNestedSelect
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

            await user.click(document.body);

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );

            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it("should dismiss dropdown via Esc key", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            renderDropdown(
                <InputNestedSelect
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

        it("should call onFocus and onBlur when cycling through the tab sequence", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            renderDropdown(
                <>
                    <button data-testid="before" />
                    <InputNestedSelect
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

            renderDropdown(
                <InputNestedSelect
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
