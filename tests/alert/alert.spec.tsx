import { render, screen } from "@testing-library/react";
import { Alert, AlertProps } from "../../src";
import { BaseColorSet } from "../../src/spec/color-spec/base-color-set";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Alert", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should render the component", () => {
        renderComponent();

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
                renderComponent({ type });

                expect(screen.getByText(DEFAULT_TEXT)).toHaveStyle({
                    backgroundColor,
                    borderColor: `2pt solid ${borderColor}`,
                });
            }
        );
    });

    describe("actionLink", () => {
        it("should render if the prop is provided", () => {
            renderComponent({ actionLink: { href: "www.google.com" } });

            expect(getActionLink()).toBeInTheDocument();
        });

        it("should render custom children if the prop is specified", () => {
            const customText = "custom text";
            renderComponent({
                actionLink: { href: "www.google.com", children: customText },
            });

            expect(getActionLink(false, customText)).toBeInTheDocument();
        });

        it("should not render if the prop is not provided", () => {
            renderComponent();

            expect(getActionLink(true)).not.toBeInTheDocument();
        });
    });

    it("should render custom display if required", () => {
        const CUSTOM_TEXT = "this is a custom component";
        renderComponent({ children: <div>{CUSTOM_TEXT}</div> });

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

// =============================================================================
// RENDER FUNCTIONS
// =============================================================================
const renderComponent = (props?: Partial<AlertProps>) => {
    return render(
        <Alert type="success" {...props}>
            {props?.children || DEFAULT_TEXT}
        </Alert>
    );
};
