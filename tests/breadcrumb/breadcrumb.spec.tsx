import { render, screen } from "@testing-library/react";
import { Breadcrumb, BreadcrumbProps } from "../../src";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Breadcrumb", () => {
    beforeEach(() => {
        jest.resetAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render the component", () => {
        renderComponent();

        expect(screen.getAllByRole("listitem").length).toBe(3);
    });

    it("should render the url props", () => {
        renderComponent();

        DEFAULT_LINKS.forEach((metadata, index) => {
            const isLastBreadcrumb = index + 1 === DEFAULT_LINKS.length;
            const label = metadata.children as string;

            if (!isLastBreadcrumb) {
                expect(getBreadcrumb(label)).toBeInTheDocument();
            } else {
                expect(getBreadcrumb(label, true)).not.toBeInTheDocument();
                expect(screen.getByText(label)).toBeInTheDocument();
            }
        });
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_LINKS: React.AnchorHTMLAttributes<HTMLAnchorElement>[] = [
    {
        children: "LifeSG",
        href: "https://life.gov.sg",
        target: "_blank",
        rel: "noreferrer",
    },
    {
        children: "Google",
        href: "https://google.com/",
        target: "_blank",
        rel: "noreferrer",
    },
    {
        children: "Last breadcrumb",
        href: "https://google.com/",
        target: "_blank",
        rel: "noreferrer",
    },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const getBreadcrumb = (label: string, isQuery = false) => {
    if (isQuery) {
        return screen.queryByRole("link", { name: label });
    }
    return screen.getByRole("link", { name: label });
};

// =============================================================================
// RENDER FUNCTIONS
// =============================================================================
const renderComponent = (props?: Partial<BreadcrumbProps>) => {
    return render(<Breadcrumb links={DEFAULT_LINKS} {...props} />);
};
