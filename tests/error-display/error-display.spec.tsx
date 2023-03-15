import { render, screen } from "@testing-library/react";

import { ErrorDisplay, ErrorDisplayProps } from "../../src";
import { ERROR_DISPLAY_DATA } from "../../src/error-display/error-display-data";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("ErrorDisplay", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should render the component", () => {
        renderComponent();

        const title = ERROR_DISPLAY_DATA.get("404").title;
        expect(screen.getByRole("heading", { level: 1, name: title }));
    });

    it("should render action button if prop is provided", () => {
        const buttonLabel = "custom button";
        const actionButton = {
            children: buttonLabel,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onClick: () => {},
        };

        renderComponent({ actionButton });

        expect(
            screen.getByRole("button", { name: buttonLabel })
        ).toBeInTheDocument();
    });

    it("should be able to render custom title if specified", () => {
        renderComponent({
            title: CUSTOM_TITLE,
        });

        expect(
            screen.getByRole("heading", { level: 1, name: CUSTOM_TITLE })
        ).toBeInTheDocument();
    });

    describe("description", () => {
        it("should able to render custom description", () => {
            renderComponent({
                description: CUSTOM_DESCRIPTION,
            });

            expect(screen.getByText(CUSTOM_DESCRIPTION)).toBeInTheDocument();
        });

        it("should be able to render JSX.Element", () => {
            renderComponent({
                description: <div>{CUSTOM_DESCRIPTION}</div>,
            });

            expect(screen.getByText(CUSTOM_DESCRIPTION)).toBeInTheDocument();
        });
    });

    describe("errorType", () => {
        it.each`
            type
            ${"400"}
            ${"403"}
            ${"404"}
            ${"408"}
            ${"500"}
            ${"503"}
            ${"maintenance"}
            ${"unsupported-browser"}
            ${"partially-supported-browser"}
        `("should support error display for $type error", ({ type }) => {
            renderComponent({ type });

            const error = ERROR_DISPLAY_DATA.get(type);

            expect(
                screen.getByRole("heading", { level: 1, name: error.title })
            ).toBeInTheDocument();

            expect(screen.getByRole("img", { name: "error" })).toHaveAttribute(
                "src",
                error.img.src
            );

            if (typeof error.description === "string") {
                expect(
                    screen.getByTestId(ERROR_DESCRIPTION_TEST_ID).textContent
                ).toBe(error.description);
            } else {
                expect(
                    screen.getByTestId(ERROR_DESCRIPTION_TEST_ID).textContent
                ).toBe(transformJSXElementToString(error.description));
            }
        });
    });

    describe("500 error", () => {
        it("should be able to render reference ID", () => {
            const additionalProps = { referenceId: "123" };

            renderComponent({
                type: "500",
                additionalProps,
            });

            const error = ERROR_DISPLAY_DATA.get("500");
            const errorDescription = transformJSXElementToString(
                error.renderDescription(additionalProps) as JSX.Element
            );

            expect(
                screen.getByTestId(ERROR_DESCRIPTION_TEST_ID).textContent
            ).toBe(errorDescription);
        });
    });

    describe("maintenance error", () => {
        it("should be able to render custom date string", () => {
            const additionalProps = { dateString: "01/01/2023" };

            renderComponent({
                type: "maintenance",
                additionalProps,
            });

            const error = ERROR_DISPLAY_DATA.get("maintenance");
            const errorDescription = transformJSXElementToString(
                error.renderDescription(additionalProps) as JSX.Element
            );

            expect(
                screen.getByTestId(ERROR_DESCRIPTION_TEST_ID).textContent
            ).toBe(errorDescription);
        });
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const CUSTOM_TITLE = "custom error";
const CUSTOM_DESCRIPTION = "custom description";
const ERROR_DESCRIPTION_TEST_ID = "error-display--description";

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const transformJSXElementToString = (element: JSX.Element): string => {
    let text = "";

    element.props.children.forEach((child) => {
        if (typeof child === "object") {
            text += child.props.children;
        } else {
            text += child;
        }
    });

    return text;
};

// =============================================================================
// RENDER FUNCTIONS
// =============================================================================
const renderComponent = (props?: Partial<ErrorDisplayProps>) => {
    return render(<ErrorDisplay {...props} type={props?.type || "404"} />);
};
