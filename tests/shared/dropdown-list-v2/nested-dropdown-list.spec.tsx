import { act, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NestedDropdownList } from "../../../src/shared/dropdown-list-v2/nested-dropdown-list";
import { NestedDropdownListItemProps } from "../../../src/shared/dropdown-list-v2/types";

describe("NestedDropdownList", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    describe("mode = default", () => {
        it("should expand the first subtree (1 tier)", () => {
            const options = buildOptions([["1"], ["2"]]);
            render(
                <NestedDropdownList
                    listItems={options}
                    selectedKeyPaths={new Set<string>()}
                />
            );

            expect(screen.queryByText("Child 1 item")).toBeVisible();
            expect(screen.queryByText("Child 2 item")).toBeVisible();
        });

        it("should expand the first subtree (2 tier)", () => {
            const options = buildOptions([
                ["1", [["1.1"], ["1.2"]]],
                ["2", [["2.1"], ["2.2"]]],
            ]);
            render(
                <NestedDropdownList
                    listItems={options}
                    selectedKeyPaths={new Set<string>()}
                />
            );

            expect(screen.queryByText("Parent 1 item")).toBeVisible();
            expect(screen.queryByText("Child 1.1 item")).toBeVisible();
            expect(screen.queryByText("Child 1.2 item")).toBeVisible();
            expect(screen.queryByText("Parent 2 item")).toBeVisible();
            expect(
                screen.queryByText("Child 2.1 item")
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText("Child 2.2 item")
            ).not.toBeInTheDocument();

            expect(
                screen.getByRole("treeitem", { name: "Parent 1 item" })
            ).toHaveAttribute("aria-expanded", "true");
            expect(
                screen.getByRole("treeitem", { name: "Parent 2 item" })
            ).toHaveAttribute("aria-expanded", "false");
        });

        it("should expand the first subtree (3 tier)", () => {
            const options = buildOptions([
                [
                    "1",
                    [
                        ["1.1"],
                        ["1.2", [["1.2.1"], ["1.2.2"]]],
                        ["1.3", [["1.3.1"]]],
                    ],
                ],
                ["2", [["2.1"], ["2.2", [["2.2.1"]]]]],
            ]);
            render(
                <NestedDropdownList
                    listItems={options}
                    selectedKeyPaths={new Set<string>()}
                />
            );

            expect(screen.queryByText("Parent 1 item")).toBeVisible();
            expect(screen.queryByText("Child 1.1 item")).toBeVisible();
            expect(screen.queryByText("Parent 1.2 item")).toBeVisible();
            expect(screen.queryByText("Child 1.2.1 item")).toBeVisible();
            expect(screen.queryByText("Parent 1.3 item")).toBeVisible();
            expect(
                screen.queryByText("Child 1.3.1 item")
            ).not.toBeInTheDocument();
            expect(screen.queryByText("Parent 2 item")).toBeVisible();
            expect(
                screen.queryByText("Child 2.1 item")
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText("Parent 2.2 item")
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText("Child 2.2.1 item")
            ).not.toBeInTheDocument();

            expect(
                screen.getByRole("treeitem", { name: "Parent 1 item" })
            ).toHaveAttribute("aria-expanded", "true");
            expect(
                screen.getByRole("treeitem", { name: "Parent 1.2 item" })
            ).toHaveAttribute("aria-expanded", "true");
            expect(
                screen.getByRole("treeitem", { name: "Parent 1.3 item" })
            ).toHaveAttribute("aria-expanded", "false");
            expect(
                screen.getByRole("treeitem", { name: "Parent 2 item" })
            ).toHaveAttribute("aria-expanded", "false");
        });
    });

    describe("mode = expand", () => {
        it("should expand all subtrees (1 tier)", () => {
            const options = buildOptions([["1"], ["2"]]);
            render(
                <NestedDropdownList
                    listItems={options}
                    selectedKeyPaths={new Set<string>()}
                    mode="expand"
                />
            );

            expect(screen.queryByText("Child 1 item")).toBeVisible();
            expect(screen.queryByText("Child 2 item")).toBeVisible();
        });

        it("should expand all subtrees (2 tier)", () => {
            const options = buildOptions([
                ["1", [["1.1"], ["1.2"]]],
                ["2", [["2.1"], ["2.2"]]],
            ]);
            render(
                <NestedDropdownList
                    listItems={options}
                    selectedKeyPaths={new Set<string>()}
                    mode="expand"
                />
            );

            expect(screen.queryByText("Parent 1 item")).toBeVisible();
            expect(screen.queryByText("Child 1.1 item")).toBeVisible();
            expect(screen.queryByText("Child 1.2 item")).toBeVisible();
            expect(screen.queryByText("Parent 2 item")).toBeVisible();
            expect(screen.queryByText("Child 2.1 item")).toBeVisible();
            expect(screen.queryByText("Child 2.2 item")).toBeVisible();

            expect(
                screen.getByRole("treeitem", { name: "Parent 1 item" })
            ).toHaveAttribute("aria-expanded", "true");
            expect(
                screen.getByRole("treeitem", { name: "Parent 2 item" })
            ).toHaveAttribute("aria-expanded", "true");
        });

        it("should expand all subtrees (3 tier)", () => {
            const options = buildOptions([
                [
                    "1",
                    [
                        ["1.1"],
                        ["1.2", [["1.2.1"], ["1.2.2"]]],
                        ["1.3", [["1.3.1"]]],
                    ],
                ],
                ["2", [["2.1"], ["2.2", [["2.2.1"]]]]],
            ]);
            render(
                <NestedDropdownList
                    listItems={options}
                    selectedKeyPaths={new Set<string>()}
                    mode="expand"
                />
            );

            expect(screen.queryByText("Parent 1 item")).toBeVisible();
            expect(screen.queryByText("Child 1.1 item")).toBeVisible();
            expect(screen.queryByText("Parent 1.2 item")).toBeVisible();
            expect(screen.queryByText("Child 1.2.1 item")).toBeVisible();
            expect(screen.queryByText("Parent 1.3 item")).toBeVisible();
            expect(screen.queryByText("Child 1.3.1 item")).toBeVisible();
            expect(screen.queryByText("Parent 2 item")).toBeVisible();
            expect(screen.queryByText("Child 2.1 item")).toBeVisible();
            expect(screen.queryByText("Parent 2.2 item")).toBeVisible();
            expect(screen.queryByText("Child 2.2.1 item")).toBeVisible();

            expect(
                screen.getByRole("treeitem", { name: "Parent 1 item" })
            ).toHaveAttribute("aria-expanded", "true");
            expect(
                screen.getByRole("treeitem", { name: "Parent 1.2 item" })
            ).toHaveAttribute("aria-expanded", "true");
            expect(
                screen.getByRole("treeitem", { name: "Parent 1.3 item" })
            ).toHaveAttribute("aria-expanded", "true");
            expect(
                screen.getByRole("treeitem", { name: "Parent 2 item" })
            ).toHaveAttribute("aria-expanded", "true");
        });
    });

    describe("mode = collapse", () => {
        it("should collapse all subtrees (1 tier)", () => {
            const options = buildOptions([["1"], ["2"]]);
            render(
                <NestedDropdownList
                    listItems={options}
                    selectedKeyPaths={new Set<string>()}
                    mode="collapse"
                />
            );

            expect(screen.queryByText("Child 1 item")).toBeVisible();
            expect(screen.queryByText("Child 2 item")).toBeVisible();
        });

        it("should collapse all subtrees (2 tier)", () => {
            const options = buildOptions([
                ["1", [["1.1"], ["1.2"]]],
                ["2", [["2.1"], ["2.2"]]],
            ]);
            render(
                <NestedDropdownList
                    listItems={options}
                    selectedKeyPaths={new Set<string>()}
                    mode="collapse"
                />
            );

            expect(screen.queryByText("Parent 1 item")).toBeVisible();
            expect(
                screen.queryByText("Child 1.1 item")
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText("Child 1.2 item")
            ).not.toBeInTheDocument();
            expect(screen.queryByText("Parent 2 item")).toBeVisible();
            expect(
                screen.queryByText("Child 2.1 item")
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText("Child 2.2 item")
            ).not.toBeInTheDocument();

            expect(
                screen.getByRole("treeitem", { name: "Parent 1 item" })
            ).toHaveAttribute("aria-expanded", "false");
            expect(
                screen.getByRole("treeitem", { name: "Parent 2 item" })
            ).toHaveAttribute("aria-expanded", "false");
        });

        it("should collapse all subtrees (3 tier)", () => {
            const options = buildOptions([
                [
                    "1",
                    [
                        ["1.1"],
                        ["1.2", [["1.2.1"], ["1.2.2"]]],
                        ["1.3", [["1.3.1"]]],
                    ],
                ],
                ["2", [["2.1"], ["2.2", [["2.2.1"]]]]],
            ]);
            render(
                <NestedDropdownList
                    listItems={options}
                    selectedKeyPaths={new Set<string>()}
                    mode="collapse"
                />
            );

            expect(screen.queryByText("Parent 1 item")).toBeVisible();
            expect(
                screen.queryByText("Child 1.1 item")
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText("Parent 1.2 item")
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText("Child 1.2.1 item")
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText("Parent 1.3 item")
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText("Child 1.3.1 item")
            ).not.toBeInTheDocument();
            expect(screen.queryByText("Parent 2 item")).toBeVisible();
            expect(
                screen.queryByText("Child 2.1 item")
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText("Parent 2.2 item")
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText("Child 2.2.1 item")
            ).not.toBeInTheDocument();

            expect(
                screen.getByRole("treeitem", { name: "Parent 1 item" })
            ).toHaveAttribute("aria-expanded", "false");
            expect(
                screen.getByRole("treeitem", { name: "Parent 2 item" })
            ).toHaveAttribute("aria-expanded", "false");
        });
    });

    it("should expand a collapsed category on item click", async () => {
        const user = userEvent.setup();
        const mockOnSelectItem = jest.fn();
        const options = buildOptions([
            [
                "1",
                [
                    ["1.1", [["1.1.1"]]],
                    ["1.2", [["1.2.1"]]],
                    ["1.3", [["1.3.1"]]],
                ],
            ],
        ]);
        render(
            <NestedDropdownList
                listItems={options}
                selectedKeyPaths={new Set<string>()}
                mode="collapse"
                onSelectItem={mockOnSelectItem}
            />
        );

        await user.click(screen.getByText("Parent 1 item"));

        expect(screen.queryByText("Parent 1 item")).toBeVisible();
        expect(screen.queryByText("Parent 1.1 item")).toBeVisible();
        expect(screen.queryByText("Child 1.1.1 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Parent 1.2 item")).toBeVisible();
        expect(screen.queryByText("Child 1.2.1 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Parent 1.3 item")).toBeVisible();
        expect(screen.queryByText("Child 1.3.1 item")).not.toBeInTheDocument();

        await user.click(screen.getByText("Parent 1.1 item"));

        expect(screen.queryByText("Parent 1 item")).toBeVisible();
        expect(screen.queryByText("Parent 1.1 item")).toBeVisible();
        expect(screen.queryByText("Child 1.1.1 item")).toBeVisible();
        expect(screen.queryByText("Parent 1.2 item")).toBeVisible();
        expect(screen.queryByText("Child 1.2.1 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Parent 1.3 item")).toBeVisible();
        expect(screen.queryByText("Child 1.3.1 item")).not.toBeInTheDocument();

        expect(mockOnSelectItem).not.toHaveBeenCalled();
    });

    it("should expand a collapsed category with right arrow key", async () => {
        const user = userEvent.setup();
        const mockOnSelectItem = jest.fn();
        const options = buildOptions([
            [
                "1",
                [
                    ["1.1", [["1.1.1"]]],
                    ["1.2", [["1.2.1"]]],
                    ["1.3", [["1.3.1"]]],
                ],
            ],
        ]);
        render(
            <NestedDropdownList
                listItems={options}
                selectedKeyPaths={new Set<string>()}
                mode="collapse"
                onSelectItem={mockOnSelectItem}
            />
        );

        await waitFor(() =>
            expect(
                screen.queryByRole("treeitem", { name: "Parent 1 item" })
            ).toHaveFocus()
        );

        await act(async () => {
            await user.keyboard("{ArrowRight}");
        });

        expect(screen.queryByText("Parent 1 item")).toBeVisible();
        expect(screen.queryByText("Parent 1.1 item")).toBeVisible();
        expect(screen.queryByText("Child 1.1.1 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Parent 1.2 item")).toBeVisible();
        expect(screen.queryByText("Child 1.2.1 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Parent 1.3 item")).toBeVisible();
        expect(screen.queryByText("Child 1.3.1 item")).not.toBeInTheDocument();

        await act(async () => {
            await user.keyboard("{ArrowDown}{ArrowRight}");
        });

        expect(screen.queryByText("Parent 1 item")).toBeVisible();
        expect(screen.queryByText("Parent 1.1 item")).toBeVisible();
        expect(screen.queryByText("Child 1.1.1 item")).toBeVisible();
        expect(screen.queryByText("Parent 1.2 item")).toBeVisible();
        expect(screen.queryByText("Child 1.2.1 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Parent 1.3 item")).toBeVisible();
        expect(screen.queryByText("Child 1.3.1 item")).not.toBeInTheDocument();

        expect(mockOnSelectItem).not.toHaveBeenCalled();
    });

    it("should collapse an expanded category on item click", async () => {
        const user = userEvent.setup();
        const mockOnSelectItem = jest.fn();
        const options = buildOptions([
            [
                "1",
                [
                    ["1.1", [["1.1.1"]]],
                    ["1.2", [["1.2.1"]]],
                    ["1.3", [["1.3.1"]]],
                ],
            ],
        ]);
        render(
            <NestedDropdownList
                listItems={options}
                selectedKeyPaths={new Set<string>()}
                mode="expand"
                onSelectItem={mockOnSelectItem}
            />
        );

        await user.click(screen.getByText("Parent 1.1 item"));

        expect(screen.queryByText("Parent 1 item")).toBeVisible();
        expect(screen.queryByText("Parent 1.1 item")).toBeVisible();
        expect(screen.queryByText("Child 1.1.1 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Parent 1.2 item")).toBeVisible();
        expect(screen.queryByText("Child 1.2.1 item")).toBeVisible();
        expect(screen.queryByText("Parent 1.3 item")).toBeVisible();
        expect(screen.queryByText("Child 1.3.1 item")).toBeVisible();

        await user.click(screen.getByText("Parent 1 item"));

        expect(screen.queryByText("Parent 1 item")).toBeVisible();
        expect(screen.queryByText("Parent 1.1 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Child 1.1.1 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Parent 1.2 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Child 1.2.1 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Parent 1.3 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Child 1.3.1 item")).not.toBeInTheDocument();

        expect(mockOnSelectItem).not.toHaveBeenCalled();
    });

    it("should collapse an expanded category with right arrow key", async () => {
        const user = userEvent.setup();
        const mockOnSelectItem = jest.fn();
        const options = buildOptions([
            [
                "1",
                [
                    ["1.1", [["1.1.1"]]],
                    ["1.2", [["1.2.1"]]],
                    ["1.3", [["1.3.1"]]],
                ],
            ],
        ]);
        render(
            <NestedDropdownList
                listItems={options}
                selectedKeyPaths={new Set<string>()}
                mode="expand"
                onSelectItem={mockOnSelectItem}
            />
        );

        await waitFor(() =>
            expect(
                screen.queryByRole("treeitem", { name: "Parent 1 item" })
            ).toHaveFocus()
        );

        await act(async () => {
            await user.keyboard("{ArrowDown}{ArrowLeft}");
        });

        expect(screen.queryByText("Parent 1 item")).toBeVisible();
        expect(screen.queryByText("Parent 1.1 item")).toBeVisible();
        expect(screen.queryByText("Child 1.1.1 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Parent 1.2 item")).toBeVisible();
        expect(screen.queryByText("Child 1.2.1 item")).toBeVisible();
        expect(screen.queryByText("Parent 1.3 item")).toBeVisible();
        expect(screen.queryByText("Child 1.3.1 item")).toBeVisible();

        await act(async () => {
            await user.keyboard("{ArrowUp}{ArrowLeft}");
        });

        expect(screen.queryByText("Parent 1 item")).toBeVisible();
        expect(screen.queryByText("Parent 1.1 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Child 1.1.1 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Parent 1.2 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Child 1.2.1 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Parent 1.3 item")).not.toBeInTheDocument();
        expect(screen.queryByText("Child 1.3.1 item")).not.toBeInTheDocument();

        expect(mockOnSelectItem).not.toHaveBeenCalled();
    });

    describe("selectableCategory = true", () => {
        it("should select instead of toggling category on click", async () => {
            const user = userEvent.setup();
            const mockOnSelectItem = jest.fn();
            const options = buildOptions([
                [
                    "1",
                    [
                        ["1.1", [["1.1.1"]]],
                        ["1.2", [["1.2.1"]]],
                        ["1.3", [["1.3.1"]]],
                    ],
                ],
            ]);
            render(
                <NestedDropdownList
                    listItems={options}
                    selectedKeyPaths={new Set<string>()}
                    selectableCategory
                    onSelectItem={mockOnSelectItem}
                />
            );

            await user.click(screen.getByText("Parent 1.1 item"));

            expect(mockOnSelectItem).toHaveBeenCalledWith(
                expect.objectContaining({ keyPath: ["1", "1.1"] })
            );
            expect(screen.queryByText("Child 1.1.1 item")).toBeVisible();
            expect(
                screen.getByRole("treeitem", { name: "Parent 1.1 item" })
            ).toHaveAttribute("aria-expanded", "true");
        });

        it("should toggle category on button click", async () => {
            const user = userEvent.setup();
            const mockOnSelectItem = jest.fn();
            const options = buildOptions([
                [
                    "1",
                    [
                        ["1.1", [["1.1.1"]]],
                        ["1.2", [["1.2.1"]]],
                        ["1.3", [["1.3.1"]]],
                    ],
                ],
            ]);
            render(
                <NestedDropdownList
                    listItems={options}
                    selectedKeyPaths={new Set<string>()}
                    selectableCategory
                    onSelectItem={mockOnSelectItem}
                />
            );

            await user.click(
                within(
                    screen.getByRole("treeitem", { name: "Parent 1.1 item" })
                ).getByTestId("toggle-category-button")
            );

            expect(mockOnSelectItem).not.toHaveBeenCalled();
            expect(
                screen.queryByText("Child 1.1.1 item")
            ).not.toBeInTheDocument();
            expect(
                screen.getByRole("treeitem", { name: "Parent 1.1 item" })
            ).toHaveAttribute("aria-expanded", "false");
        });
    });

    describe("multiSelect = true", () => {
        it("should display selected items as checked", async () => {
            const options = buildOptions([
                ["1", [["1.1"], ["1.2", [["1.2.1"], ["1.2.2"]]]]],
                ["2", [["2.1"], ["2.2", [["2.2.1"], ["2.2.2"]]]]],
                ["3", [["3.1"], ["3.2", [["3.2.1"], ["3.2.2"]]]]],
            ]);
            const selectedKeyPaths = [
                ["1", "1.1"],
                ["1", "1.2", "1.2.1"],
                ["1", "1.2", "1.2.2"],
                ["2", "2.2", "2.2.1"],
            ];

            render(
                <NestedDropdownList
                    listItems={options}
                    multiSelect
                    selectedKeyPaths={
                        new Set<string>(
                            selectedKeyPaths.map((path) => path.join(","))
                        )
                    }
                />
            );

            expect(
                screen.getByRole("treeitem", { name: "Parent 1 item" })
            ).toBeChecked();
            expect(
                screen.getByRole("treeitem", { name: "Child 1.1 item" })
            ).toBeChecked();
            expect(
                screen.getByRole("treeitem", { name: "Parent 1.2 item" })
            ).toBeChecked();
            expect(
                screen.getByRole("treeitem", { name: "Child 1.2.1 item" })
            ).toBeChecked();
            expect(
                screen.getByRole("treeitem", { name: "Child 1.2.2 item" })
            ).toBeChecked();
            expect(
                screen.getByRole("treeitem", { name: "Parent 2 item" })
            ).toHaveAttribute("aria-checked", "mixed");
            expect(
                screen.getByRole("treeitem", { name: "Child 2.1 item" })
            ).not.toBeChecked();
            expect(
                screen.getByRole("treeitem", { name: "Parent 2.2 item" })
            ).not.toBeChecked();
            expect(
                screen.getByRole("treeitem", { name: "Child 2.2.1 item" })
            ).toBeChecked();
            expect(
                screen.getByRole("treeitem", { name: "Child 2.2.2 item" })
            ).not.toBeChecked();
        });

        it("should display selected items as checked during search", async () => {
            const user = userEvent.setup();
            const options = buildOptions([
                ["A", [["AA", [["Apple"], ["Banana"]]]]],
                ["B", [["BB", [["Banana milk"], ["Skimmed milk"]]]]],
                ["C", [["CCC", [["Cheese"]]]]],
            ]);
            const selectedKeyPaths = [["A", "AA", "Apple"]];

            const { rerender } = render(
                <NestedDropdownList
                    listItems={options}
                    multiSelect
                    selectedKeyPaths={
                        new Set<string>(
                            selectedKeyPaths.map((path) => path.join(","))
                        )
                    }
                    enableSearch
                />
            );

            await waitFor(() => {
                expect(
                    screen.getByLabelText("Enter text to search")
                ).toHaveFocus();
            });

            await act(async () => {
                await user.keyboard("Banana");
            });

            const newSelectedKeyPaths = [
                ["A", "AA", "Apple"],
                ["A", "AA", "Banana"],
            ];

            rerender(
                <NestedDropdownList
                    listItems={options}
                    multiSelect
                    selectedKeyPaths={
                        new Set<string>(
                            newSelectedKeyPaths.map((path) => path.join(","))
                        )
                    }
                    enableSearch
                />
            );

            expect(
                screen.getByRole("treeitem", { name: "Parent A item" })
            ).toBeChecked();
            expect(
                screen.getByRole("treeitem", { name: "Parent AA item" })
            ).toBeChecked();
            expect(
                screen.getByRole("treeitem", { name: "Child Banana item" })
            ).toBeChecked();

            expect(
                screen.getByRole("treeitem", { name: "Parent B item" })
            ).not.toBeChecked();
            expect(
                screen.getByRole("treeitem", { name: "Parent BB item" })
            ).not.toBeChecked();
            expect(
                screen.getByRole("treeitem", { name: "Child Banana milk item" })
            ).not.toBeChecked();
        });
    });
});

// =============================================================================
// TEST HELPERS
// =============================================================================

type Leaf = [string];
type Parent = [string, Node[]];
type Node = Parent | Leaf;

const buildOptions = (options: Node[]) => {
    const walk = (node: Node): NestedDropdownListItemProps<string> => {
        const [key, children] = node;
        if (children) {
            // parent
            return {
                label: `Parent ${key} item`,
                value: key,
                key,
                subItems: children.map((child) => walk(child)),
            };
        } else {
            // leaf
            return {
                label: `Child ${key} item`,
                value: key,
                key,
            };
        }
    };

    return options.map((option) => walk(option));
};
