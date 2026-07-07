import {
    act,
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { L1OptionProps } from "src";
import { InputNestedSelect } from "src";

import { setupCommonDomMocks } from "../_common";

jest.mock("react-resize-detector");

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
    beforeEach(() => {
        jest.clearAllMocks();

        setupCommonDomMocks();
    });

    it("should render the component", async () => {
        render(
            <InputNestedSelect data-testid={FIELD_TESTID} options={OPTIONS} />
        );

        expect(screen.getByText("Select")).toBeVisible();
        expect(screen.queryByTestId(DROPDOWN_TESTID)).not.toBeInTheDocument();
    });

    it("should open dropdown list when selector is clicked", async () => {
        const user = userEvent.setup();

        render(
            <InputNestedSelect data-testid={FIELD_TESTID} options={OPTIONS} />
        );

        await act(async () => {
            await user.click(screen.getByTestId(FIELD_TESTID));
        });

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        expect(screen.queryByText("Parent 1 item")).toBeVisible();
        expect(screen.queryByText("Parent 1.1 item")).toBeVisible();
        expect(screen.queryByText("Child 1.1.1 item")).toBeVisible();
    });

    it("should toggle dropdown list when selector is clicked", async () => {
        const user = userEvent.setup();

        render(
            <InputNestedSelect data-testid={FIELD_TESTID} options={OPTIONS} />
        );

        await act(async () => {
            await user.click(screen.getByTestId(FIELD_TESTID));
        });

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
            <InputNestedSelect
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
            <InputNestedSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                onSelectOption={mockOnSelectOption}
            />
        );

        await act(async () => {
            await user.click(screen.getByTestId(FIELD_TESTID));
        });

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

        render(
            <InputNestedSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                selectableCategory
                onSelectOption={mockOnSelectOption}
            />
        );

        await act(async () => {
            await user.click(screen.getByTestId(FIELD_TESTID));
        });

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

            render(
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

            await user.click(screen.getByText("Child 1.1.1 item"));

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

            render(
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

            await act(async () => {
                await user.keyboard("{Tab}");
            });

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
                <InputNestedSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    enableSearch
                />
            );

            await act(async () => {
                await user.click(screen.getByTestId(FIELD_TESTID));
            });

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

        it("should call onSearch callback when user types in search input", async () => {
            const user = userEvent.setup();
            const mockOnSearch = jest.fn();

            render(
                <InputNestedSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    enableSearch
                    onSearch={mockOnSearch}
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

            expect(mockOnSearch).toHaveBeenCalledTimes(0);

            await act(async () => {
                await user.keyboard("Child");
            });

            expect(mockOnSearch).toHaveBeenCalled();
        });
    });

    describe("onShowOptions callback", () => {
        it("should call onShowOptions when dropdown is opened", async () => {
            const user = userEvent.setup();
            const mockOnShowOptions = jest.fn();

            render(
                <InputNestedSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    onShowOptions={mockOnShowOptions}
                />
            );

            expect(mockOnShowOptions).toHaveBeenCalledTimes(0);

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => {
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });

            expect(mockOnShowOptions).toHaveBeenCalledTimes(1);
        });
    });

    describe("onHideOptions callback", () => {
        it("should call onHideOptions when dropdown is closed by selecting an option", async () => {
            const user = userEvent.setup();
            const mockOnHideOptions = jest.fn();

            render(
                <InputNestedSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    onHideOptions={mockOnHideOptions}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => {
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });

            expect(mockOnHideOptions).toHaveBeenCalledTimes(0);

            await user.click(screen.getByText("Child 1.1.1 item"));

            await waitFor(() => {
                expect(
                    screen.queryByTestId(DROPDOWN_TESTID)
                ).not.toBeInTheDocument();
            });

            expect(mockOnHideOptions).toHaveBeenCalledTimes(1);
        });

        it("should call onHideOptions when dropdown is toggled closed", async () => {
            const user = userEvent.setup();
            const mockOnHideOptions = jest.fn();

            render(
                <InputNestedSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    onHideOptions={mockOnHideOptions}
                />
            );

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => {
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });

            expect(mockOnHideOptions).toHaveBeenCalledTimes(0);

            await user.click(screen.getByTestId(FIELD_TESTID));

            await waitFor(() => {
                expect(
                    screen.queryByTestId(DROPDOWN_TESTID)
                ).not.toBeInTheDocument();
            });

            expect(mockOnHideOptions).toHaveBeenCalledTimes(1);
        });
    });
});
