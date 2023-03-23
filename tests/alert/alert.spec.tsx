import { render, screen } from "@testing-library/react";
import { Alert } from "../../src";
import { BaseColorSet } from "../../src/spec/color-spec/base-color-set";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Alert", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should render the component", () => {
        render(<Alert type="success">{DEFAULT_TEXT}</Alert>);

        expect(screen.getByText(DEFAULT_TEXT)).toBeInTheDocument();
    });

    describe("type", () => {
        it.each`
            type         | backgroundColor                              | borderColor
            ${"success"} | ${BaseColorSet.Validation.Green.Background}  | ${BaseColorSet.Validation.Green.Border}
            ${"warning"} | ${BaseColorSet.Validation.Orange.Background} | ${BaseColorSet.Validation.Orange.Background}
            ${"error"}   | ${BaseColorSet.Validation.Red.Background}    | ${BaseColorSet.Validation.Red.Background}
        `(
            "should render background $backgroundColor with border $borderColor for $type type",
            ({ type, backgroundColor, borderColor }) => {
                render(<Alert type={type}>{DEFAULT_TEXT}</Alert>);

                expect(screen.getByText(DEFAULT_TEXT)).toHaveStyle({
                    backgroundColor,
                    borderColor: `2pt solid ${borderColor}`,
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
        return screen.queryByRole("link", children && { name: children });
    }
    return screen.getByRole("link", children && { name: children });
};
