import { render, screen } from "@testing-library/react";
import React from "react";
import type { ErrorDisplayType } from "src";
import { ErrorDisplay, V3_BookingSGTheme, V3_LifeSGTheme } from "src";
import { getErrorDisplayData } from "src/error-display/error-display-data";
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
            <ThemeProvider theme={V3_LifeSGTheme}>
                <ErrorDisplay type="404" />
            </ThemeProvider>
        );

        const title = getErrorDisplayData(
            "404",
            "lifesg",
            V3_LifeSGTheme
        )!.title;
        expect(screen.getByRole("heading", { level: 2, name: title }));
    });

    it("should render action button if prop is provided", () => {
        const buttonLabel = "custom button";
        const actionButton = {
            children: buttonLabel,

            onClick: () => {},
        };

        render(
            <ThemeProvider theme={V3_LifeSGTheme}>
                <ErrorDisplay type="404" actionButton={actionButton} />
            </ThemeProvider>
        );

        expect(
            screen.getByRole("button", { name: buttonLabel })
        ).toBeInTheDocument();
    });

    it("should be able to render custom title if specified", () => {
        render(
            <ThemeProvider theme={V3_LifeSGTheme}>
                <ErrorDisplay type="404" title={CUSTOM_TITLE} />
            </ThemeProvider>
        );

        expect(
            screen.getByRole("heading", { level: 2, name: CUSTOM_TITLE })
        ).toBeInTheDocument();
    });

    it("should not render any text content if the imageOnly prop is specified", () => {
        render(
            <ThemeProvider theme={V3_LifeSGTheme}>
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
                <ThemeProvider theme={V3_LifeSGTheme}>
                    <ErrorDisplay type="404" description={CUSTOM_DESCRIPTION} />
                </ThemeProvider>
            );

            expect(screen.getByText(CUSTOM_DESCRIPTION)).toBeInTheDocument();
        });

        it("should be able to render JSX.Element", () => {
            render(
                <ThemeProvider theme={V3_LifeSGTheme}>
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
        ] as const;

        test.each(testData)(
            "should render %s error correctly",
            (type: ErrorDisplayType) => {
                render(
                    <ThemeProvider theme={V3_LifeSGTheme}>
                        <ErrorDisplay type={type} />
                    </ThemeProvider>
                );

                const error = getErrorDisplayData(
                    type,
                    "lifesg",
                    V3_LifeSGTheme
                )!;

                expect(
                    screen.getByRole("heading", { level: 2, name: error.title })
                ).toBeInTheDocument();

                expect(screen.getByRole("img")).toHaveAttribute(
                    "src",
                    error.img!.src
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
                    <ThemeProvider theme={V3_BookingSGTheme}>
                        <ErrorDisplay type={type} />
                    </ThemeProvider>
                );

                const error = getErrorDisplayData(
                    type,
                    "bookingsg",
                    V3_BookingSGTheme
                )!;

                expect(
                    screen.getByRole("heading", {
                        level: 2,
                        name: error.title,
                    })
                ).toBeInTheDocument();

                expect(screen.getByRole("img")).toHaveAttribute(
                    "src",
                    error.img!.src
                );

                expect(
                    screen.getByTestId(ERROR_DESCRIPTION_TEST_ID).textContent
                ).toBe(error.description);
            }
        );

        test("should use the specified illustration based on the illustrationScheme prop", () => {
            render(
                <ThemeProvider theme={V3_BookingSGTheme}>
                    <ErrorDisplay type={"400"} illustrationScheme="lifesg" />
                </ThemeProvider>
            );

            const error = getErrorDisplayData("400", "lifesg", V3_LifeSGTheme)!;

            expect(
                screen.getByRole("heading", {
                    level: 2,
                    name: error.title,
                })
            ).toBeInTheDocument();

            expect(screen.getByRole("img")).toHaveAttribute(
                "src",
                error.img!.src
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
                <ThemeProvider theme={V3_LifeSGTheme}>
                    <ErrorDisplay
                        type={type}
                        additionalProps={additionalProps}
                    />
                </ThemeProvider>
            );

            const error = getErrorDisplayData(type, "lifesg", V3_LifeSGTheme)!;
            const errorDescription = transformJSXElementToString(
                error.renderDescription!(additionalProps) as JSX.Element
            );

            expect(
                screen.getByTestId(ERROR_DESCRIPTION_TEST_ID).textContent
            ).toBe(errorDescription);
        });
    });

    describe("inactivity timer accessibility", () => {
        it("should render hidden live reminder text when secondsLeft is provided", () => {
            render(
                <ThemeProvider theme={V3_LifeSGTheme}>
                    <ErrorDisplay
                        type="inactivity"
                        additionalProps={{ secondsLeft: 65 }}
                    />
                </ThemeProvider>
            );

            const message =
                "You’ve been inactive for a while. To protect your privacy, you’ll be logged out in 1 minutes 5 seconds.";

            const component = screen.getByTestId("error-display");
            const liveRegions = component.querySelectorAll(
                '[aria-live="polite"][aria-atomic="true"]'
            );
            expect(
                Array.from(liveRegions).some((liveRegion) =>
                    liveRegion.textContent?.includes(message)
                )
            ).toBe(true);

            const visibleDescription = screen.getByTestId(
                ERROR_DESCRIPTION_TEST_ID
            );
            expect(visibleDescription).toHaveTextContent(
                "you’ll be logged out in 1 minutes 5 seconds"
            );
        });

        it("should not render live reminder text when custom description is provided", () => {
            render(
                <ThemeProvider theme={V3_LifeSGTheme}>
                    <ErrorDisplay
                        type="inactivity"
                        description="custom inactivity description"
                        additionalProps={{ secondsLeft: 65 }}
                    />
                </ThemeProvider>
            );

            const component = screen.getByTestId("error-display");
            expect(
                component.querySelector('[aria-live="polite"]')
            ).not.toBeInTheDocument();
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

    React.Children.forEach(element.props.children, (child) => {
        if (typeof child === "object") {
            text += child.props.children;
        } else {
            text += child;
        }
    });

    return text;
};
