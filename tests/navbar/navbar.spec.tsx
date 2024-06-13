import { render, screen } from "@testing-library/react";
import { Navbar } from "src/navbar";

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
