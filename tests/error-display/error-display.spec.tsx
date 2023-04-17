import { render, screen } from "@testing-library/react";

import { ErrorDisplay, ErrorDisplayType } from "../../src";
import {
    ERROR_DISPLAY_DATA,
    ErrorDisplayDataAttrs,
} from "../../src/error-display/error-display-data";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("ErrorDisplay", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should render the component", () => {
        render(<ErrorDisplay type="404" />);

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

        render(<ErrorDisplay type="404" actionButton={actionButton} />);

        expect(
            screen.getByRole("button", { name: buttonLabel })
        ).toBeInTheDocument();
    });

    it("should be able to render custom title if specified", () => {
        render(<ErrorDisplay type="404" title={CUSTOM_TITLE} />);

        expect(
            screen.getByRole("heading", { level: 1, name: CUSTOM_TITLE })
        ).toBeInTheDocument();
    });

    describe("description", () => {
        it("should be able to render custom description", () => {
            render(
                <ErrorDisplay type="404" description={CUSTOM_DESCRIPTION} />
            );

            expect(screen.getByText(CUSTOM_DESCRIPTION)).toBeInTheDocument();
        });

        it("should be able to render JSX.Element", () => {
            render(
                <ErrorDisplay
                    type="404"
                    description={<div>{CUSTOM_DESCRIPTION}</div>}
                />
            );

            expect(screen.getByText(CUSTOM_DESCRIPTION)).toBeInTheDocument();
        });
    });

    describe("ErrorDisplay components", () => {
        const testData = [
            ["400", ERROR_DISPLAY_DATA.get("400")],
            ["403", ERROR_DISPLAY_DATA.get("403")],
            ["404", ERROR_DISPLAY_DATA.get("404")],
            ["408", ERROR_DISPLAY_DATA.get("408")],
            ["500", ERROR_DISPLAY_DATA.get("500")],
            ["502", ERROR_DISPLAY_DATA.get("502")],
            ["503", ERROR_DISPLAY_DATA.get("503")],
            ["504", ERROR_DISPLAY_DATA.get("504")],
            ["confirmation", ERROR_DISPLAY_DATA.get("confirmation")],
            ["inactivity", ERROR_DISPLAY_DATA.get("inactivity")],
            [
                "insufficient-credits",
                ERROR_DISPLAY_DATA.get("insufficient-credits"),
            ],
            ["link-error", ERROR_DISPLAY_DATA.get("link-error")],
            ["logout", ERROR_DISPLAY_DATA.get("logout")],
            ["warning", ERROR_DISPLAY_DATA.get("warning")],
            ["maintenance", ERROR_DISPLAY_DATA.get("maintenance")],
            ["no-item-found", ERROR_DISPLAY_DATA.get("no-item-found")],
            [
                "payment-unsuccessful",
                ERROR_DISPLAY_DATA.get("payment-unsuccessful"),
            ],
            [
                "transfer-unsuccessful",
                ERROR_DISPLAY_DATA.get("transfer-unsuccessful"),
            ],
            [
                "unsupported-browser",
                ERROR_DISPLAY_DATA.get("unsupported-browser"),
            ],
            [
                "partially-supported-browser",
                ERROR_DISPLAY_DATA.get("partially-supported-browser"),
            ],
        ];

        test.each(testData)(
            "renders %s error correctly",
            (type: ErrorDisplayType, error: ErrorDisplayDataAttrs) => {
                render(<ErrorDisplay type={type} />);

                expect(
                    screen.getByRole("heading", { level: 1, name: error.title })
                ).toBeInTheDocument();

                expect(screen.getByRole("img")).toHaveAttribute(
                    "src",
                    error.img.src
                );

                expect(
                    screen.getByTestId(ERROR_DESCRIPTION_TEST_ID).textContent
                ).toBe(error.description);
            }
        );
    });

    describe("maintenance error", () => {
        it("should be able to render custom date string", () => {
            const type = "maintenance";
            const additionalProps = { dateString: "01/01/2023" };

            render(
                <ErrorDisplay type={type} additionalProps={additionalProps} />
            );

            const error = ERROR_DISPLAY_DATA.get(type);
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
