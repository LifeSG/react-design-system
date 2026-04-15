import { StarIcon } from "@lifesg/react-icons/star";
import { render, screen } from "@testing-library/react";
import { Alert } from "src";
import { Colour } from "src/theme/tokens/colour";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Alert", () => {
    beforeEach(() => {
        jest.resetAllMocks();
        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render the component", () => {
        render(<Alert type="success">{DEFAULT_TEXT}</Alert>);

        expect(screen.getByText(DEFAULT_TEXT)).toBeInTheDocument();
    });

    describe("type", () => {
        it.each`
            type             | backgroundColor         | borderColor
            ${"success"}     | ${Colour["bg-success"]} | ${Colour["border-success"]}
            ${"warning"}     | ${Colour["bg-warning"]} | ${Colour["border-warning"]}
            ${"error"}       | ${Colour["bg-error"]}   | ${Colour["border-error"]}
            ${"info"}        | ${Colour["bg-info"]}    | ${Colour["border-info"]}
            ${"description"} | ${Colour["bg-strong"]}  | ${Colour["border-strong"]}
        `(
            "should render background $backgroundColor with border $borderColor for $type type",
            ({ type, backgroundColor, borderColor }) => {
                render(
                    <Alert data-testid="alert" type={type}>
                        {DEFAULT_TEXT}
                    </Alert>
                );
                expect(screen.getByTestId("alert")).toHaveStyle({
                    background: backgroundColor,
                    borderLeftColor: borderColor,
                });
            }
        );
    });

    describe("actionLink", () => {
        it("should render if the prop is provided", () => {
            render(
                <Alert type="success" actionLink={{ href: "www.google.com" }}>
                    {DEFAULT_TEXT}
                </Alert>
            );

            expect(getActionLink()).toBeInTheDocument();
        });

        it("should render custom children if the prop is specified", () => {
            const customText = "custom text";

            render(
                <Alert
                    type="success"
                    actionLink={{
                        href: "www.google.com",
                        children: customText,
                    }}
                >
                    {DEFAULT_TEXT}
                </Alert>
            );

            expect(getActionLink(false, customText)).toBeInTheDocument();
        });

        it("should not render if the prop is not provided", () => {
            render(<Alert type="success" />);

            expect(getActionLink(true)).not.toBeInTheDocument();
        });
    });

    describe("customIcon", () => {
        it("should render a custom icon if specified", () => {
            render(
                <Alert
                    type="success"
                    showIcon={true}
                    customIcon={<StarIcon data-testid="star-test" />}
                >
                    {DEFAULT_TEXT}
                </Alert>
            );

            expect(getCustomIcon()).toBeInTheDocument();
        });
    });

    it("should render custom display if required", () => {
        const CUSTOM_TEXT = "this is a custom component";

        render(<Alert type="success">{CUSTOM_TEXT}</Alert>);

        expect(screen.getByText(CUSTOM_TEXT)).toBeInTheDocument();
    });

    describe("collapsed content accessibility", () => {
        it("should set inert when maxCollapsedHeight is provided", () => {
            render(
                <Alert type="success" maxCollapsedHeight={40}>
                    {DEFAULT_TEXT}
                </Alert>
            );

            const content = screen.getByText(DEFAULT_TEXT);
            expect(content.closest("[inert]")).toBeInTheDocument();
        });

        it("should not set inert when maxCollapsedHeight is not provided", () => {
            render(<Alert type="success">{DEFAULT_TEXT}</Alert>);

            const content = screen.getByText(DEFAULT_TEXT);
            expect(content.closest("[inert]")).toBeNull();
        });
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_TEXT = "default text";

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const getActionLink = (isQuery = false, children?: string) => {
    if (isQuery) {
        return screen.queryByRole(
            "link",
            children ? { name: children } : undefined
        );
    }
    return screen.getByRole("link", children ? { name: children } : undefined);
};

const getCustomIcon = () => {
    return screen.queryByTestId("star-test");
};
