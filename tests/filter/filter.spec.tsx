import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { useMediaQuery } from "react-responsive";
import { Filter } from "../../src";
import { FilterContext } from "../../src/filter/filter-context";
import { FilterItemCheckboxOptionProps } from "../../src/filter/types";
import { FilterModal } from "src/filter/filter-modal";
import { FilterSidebar } from "src/filter/filter-sidebar";

jest.mock("react-responsive");

describe("Filter", () => {
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

        (useMediaQuery as jest.Mock).mockReturnValue(false);
    });

    it("should render the relevant components correctly on desktop", () => {
        render(
            <Filter>
                <Filter.Item data-testid="item1">{ITEM_CONTENT}</Filter.Item>
                <Filter.Item data-testid="item2">{ITEM_CONTENT}</Filter.Item>
            </Filter>
        );

        const desktop = within(screen.getByTestId(DESKTOP_TESTID));
        expect(desktop.getByTestId("item1")).toBeInTheDocument();
        expect(desktop.getByTestId("item2")).toBeInTheDocument();
    });

    it("should render the relevant components correctly on mobile", () => {
        (useMediaQuery as jest.Mock).mockReturnValue(true);

        render(
            <Filter>
                <Filter.Item data-testid="item1">{ITEM_CONTENT}</Filter.Item>
                <Filter.Item data-testid="item2">{ITEM_CONTENT}</Filter.Item>
            </Filter>
        );

        act(() => {
            fireEvent.click(screen.getByTestId(MOBILE_SHOW_BUTTON_TESTID));
        });

        const mobile = within(screen.getByTestId(MOBILE_TESTID));
        expect(mobile.getByTestId("item1")).toBeVisible();
        expect(mobile.getByTestId("item2")).toBeVisible();
    });

    describe("Filter.Item", () => {
        it("should render the item correctly", () => {
            render(
                <Filter.Item title={ITEM_TITLE}>{ITEM_CONTENT}</Filter.Item>
            );

            expect(
                within(screen.getByTestId("filter-item-title")).getByText(
                    ITEM_TITLE
                )
            ).toBeInTheDocument();
            expect(screen.getByText(ITEM_CONTENT)).toBeInTheDocument();
        });

        it("should render children specified as render prop correctly", () => {
            const mockRender = jest.fn(() => (
                <div data-testid="item1">{ITEM_CONTENT}</div>
            ));
            render(<Filter.Item>{mockRender}</Filter.Item>);

            expect(screen.getByTestId("item1")).toBeInTheDocument();
            expect(mockRender).toBeCalledWith("default", { minimised: false });
        });

        describe("initialExpanded", () => {
            it("should be collapsed by default", () => {
                render(<Filter.Item>{ITEM_CONTENT}</Filter.Item>);

                expect(
                    screen.getByTestId("expand-collapse-button")
                ).toHaveAttribute("aria-expanded", "false");
            });

            it("should be expanded by default when initialExpanded is true", () => {
                render(
                    <Filter.Item initialExpanded>{ITEM_CONTENT}</Filter.Item>
                );

                expect(
                    screen.getByTestId("expand-collapse-button")
                ).toHaveAttribute("aria-expanded", "true");
            });
        });

        describe("expanded (controlled component)", () => {
            it("should be collapsed when expanded prop is false, and not update the local state when display is toggled", () => {
                const mockOnChange = jest.fn();
                render(
                    <Filter.Item expanded={false} onExpandChange={mockOnChange}>
                        {ITEM_CONTENT}
                    </Filter.Item>
                );

                expect(
                    screen.queryByTestId("expandable-container")
                ).toHaveAttribute("data-expanded", "false");

                act(() => {
                    fireEvent.click(
                        screen.getByTestId("expand-collapse-button")
                    );
                });

                expect(
                    screen.getByTestId("expand-collapse-button")
                ).toHaveAttribute("aria-expanded", "false");
                expect(mockOnChange).toHaveBeenCalledWith(true);
            });

            it("should be expanded when expanded prop is true, and not update the local state when display is toggled", () => {
                const mockOnChange = jest.fn();
                render(
                    <Filter.Item expanded={true} onExpandChange={mockOnChange}>
                        {ITEM_CONTENT}
                    </Filter.Item>
                );

                expect(
                    screen.queryByTestId("expandable-container")
                ).toHaveAttribute("data-expanded", "true");

                act(() => {
                    fireEvent.click(
                        screen.getByTestId("expand-collapse-button")
                    );
                });

                expect(
                    screen.getByTestId("expand-collapse-button")
                ).toHaveAttribute("aria-expanded", "true");
                expect(mockOnChange).toHaveBeenCalledWith(false);
            });

            it("should be always expanded on mobile even when expanded prop is false", () => {
                const mockOnChange = jest.fn();
                render(
                    <FilterContext.Provider
                        value={{ mode: "mobile", rootNode: { current: null } }}
                    >
                        <Filter.Item
                            expanded={false}
                            onExpandChange={mockOnChange}
                        >
                            {ITEM_CONTENT}
                        </Filter.Item>
                    </FilterContext.Provider>
                );

                expect(
                    screen.queryByTestId("expandable-container")
                ).toHaveAttribute("data-expanded", "true");
            });
        });

        describe("Expand behaviour (uncontrolled component)", () => {
            it("should expand when display is toggled", () => {
                const mockOnChange = jest.fn();
                render(
                    <Filter.Item onExpandChange={mockOnChange}>
                        {ITEM_CONTENT}
                    </Filter.Item>
                );

                act(() => {
                    fireEvent.click(
                        screen.getByTestId("expand-collapse-button")
                    );
                });

                expect(
                    screen.getByTestId("expand-collapse-button")
                ).toHaveAttribute("aria-expanded", "true");
                expect(mockOnChange).toHaveBeenCalledWith(true);
            });

            it("should collapse when display is toggled", () => {
                const mockOnChange = jest.fn();
                render(
                    <Filter.Item initialExpanded onExpandChange={mockOnChange}>
                        {ITEM_CONTENT}
                    </Filter.Item>
                );

                act(() => {
                    fireEvent.click(
                        screen.getByTestId("expand-collapse-button")
                    );
                });

                expect(
                    screen.getByTestId("expand-collapse-button")
                ).toHaveAttribute("aria-expanded", "false");
                expect(mockOnChange).toHaveBeenCalledWith(false);
            });
        });
    });

    describe("Filter.Checkbox", () => {
        describe("Rendering", () => {
            it("should render nested options with proper indentation", () => {
                render(
                    <Filter.Checkbox
                        title="Nested Options"
                        options={NESTED_OPTIONS}
                        data-testid="nested-checkbox"
                    />
                );

                expect(screen.getByText("Food & Dining")).toBeInTheDocument();
                expect(screen.getByText("Entertainment")).toBeInTheDocument();

                expect(screen.getByText("Fast Food")).toBeInTheDocument();
                expect(screen.getByText("Fine Dining")).toBeInTheDocument();
                expect(screen.getByText("Movies")).toBeInTheDocument();
            });

            it("should apply tree ARIA roles for nested structure", () => {
                render(
                    <Filter.Checkbox
                        title="Nested Options"
                        options={NESTED_OPTIONS}
                        data-testid="nested-checkbox"
                    />
                );

                const group = screen.getByRole("tree");
                expect(group).toHaveAttribute("aria-multiselectable", "true");
                expect(group).toHaveAttribute("aria-label", "Nested Options");

                const treeitems = screen.getAllByRole("treeitem");
                expect(treeitems).toHaveLength(5);

                const parentItem = treeitems[0];
                expect(parentItem).toHaveAttribute("aria-level", "1");
                expect(parentItem).toHaveAttribute("aria-posinset", "1");
                expect(parentItem).toHaveAttribute("aria-setsize", "2");

                const childItem = treeitems[1];
                expect(childItem).toHaveAttribute("aria-level", "2");
                expect(childItem).toHaveAttribute("aria-posinset", "1");
                expect(childItem).toHaveAttribute("aria-setsize", "2");
            });

            it("should render flat options without tree roles", () => {
                render(
                    <Filter.Checkbox
                        title="Flat Options"
                        options={FLAT_OPTIONS}
                        data-testid="flat-checkbox"
                    />
                );

                const group = screen.getByRole("group");
                expect(group).toHaveAttribute("aria-label", "Flat Options");

                expect(screen.queryAllByRole("treeitem")).toHaveLength(0);
            });
        });

        describe("Selection Behavior", () => {
            it("should select individual leaf items", () => {
                const mockOnSelect = jest.fn();
                render(
                    <Filter.Checkbox
                        title="Nested Options"
                        options={NESTED_OPTIONS}
                        onSelect={mockOnSelect}
                    />
                );

                const fastFoodItem = screen
                    .getByText("Fast Food")
                    .closest('[role="treeitem"]');
                fireEvent.click(fastFoodItem!);

                expect(mockOnSelect).toHaveBeenCalledWith([
                    expect.objectContaining({
                        value: "fast-food",
                        label: "Fast Food",
                    }),
                ]);
            });

            it("should select all children when parent is clicked", () => {
                const mockOnSelect = jest.fn();
                render(
                    <Filter.Checkbox
                        title="Nested Options"
                        options={NESTED_OPTIONS}
                        onSelect={mockOnSelect}
                    />
                );

                const foodDiningItem = screen
                    .getByText("Food & Dining")
                    .closest('[role="treeitem"]');
                fireEvent.click(foodDiningItem!);

                expect(mockOnSelect).toHaveBeenCalledWith(
                    expect.arrayContaining([
                        expect.objectContaining({
                            value: "fast-food",
                            label: "Fast Food",
                        }),
                        expect.objectContaining({
                            value: "fine-dining",
                            label: "Fine Dining",
                        }),
                    ])
                );
            });

            it("should show indeterminate state when some children are selected", () => {
                render(
                    <Filter.Checkbox
                        title="Nested Options"
                        options={NESTED_OPTIONS}
                        selectedOptions={[
                            { value: "fast-food", label: "Fast Food" },
                        ]}
                    />
                );

                // For nested items, find checkboxes within treeitem divs
                const parentCheckbox = screen
                    .getByText("Food & Dining")
                    .closest('[role="treeitem"]')
                    ?.querySelector('input[type="checkbox"]');
                expect(parentCheckbox).toHaveProperty("indeterminate", true);
                expect(parentCheckbox).not.toBeChecked();

                const fastFoodCheckbox = screen
                    .getByText("Fast Food")
                    .closest('[role="treeitem"]')
                    ?.querySelector('input[type="checkbox"]');
                expect(fastFoodCheckbox).toBeChecked();

                const fineDiningCheckbox = screen
                    .getByText("Fine Dining")
                    .closest('[role="treeitem"]')
                    ?.querySelector('input[type="checkbox"]');
                expect(fineDiningCheckbox).not.toBeChecked();
            });

            it("should show parent as checked when all children are selected", () => {
                render(
                    <Filter.Checkbox
                        title="Nested Options"
                        options={NESTED_OPTIONS}
                        selectedOptions={[
                            { value: "fast-food", label: "Fast Food" },
                            { value: "fine-dining", label: "Fine Dining" },
                        ]}
                    />
                );

                const parentCheckbox = screen
                    .getByText("Food & Dining")
                    .closest('[role="treeitem"]')
                    ?.querySelector('input[type="checkbox"]');
                expect(parentCheckbox).toBeChecked();
                expect(parentCheckbox).toHaveProperty("indeterminate", false);

                const fastFoodCheckbox = screen
                    .getByText("Fast Food")
                    .closest('[role="treeitem"]')
                    ?.querySelector('input[type="checkbox"]');
                const fineDiningCheckbox = screen
                    .getByText("Fine Dining")
                    .closest('[role="treeitem"]')
                    ?.querySelector('input[type="checkbox"]');
                expect(fastFoodCheckbox).toBeChecked();
                expect(fineDiningCheckbox).toBeChecked();
            });

            it("should deselect all children when checked parent is clicked", () => {
                const mockOnSelect = jest.fn();
                render(
                    <Filter.Checkbox
                        title="Nested Options"
                        options={NESTED_OPTIONS}
                        selectedOptions={[
                            { value: "fast-food", label: "Fast Food" },
                            { value: "fine-dining", label: "Fine Dining" },
                        ]}
                        onSelect={mockOnSelect}
                    />
                );

                const parentItem = screen
                    .getByText("Food & Dining")
                    .closest('[role="treeitem"]');
                fireEvent.click(parentItem!);

                expect(mockOnSelect).toHaveBeenCalledWith([]);
            });
        });

        describe("Select All/Clear All", () => {
            it("should show Select All button when there are 3+ options", () => {
                render(
                    <Filter.Checkbox
                        title="Nested Options"
                        options={NESTED_OPTIONS}
                    />
                );

                expect(screen.getByText("Select all")).toBeInTheDocument();
            });

            it("should not show Select All button when there are less than 3 options", () => {
                render(
                    <Filter.Checkbox
                        title="Few Options"
                        options={FLAT_OPTIONS.slice(0, 2)}
                    />
                );

                expect(
                    screen.queryByText("Select all")
                ).not.toBeInTheDocument();
            });

            it("should select all leaf options when Select All is clicked", () => {
                const mockOnSelect = jest.fn();
                render(
                    <Filter.Checkbox
                        title="Nested Options"
                        options={NESTED_OPTIONS}
                        onSelect={mockOnSelect}
                    />
                );

                fireEvent.click(screen.getByText("Select all"));

                expect(mockOnSelect).toHaveBeenCalledWith(
                    expect.arrayContaining([
                        expect.objectContaining({ value: "fast-food" }),
                        expect.objectContaining({ value: "fine-dining" }),
                        expect.objectContaining({ value: "movies" }),
                    ])
                );
            });

            it("should show Clear All when options are selected", () => {
                render(
                    <Filter.Checkbox
                        title="Nested Options"
                        options={NESTED_OPTIONS}
                        selectedOptions={[
                            { value: "fast-food", label: "Fast Food" },
                        ]}
                    />
                );

                expect(screen.getByText("Clear all")).toBeInTheDocument();
            });
        });
    });
});

describe("FilterSidebar", () => {
    const defaultLabels = {
        headerTitle: "Filters",
        clearButtonLabel: "Clear all",
    };

    it("renders sidebar with header and items", () => {
        render(
            <FilterSidebar>
                <div data-testid="filter-item">Item 1</div>
            </FilterSidebar>
        );

        expect(screen.getByText("Filters")).toBeInTheDocument();
        expect(screen.getByTestId("filter-item")).toBeInTheDocument();
    });

    it("renders custom labels correctly", () => {
        render(
            <FilterSidebar
                customLabels={{
                    headerTitle: "My Custom Header",
                    clearButtonLabel: "Reset",
                }}
            />
        );

        expect(screen.getByText("My Custom Header")).toBeInTheDocument();
        expect(screen.getByText("Reset")).toBeInTheDocument();
    });

    it("calls onClear when Clear All is clicked", () => {
        const mockOnClear = jest.fn();

        render(
            <FilterSidebar customLabels={defaultLabels} onClear={mockOnClear} />
        );

        fireEvent.click(screen.getByText("Clear all"));
        expect(mockOnClear).toHaveBeenCalled();
    });
});

describe("FilterModal", () => {
    const defaultLabels = {
        headerTitle: "Filter Options",
        toggleFilterButtonLabel: "Show filters",
        clearButtonLabel: "Clear all",
        doneButtonLabel: "Apply",
    };

    it("renders modal header and buttons", () => {
        render(
            <FilterModal>
                <div data-testid="modal-child">Hidden content</div>
            </FilterModal>
        );

        const child = screen.getByTestId("modal-child");
        expect(child).toBeInTheDocument();
        expect(child).not.toBeVisible();
    });

    it("calls onClear when Clear button is clicked", () => {
        const mockOnClear = jest.fn();
        render(
            <FilterModal customLabels={defaultLabels} onClear={mockOnClear} />
        );

        fireEvent.click(screen.getByText("Clear all"));
        expect(mockOnClear).toHaveBeenCalled();
    });

    it("calls onDone when Done button is clicked", () => {
        const mockOnDone = jest.fn();
        render(
            <FilterModal customLabels={defaultLabels} onDone={mockOnDone} />
        );

        fireEvent.click(screen.getByText("Apply"));
        expect(mockOnDone).toHaveBeenCalled();
    });

    it("renders children correctly", () => {
        render(
            <FilterModal customLabels={defaultLabels}>
                <div data-testid="modal-item">Item content</div>
            </FilterModal>
        );

        fireEvent.click(screen.getByText("Show filters"));

        expect(screen.getByTestId("modal-item")).toBeInTheDocument();
        expect(screen.getByTestId("modal-item")).toBeVisible();
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const DESKTOP_TESTID = "filter-desktop";
const MOBILE_TESTID = "filter-mobile";
const MOBILE_SHOW_BUTTON_TESTID = "filter-show-button";
const ITEM_TITLE = "test title";
const ITEM_CONTENT = "test body";
const NESTED_OPTIONS: FilterItemCheckboxOptionProps[] = [
    {
        value: "food",
        label: "Food & Dining",
        options: [
            {
                value: "fast-food",
                label: "Fast Food",
            },
            {
                value: "fine-dining",
                label: "Fine Dining",
            },
        ],
    },
    {
        value: "entertainment",
        label: "Entertainment",
        options: [
            {
                value: "movies",
                label: "Movies",
            },
        ],
    },
];
const FLAT_OPTIONS: FilterItemCheckboxOptionProps[] = [
    {
        value: "option1",
        label: "Option 1",
    },
    {
        value: "option2",
        label: "Option 2",
    },
    {
        value: "option3",
        label: "Option 3",
    },
];
