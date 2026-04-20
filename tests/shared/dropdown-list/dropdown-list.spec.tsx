import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DropdownList } from "src/shared/dropdown-list/dropdown-list";
import { DropdownListState } from "src/shared/dropdown-list/dropdown-list-state";

const ITEMS = ["Option A", "Option B", "Option C", "Option D"];

const renderList = (
    props: Partial<React.ComponentProps<typeof DropdownList>> = {}
) =>
    render(
        <DropdownListState>
            <DropdownList
                listItems={ITEMS}
                listboxId="test-listbox"
                ariaLabel="Test list"
                {...props}
            />
        </DropdownListState>
    );

describe("DropdownList", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    // =========================================================================
    // Single selection
    // =========================================================================
    describe("single selection", () => {
        it("should call onSelectItem with the item when clicked", async () => {
            const user = userEvent.setup();
            const onSelectItem = jest.fn();
            renderList({ onSelectItem });

            await user.click(screen.getByRole("option", { name: "Option A" }));

            expect(onSelectItem).toHaveBeenCalledWith("Option A", "Option A");
        });

        it("should mark item as selected when it is in selectedItems", () => {
            renderList({ selectedItems: ["Option B"] });

            expect(
                screen.getByRole("option", { name: "Option B" })
            ).toHaveAttribute("aria-selected", "true");
            expect(
                screen.getByRole("option", { name: "Option A" })
            ).toHaveAttribute("aria-selected", "false");
        });

        it("should not mark item as selected when selectedItems is empty", () => {
            renderList({ selectedItems: [] });

            screen.getAllByRole("option").forEach((option) => {
                expect(option).toHaveAttribute("aria-selected", "false");
            });
        });
    });

    // =========================================================================
    // Multi-selection
    // =========================================================================
    describe("multi-selection", () => {
        it("should call onSelectItem for each item clicked", async () => {
            const user = userEvent.setup();
            const onSelectItem = jest.fn();
            renderList({ multiSelect: true, selectedItems: [], onSelectItem });

            await user.click(screen.getByRole("option", { name: "Option A" }));
            await user.click(screen.getByRole("option", { name: "Option C" }));

            expect(onSelectItem).toHaveBeenCalledTimes(2);
            expect(onSelectItem).toHaveBeenNthCalledWith(
                1,
                "Option A",
                "Option A"
            );
            expect(onSelectItem).toHaveBeenNthCalledWith(
                2,
                "Option C",
                "Option C"
            );
        });

        it("should call onSelectAll when select all button is clicked", async () => {
            const user = userEvent.setup();
            const onSelectAll = jest.fn();
            renderList({
                multiSelect: true,
                selectedItems: [],
                onSelectAll,
            });

            await user.click(
                screen.getByRole("button", { name: "Select all" })
            );

            expect(onSelectAll).toHaveBeenCalledTimes(1);
        });

        it("should show clear all button when items are selected", () => {
            renderList({
                multiSelect: true,
                selectedItems: ["Option A"],
                onSelectAll: jest.fn(),
            });

            expect(
                screen.getByRole("button", { name: "Clear all" })
            ).toBeInTheDocument();
        });

        it("should not allow selecting beyond maxSelectable", async () => {
            const user = userEvent.setup();
            const onSelectItem = jest.fn();
            renderList({
                multiSelect: true,
                maxSelectable: 2,
                selectedItems: ["Option A", "Option B"],
                onSelectItem,
            });

            await user.click(screen.getByRole("option", { name: "Option C" }));

            expect(onSelectItem).not.toHaveBeenCalled();
        });
    });

    // =========================================================================
    // Search
    // =========================================================================
    describe("search", () => {
        const SEARCH_ITEMS = [
            "Apple",
            "Banana",
            "Cherry",
            "Date",
            "Elderberry",
        ];

        it("should filter items matching the search term", async () => {
            const user = userEvent.setup();
            renderList({ listItems: SEARCH_ITEMS, enableSearch: true });

            await user.type(
                screen.getByRole("textbox", { name: "Enter text to search" }),
                "an"
            );

            expect(screen.getAllByRole("option")).toHaveLength(1);
            expect(
                screen.getByRole("option", { name: "Banana" })
            ).toBeInTheDocument();
        });

        it("should show no-results element when nothing matches", async () => {
            const user = userEvent.setup();
            renderList({ listItems: SEARCH_ITEMS, enableSearch: true });

            await user.type(
                screen.getByRole("textbox", { name: "Enter text to search" }),
                "zzz"
            );

            expect(screen.getByTestId("list-no-results")).toBeInTheDocument();
        });

        it("should restore all items after clearing the search", async () => {
            const user = userEvent.setup();
            renderList({ listItems: SEARCH_ITEMS, enableSearch: true });

            const input = screen.getByRole("textbox", {
                name: "Enter text to search",
            });
            await user.type(input, "Apple");
            expect(screen.getAllByRole("option")).toHaveLength(1);

            await user.clear(input);
            expect(screen.getAllByRole("option")).toHaveLength(
                SEARCH_ITEMS.length
            );
        });
    });

    // =========================================================================
    // Keyboard navigation
    // =========================================================================
    describe("keyboard navigation", () => {
        it("should move focus down on ArrowDown", async () => {
            const user = userEvent.setup();
            renderList();

            const options = screen.getAllByRole("option");
            options[0].focus();

            await user.keyboard("{ArrowDown}");

            expect(options[1]).toHaveFocus();
        });

        it("should move focus up on ArrowUp", async () => {
            const user = userEvent.setup();
            renderList();

            const options = screen.getAllByRole("option");
            options[0].focus();

            await user.keyboard("{ArrowDown}");
            await user.keyboard("{ArrowDown}");
            await user.keyboard("{ArrowUp}");

            expect(options[1]).toHaveFocus();
        });

        it("should call onSelectItem on Enter", async () => {
            const user = userEvent.setup();
            const onSelectItem = jest.fn();
            renderList({ selectedItems: [], onSelectItem });

            const options = screen.getAllByRole("option");
            options[0].focus();

            await user.keyboard("{Enter}");

            expect(onSelectItem).toHaveBeenCalledWith("Option A", "Option A");
        });

        it("should call onSelectItem on Space", async () => {
            const user = userEvent.setup();
            const onSelectItem = jest.fn();
            renderList({ selectedItems: [], onSelectItem });

            const options = screen.getAllByRole("option");
            options[0].focus();

            await user.keyboard("{ArrowDown}");
            await user.keyboard(" ");

            expect(onSelectItem).toHaveBeenCalledWith("Option B", "Option B");
        });
    });

    // =========================================================================
    // Load states
    // =========================================================================
    describe("load states", () => {
        it("should show loading spinner when itemsLoadState is loading", () => {
            renderList({ itemsLoadState: "loading", onRetry: jest.fn() });

            expect(screen.getByTestId("list-loading")).toBeInTheDocument();
        });

        it("should show fail state when itemsLoadState is fail", () => {
            renderList({ itemsLoadState: "fail", onRetry: jest.fn() });

            expect(screen.getByTestId("list-fail")).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "Try again." })
            ).toBeInTheDocument();
        });

        it("should call onRetry when try again is clicked", async () => {
            const user = userEvent.setup();
            const onRetry = jest.fn();
            renderList({ itemsLoadState: "fail", onRetry });

            await user.click(
                screen.getByRole("button", { name: "Try again." })
            );

            expect(onRetry).toHaveBeenCalledTimes(1);
        });
    });

    // =========================================================================
    // Custom CTA
    // =========================================================================
    describe("custom CTA", () => {
        it("should render the custom call-to-action at the bottom", () => {
            renderList({
                renderCustomCallToAction: () => (
                    <button type="button">Apply</button>
                ),
            });

            expect(screen.getByTestId("custom-cta")).toBeInTheDocument();
            expect(
                screen.getByRole("button", { name: "Apply" })
            ).toBeInTheDocument();
        });

        it("should pass the current display items to the custom CTA render function", () => {
            const renderCustomCallToAction = jest.fn(() => <div>CTA</div>);
            renderList({ renderCustomCallToAction });

            expect(renderCustomCallToAction).toHaveBeenCalledWith(
                undefined,
                ITEMS
            );
        });
    });
});
