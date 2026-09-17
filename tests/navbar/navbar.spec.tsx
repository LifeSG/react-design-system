import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "src/navbar";
import * as subMenuGridStyles from "src/navbar/submenu-grid.styles";

describe("Navbar", () => {
    describe("Basic functions", () => {
        it("should render the items (desktop and mobile) if specified", () => {
            const rendered = render(
                <Navbar
                    items={{
                        desktop: MOCK_ITEMS(),
                        mobile: MOCK_ITEMS(),
                    }}
                />
            );

            const { getByTestId } = rendered;

            expect(getByTestId("link__1")).toBeInTheDocument();
            expect(getByTestId("link__2")).toBeInTheDocument();
            expect(getByTestId("link__mobile-1")).toBeInTheDocument();
            expect(getByTestId("link__mobile-2")).toBeInTheDocument();
        });

        it("should render the mobile items even if mobile items are not specified", () => {
            const rendered = render(
                <Navbar items={{ desktop: MOCK_ITEMS() }} />
            );

            const { getByTestId } = rendered;

            expect(getByTestId("link__1")).toBeInTheDocument();
            expect(getByTestId("link__2")).toBeInTheDocument();
            expect(getByTestId("link__mobile-1")).toBeInTheDocument();
            expect(getByTestId("link__mobile-2")).toBeInTheDocument();
        });

        it("should render the indicator on the correct item when clicked", () => {
            const rendered = render(
                <Navbar
                    items={{
                        desktop: MOCK_ITEMS(),
                    }}
                    selectedId="first"
                />
            );

            const { getByTestId } = rendered;
            expect(getByTestId("link__1-indicator")).toBeInTheDocument();
        });

        it("should not move the indicator when focusing another non-submenu item", async () => {
            const user = userEvent.setup();

            render(
                <Navbar items={{ desktop: MOCK_ITEMS() }} selectedId="first" />
            );

            expect(screen.getByTestId("link__1-indicator")).toBeInTheDocument();
            expect(
                screen.queryByTestId("link__2-indicator")
            ).not.toBeInTheDocument();

            await user.tab(); // focuses first item
            await user.tab(); // tabbed focus to second item

            expect(screen.getByTestId("link__1-indicator")).toBeInTheDocument();
            expect(
                screen.queryByTestId("link__2-indicator")
            ).not.toBeInTheDocument();
        });

        it("should render the primary brand", () => {
            const rendered = render(
                <Navbar items={{ desktop: MOCK_ITEMS() }} />
            );

            const { getByTestId } = rendered;
            expect(getByTestId("main__brand")).toBeInTheDocument();
        });

        it("should render the secondary brand if specified", () => {
            const rendered = render(
                <Navbar
                    items={{
                        desktop: MOCK_ITEMS(),
                    }}
                    resources={{
                        secondary: {
                            brandName: "Another",
                            logoSrc:
                                "https://assets.life.gov.sg/lifesg/logo-lifesg.svg",
                        },
                    }}
                />
            );

            const { getByTestId } = rendered;
            expect(getByTestId("main__brand-secondary")).toBeInTheDocument();
        });

        it("should not render the links and mobile menu button if hideNavElements is set to true", () => {
            const rendered = render(
                <Navbar items={{ desktop: MOCK_ITEMS() }} hideNavElements />
            );

            const { queryByTestId } = rendered;
            expect(queryByTestId("link__1")).not.toBeInTheDocument();
            expect(
                queryByTestId("button__mobile-menu")
            ).not.toBeInTheDocument();
        });

        describe("mobile menu button", () => {
            it.each`
                scenario                             | desktopItems | mobileItems  | desktopButtons                   | mobileButtons
                ${"there are no items"}              | ${[]}        | ${[]}        | ${[]}                            | ${[]}
                ${"desktop buttons are uncollapsed"} | ${[]}        | ${undefined} | ${[MOCK_UNCOLLAPSIBLE_BUTTON()]} | ${undefined}
                ${"mobile buttons are uncollapsed"}  | ${[]}        | ${undefined} | ${[MOCK_COLLAPSIBLE_BUTTON()]}   | ${[MOCK_UNCOLLAPSIBLE_BUTTON()]}
            `(
                "should hide the mobile menu button given $scenario",
                ({
                    desktopItems,
                    mobileItems,
                    desktopButtons,
                    mobileButtons,
                }) => {
                    render(
                        <Navbar
                            items={{
                                desktop: desktopItems,
                                mobile: mobileItems,
                            }}
                            actionButtons={{
                                desktop: desktopButtons,
                                mobile: mobileButtons,
                            }}
                        />
                    );

                    expect(
                        screen.queryByTestId("button__mobile-menu")
                    ).not.toBeInTheDocument();
                }
            );

            it.each`
                scenario                           | desktopItems    | mobileItems     | desktopButtons                   | mobileButtons
                ${"there are desktop items"}       | ${MOCK_ITEMS()} | ${undefined}    | ${[]}                            | ${undefined}
                ${"there are mobile items"}        | ${[]}           | ${MOCK_ITEMS()} | ${[]}                            | ${undefined}
                ${"desktop buttons are collapsed"} | ${[]}           | ${undefined}    | ${[MOCK_COLLAPSIBLE_BUTTON()]}   | ${undefined}
                ${"mobile buttons are collapsed"}  | ${[]}           | ${undefined}    | ${[MOCK_UNCOLLAPSIBLE_BUTTON()]} | ${[MOCK_COLLAPSIBLE_BUTTON()]}
            `(
                "should show the mobile menu button given $scenario",
                ({
                    desktopItems,
                    mobileItems,
                    desktopButtons,
                    mobileButtons,
                }) => {
                    render(
                        <Navbar
                            items={{
                                desktop: desktopItems,
                                mobile: mobileItems,
                            }}
                            actionButtons={{
                                desktop: desktopButtons,
                                mobile: mobileButtons,
                            }}
                        />
                    );

                    expect(
                        screen.queryByTestId("button__mobile-menu")
                    ).toBeInTheDocument();
                }
            );
        });
    });

    describe("Submenu grid", () => {
        it("should render all subMenu item labels even when the visible cutoff is exceeded", async () => {
            const user = userEvent.setup();
            render(<Navbar items={{ desktop: MOCK_GRID_ITEMS() }} />);

            await user.click(screen.getByTestId("link__1"));

            for (const label of MOCK_SUBMENU_LABELS) {
                expect(screen.getByText(label)).toBeInTheDocument();
            }
        });

        it("should apply the grid layout when subMenuColumns and subMenuRows are both set", async () => {
            const user = userEvent.setup();
            render(<Navbar items={{ desktop: MOCK_GRID_ITEMS() }} />);

            await user.click(screen.getByTestId("link__1"));

            expect(
                document.body.getElementsByClassName(subMenuGridStyles.grid)
            ).toHaveLength(1);
        });

        it("should fall back to the vertical list when only one of subMenuColumns/subMenuRows is set", async () => {
            const user = userEvent.setup();
            render(
                <Navbar
                    items={{
                        desktop: [
                            {
                                id: "guides",
                                children: "Guides",
                                subMenuColumns: 2,
                                subMenu: MOCK_SUBMENU_ITEMS(),
                            },
                        ],
                    }}
                />
            );

            await user.click(screen.getByTestId("link__1"));

            for (const label of MOCK_SUBMENU_LABELS) {
                expect(screen.getByText(label)).toBeInTheDocument();
            }
            expect(
                document.body.getElementsByClassName(subMenuGridStyles.grid)
            ).toHaveLength(0);
        });

        it("should move focus between grid items with ArrowDown", async () => {
            const user = userEvent.setup();
            render(<Navbar items={{ desktop: MOCK_GRID_ITEMS() }} />);

            await user.click(screen.getByTestId("link__1"));

            const panel = screen.getByTestId("menu-content");
            const first = screen.getByRole("link", { name: "Sub item 1" });
            const second = screen.getByRole("link", { name: "Sub item 2" });

            first.focus();
            expect(first).toHaveFocus();

            fireEvent.keyDown(panel, { key: "ArrowDown" });
            expect(second).toHaveFocus();
        });
    });
});

// =============================================================================
// MOCKS
// =============================================================================
function MOCK_ITEMS() {
    return [
        {
            id: "first",
            children: "First",
        },
        {
            id: "second",
            children: "Second",
        },
    ];
}

function MOCK_UNCOLLAPSIBLE_BUTTON() {
    return {
        type: "button",
        args: { children: "Collapsible" },
        uncollapsible: true,
    };
}

function MOCK_COLLAPSIBLE_BUTTON() {
    return {
        type: "button",
        args: { children: "Uncollapsible" },
    };
}

function MOCK_SUBMENU_ITEMS() {
    return [
        { id: "sub-1", children: "Sub item 1", href: "#" },
        { id: "sub-2", children: "Sub item 2", href: "#" },
        { id: "sub-3", children: "Sub item 3", href: "#" },
        { id: "sub-4", children: "Sub item 4", href: "#" },
        { id: "sub-5", children: "Sub item 5", href: "#" },
    ];
}

const MOCK_SUBMENU_LABELS = MOCK_SUBMENU_ITEMS().map((item) => item.children);

function MOCK_GRID_ITEMS() {
    return [
        {
            id: "guides",
            children: "Guides",
            subMenuColumns: 2,
            subMenuRows: 2,
            subMenu: MOCK_SUBMENU_ITEMS(),
        },
    ];
}
