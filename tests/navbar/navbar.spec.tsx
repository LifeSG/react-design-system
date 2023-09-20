import { render } from "@testing-library/react";
import { Navbar } from "src/navbar";

describe("Navbar", () => {
    describe("Basic functions", () => {
        it("should render the items (desktop and mobile) if specified", () => {
            const rendered = render(
                <Navbar
                    items={{
                        desktop: MOCK_ITEMS,
                        mobile: MOCK_ITEMS,
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
                <Navbar
                    items={{
                        desktop: MOCK_ITEMS,
                    }}
                />
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
                        desktop: MOCK_ITEMS,
                    }}
                    selectedId="first"
                />
            );

            const { getByTestId } = rendered;
            expect(getByTestId("link__1-indicator")).toBeInTheDocument();
        });

        it("should render the primary brand", () => {
            const rendered = render(
                <Navbar
                    items={{
                        desktop: MOCK_ITEMS,
                    }}
                />
            );

            const { getByTestId } = rendered;
            expect(getByTestId("main__brand")).toBeInTheDocument();
        });

        it("should render the secondary brand if specified", () => {
            const rendered = render(
                <Navbar
                    items={{
                        desktop: MOCK_ITEMS,
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

        it("should render the mobile menu button if there are items specified", () => {
            const rendered = render(
                <Navbar
                    items={{
                        desktop: MOCK_ITEMS,
                    }}
                />
            );

            const { getByTestId } = rendered;
            expect(getByTestId("button__mobile-menu")).toBeInTheDocument();
        });

        it("should not render the links and mobile menu button if there no items are specified", () => {
            const rendered = render(
                <Navbar
                    items={{
                        desktop: [],
                    }}
                />
            );

            const { queryByTestId } = rendered;
            expect(queryByTestId("link__1")).not.toBeInTheDocument();
            expect(
                queryByTestId("button__mobile-menu")
            ).not.toBeInTheDocument();
        });

        it("should not render the links and mobile menu button if hideNavElements is set to true", () => {
            const rendered = render(
                <Navbar
                    items={{
                        desktop: MOCK_ITEMS,
                    }}
                    hideNavElements
                />
            );

            const { queryByTestId } = rendered;
            expect(queryByTestId("link__1")).not.toBeInTheDocument();
            expect(
                queryByTestId("button__mobile-menu")
            ).not.toBeInTheDocument();
        });
    });
});
// =============================================================================
// MOCKS
// =============================================================================
const MOCK_ITEMS = [
    {
        id: "first",
        children: "First",
    },
    {
        id: "second",
        children: "Second",
    },
];
