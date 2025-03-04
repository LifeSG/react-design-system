import { render, screen } from "@testing-library/react";
import { Alert } from "../../src";
import { V2_Color } from "../../src";
import { StarIcon } from "@lifesg/react-icons/star";

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
            type             | backgroundColor                          | borderColor
            ${"success"}     | ${V2_Color.Validation.Green.Background}  | ${V2_Color.Validation.Green.Border}
            ${"warning"}     | ${V2_Color.Validation.Orange.Background} | ${V2_Color.Validation.Orange.Border}
            ${"error"}       | ${V2_Color.Validation.Red.Background}    | ${V2_Color.Validation.Red.Border}
            ${"info"}        | ${V2_Color.Validation.Blue.Background}   | ${V2_Color.Validation.Blue.Border}
            ${"description"} | ${V2_Color.Neutral[7]}                   | ${V2_Color.Neutral[4]}
        `(
            "should render background $backgroundColor with border $borderColor for $type type",
            ({ type, backgroundColor, borderColor }) => {
                render(<Alert type={type}>{DEFAULT_TEXT}</Alert>);

                expect(screen.getByText(DEFAULT_TEXT)).toHaveStyle({
                    backgroundColor,
                    borderColor: `2px solid ${borderColor}`,
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
