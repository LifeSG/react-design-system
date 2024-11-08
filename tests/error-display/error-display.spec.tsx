import { render, screen } from "@testing-library/react";

import {
    BookingSGTheme,
    ErrorDisplay,
    ErrorDisplayType,
    LifeSGTheme,
} from "../../src";
import { getErrorDisplayData } from "../../src/error-display/error-display-data";
import { ThemeProvider } from "styled-components";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("ErrorDisplay", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should render the component", () => {
        render(
            <ThemeProvider theme={LifeSGTheme as any}>
                <ErrorDisplay type="404" />
            </ThemeProvider>
        );

        const title = getErrorDisplayData("404", "lifesg").title;
        console.log("THIS is title test: ", title);
        expect(screen.getByRole("heading", { level: 4, name: title }));
    });

    it("should render action button if prop is provided", () => {
        const buttonLabel = "custom button";
        const actionButton = {
            children: buttonLabel,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onClick: () => {},
        };

        render(
            <ThemeProvider theme={LifeSGTheme as any}>
                <ErrorDisplay type="404" actionButton={actionButton} />
            </ThemeProvider>
        );

        expect(
            screen.getByRole("button", { name: buttonLabel })
        ).toBeInTheDocument();
    });

    it("should be able to render custom title if specified", () => {
        render(
            <ThemeProvider theme={LifeSGTheme as any}>
                <ErrorDisplay type="404" title={CUSTOM_TITLE} />
            </ThemeProvider>
        );

        expect(
            screen.getByRole("heading", { level: 4, name: CUSTOM_TITLE })
        ).toBeInTheDocument();
    });

    it("should not render any text content if the imageOnly prop is specified", () => {
        render(
            <ThemeProvider theme={LifeSGTheme as any}>
                <ErrorDisplay
                    type="404"
                    title={CUSTOM_TITLE}
                    description={CUSTOM_DESCRIPTION}
                    imageOnly
                />
            </ThemeProvider>
        );

        expect(
            screen.queryByRole("heading", { level: 2, name: CUSTOM_TITLE })
        ).not.toBeInTheDocument();
        expect(screen.queryByText(CUSTOM_DESCRIPTION)).not.toBeInTheDocument();
    });

    describe("description", () => {
        it("should be able to render custom description", () => {
            render(
                <ThemeProvider theme={LifeSGTheme as any}>
                    <ErrorDisplay type="404" description={CUSTOM_DESCRIPTION} />
                </ThemeProvider>
            );

            expect(screen.getByText(CUSTOM_DESCRIPTION)).toBeInTheDocument();
        });

        it("should be able to render JSX.Element", () => {
            render(
                <ThemeProvider theme={LifeSGTheme as any}>
                    <ErrorDisplay
                        type="404"
                        description={<div>{CUSTOM_DESCRIPTION}</div>}
                    />
                </ThemeProvider>
            );

            expect(screen.getByText(CUSTOM_DESCRIPTION)).toBeInTheDocument();
        });
    });

    describe("ErrorDisplay components", () => {
        const testData = [
            ["400"],
            ["403"],
            ["404"],
            ["408"],
            ["500"],
            ["502"],
            ["503"],
            ["504"],
            ["confirmation"],
            ["inactivity"],
            ["insufficient-credits"],
            ["link-error"],
            ["logout"],
            ["warning"],
            ["maintenance"],
            ["no-item-found"],
            ["payment-unsuccessful"],
            ["transfer-unsuccessful"],
            ["unsupported-browser"],
            ["partially-supported-browser"],
        ];

        test.each(testData)(
            "should render %s error correctly",
            (type: ErrorDisplayType) => {
                render(
                    <ThemeProvider theme={LifeSGTheme as any}>
                        <ErrorDisplay type={type} />
                    </ThemeProvider>
                );

                const error = getErrorDisplayData(type, "lifesg");

                expect(
                    screen.getByRole("heading", { level: 4, name: error.title })
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

        test.each(testData)(
            "should render bookingsg %s error correctly",
            (type: ErrorDisplayType) => {
                render(
                    <ThemeProvider theme={BookingSGTheme as any}>
                        <ErrorDisplay type={type} />
                    </ThemeProvider>
                );

                const error = getErrorDisplayData(type, "bookingsg");

                expect(
                    screen.getByRole("heading", {
                        level: 4,
                        name: error.title,
                    })
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

        test("should use the specified illustration based on the illustrationScheme prop", () => {
            render(
                <ThemeProvider theme={BookingSGTheme as any}>
                    <ErrorDisplay type={"400"} illustrationScheme="base" />
                </ThemeProvider>
            );

            const error = getErrorDisplayData("400", "lifesg");

            expect(
                screen.getByRole("heading", {
                    level: 4,
                    name: error.title,
                })
            ).toBeInTheDocument();

            expect(screen.getByRole("img")).toHaveAttribute(
                "src",
                error.img.src
            );

            expect(
                screen.getByTestId(ERROR_DESCRIPTION_TEST_ID).textContent
            ).toBe(error.description);
        });
    });

    describe("maintenance error", () => {
        it("should be able to render custom date string", () => {
            const type = "maintenance";
            const additionalProps = { dateString: "01/01/2023" };

            render(
                <ThemeProvider theme={LifeSGTheme as any}>
                    <ErrorDisplay
                        type={type}
                        additionalProps={additionalProps}
                    />
                </ThemeProvider>
            );

            const error = getErrorDisplayData(type, "lifesg");
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
