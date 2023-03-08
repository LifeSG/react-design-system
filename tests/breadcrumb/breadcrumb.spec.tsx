import { render, screen } from "@testing-library/react";
import { Breadcrumb, BreadcrumbProps } from "../../src";

const defaultLinks: React.AnchorHTMLAttributes<HTMLAnchorElement>[] = [
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
    },
];
const renderComponent = (props?: Partial<BreadcrumbProps>) => {
    return render(<Breadcrumb links={defaultLinks} {...props} />);
};

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

        defaultLinks.forEach((metadata) => {
            const label = metadata.children as string;
            const hasUrl = metadata.href;

            expect(
                hasUrl
                    ? screen.getByRole("link", { name: label })
                    : screen.getByText(label)
            ).toBeInTheDocument();
        });
    });
});
