import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LocalNavDropdown, LocalNavMenu } from "../../src/local-nav";
import { LocalNavItemProps } from "../../src/local-nav/types";

const MOCK_ITEMS: LocalNavItemProps[] = [
    { title: "Section 1" },
    { title: "Section 2" },
    { title: "Section 3" },
];

describe("LocalNav", () => {
    describe("Menu variant", () => {
        it("should render all menu items", () => {
            const mockOnSelect = jest.fn();

            render(
                <LocalNavMenu
                    items={MOCK_ITEMS}
                    onNavItemSelect={mockOnSelect}
                />
            );

            expect(screen.getByText("Section 1")).toBeInTheDocument();
            expect(screen.getByText("Section 2")).toBeInTheDocument();
            expect(screen.getByText("Section 3")).toBeInTheDocument();
        });

        it("should highlight selected item", () => {
            const mockOnSelect = jest.fn();

            render(
                <LocalNavMenu
                    items={MOCK_ITEMS}
                    selectedItemIndex={1}
                    onNavItemSelect={mockOnSelect}
                />
            );

            expect(
                screen.getByText("Section 2").closest("div")
            ).toHaveAttribute("aria-current", "true");
        });

        it("should call onNavItemSelect when item is clicked", async () => {
            const user = userEvent.setup();
            const mockOnSelect = jest.fn();

            render(
                <LocalNavMenu
                    items={MOCK_ITEMS}
                    onNavItemSelect={mockOnSelect}
                />
            );

            await user.click(screen.getByText("Section 2"));

            expect(mockOnSelect).toHaveBeenCalledWith(
                expect.anything(),
                MOCK_ITEMS[1],
                1
            );
        });

        it("should render custom items when renderItem is provided", () => {
            const mockOnSelect = jest.fn();
            const customRender = (item: LocalNavItemProps) => (
                <span>Custom: {item.title}</span>
            );

            render(
                <LocalNavMenu
                    items={MOCK_ITEMS}
                    onNavItemSelect={mockOnSelect}
                    renderItem={customRender}
                />
            );

            expect(screen.getByText("Custom: Section 1")).toBeInTheDocument();
        });
    });

    describe("LocalNavDropdown", () => {
        beforeEach(() => {
            global.IntersectionObserver = jest.fn().mockImplementation(() => ({
                observe: jest.fn(),
                unobserve: jest.fn(),
                disconnect: jest.fn(),
            }));
        });

        it("should render with default label", () => {
            const mockOnSelect = jest.fn();

            render(
                <LocalNavDropdown
                    items={MOCK_ITEMS}
                    defaultLabel="Select section"
                    onNavItemSelect={mockOnSelect}
                />
            );

            expect(
                screen.getByRole("button", { name: "Select section" })
            ).toBeInTheDocument();
            expect(screen.queryByRole("menu")).not.toBeInTheDocument();
            expect(screen.queryAllByRole("menuitem")).toHaveLength(0);
        });

        it("should show default label in non-sticky mode", () => {
            const mockOnSelect = jest.fn();

            render(
                <LocalNavDropdown
                    items={MOCK_ITEMS}
                    defaultLabel="Select section"
                    selectedItemIndex={1}
                    onNavItemSelect={mockOnSelect}
                />
            );

            expect(
                screen.getByRole("button", { name: "Select section" })
            ).toBeInTheDocument();
        });

        it("should show selected item label in sticky mode", () => {
            const mockOnSelect = jest.fn();

            render(
                <LocalNavDropdown
                    items={MOCK_ITEMS}
                    defaultLabel="Select section"
                    selectedItemIndex={1}
                    onNavItemSelect={mockOnSelect}
                />
            );

            const callback = (global.IntersectionObserver as jest.Mock).mock
                .lastCall?.[0];

            act(() => {
                callback([{ isIntersecting: false }]);
            });

            expect(
                screen.getByRole("button", { name: "Section 2" })
            ).toBeInTheDocument();
        });

        it("should open dropdown when clicked", async () => {
            const user = userEvent.setup();
            const mockOnSelect = jest.fn();

            render(
                <LocalNavDropdown
                    items={MOCK_ITEMS}
                    defaultLabel="Select section"
                    onNavItemSelect={mockOnSelect}
                />
            );

            await user.click(screen.getByText("Select section"));

            expect(screen.getByRole("menu")).toBeInTheDocument();
            expect(screen.getAllByRole("menuitem")).toHaveLength(3);
            expect(screen.getByText("Section 1")).toBeInTheDocument();
            expect(screen.getByText("Section 2")).toBeInTheDocument();
            expect(screen.getByText("Section 3")).toBeInTheDocument();
        });

        it("should call onNavItemSelect when dropdown item is clicked", async () => {
            const user = userEvent.setup();
            const mockOnSelect = jest.fn();

            render(
                <LocalNavDropdown
                    items={MOCK_ITEMS}
                    defaultLabel="Select section"
                    onNavItemSelect={mockOnSelect}
                />
            );

            await user.click(screen.getByText("Select section"));
            await user.click(screen.getByText("Section 2"));

            expect(mockOnSelect).toHaveBeenCalledWith(
                expect.any(Object),
                MOCK_ITEMS[1],
                1
            );
        });

        it("should close dropdown after selection", async () => {
            const user = userEvent.setup();
            const mockOnSelect = jest.fn();

            render(
                <LocalNavDropdown
                    items={MOCK_ITEMS}
                    defaultLabel="Select section"
                    onNavItemSelect={mockOnSelect}
                />
            );

            await user.click(screen.getByText("Select section"));

            expect(screen.queryByRole("menu")).toBeInTheDocument();

            await user.click(screen.getByText("Section 1"));

            expect(screen.queryByRole("menu")).not.toBeInTheDocument();
        });

        it("should render custom dropdown items when renderItem is provided", async () => {
            const user = userEvent.setup();
            const mockOnSelect = jest.fn();
            const customRender = (item: LocalNavItemProps) => (
                <span>Custom: {item.title}</span>
            );

            render(
                <LocalNavDropdown
                    items={MOCK_ITEMS}
                    defaultLabel="Select section"
                    onNavItemSelect={mockOnSelect}
                    renderItem={customRender}
                />
            );

            await user.click(screen.getByText("Select section"));

            expect(screen.getByText("Custom: Section 1")).toBeInTheDocument();
        });

        it("should handle keyboard navigation and selection", async () => {
            const user = userEvent.setup();
            const mockOnSelect = jest.fn();

            render(
                <LocalNavDropdown
                    items={MOCK_ITEMS}
                    defaultLabel="Select section"
                    onNavItemSelect={mockOnSelect}
                />
            );

            await user.keyboard("{Tab}");

            expect(
                screen.getByTestId("local-nav-dropdown-label")
            ).toHaveFocus();

            await user.keyboard(" ");

            expect(screen.getByRole("menu")).toBeInTheDocument();
            expect(
                screen.getByRole("menuitem", { name: "Section 1" })
            ).toHaveFocus();

            await user.keyboard("{ArrowDown}");

            expect(
                screen.getByRole("menuitem", { name: "Section 2" })
            ).toHaveFocus();

            await user.keyboard(" ");

            expect(screen.queryByRole("menu")).not.toBeInTheDocument();
            expect(mockOnSelect).toHaveBeenCalledWith(
                expect.any(Object),
                MOCK_ITEMS[1],
                1
            );
        });
    });
});
