import { render, screen } from "@testing-library/react";

import { ErrorDisplay } from "../../src";
import { ERROR_DISPLAY_DATA } from "../../src/error-display/error-display-data";

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

    describe("400 error", () => {
        it("should be able to render", () => {
            const type = "400";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
            expect(
                screen.getByRole("heading", { level: 1, name: error.title })
            ).toBeInTheDocument();

            expect(screen.getByRole("img")).toHaveAttribute(
                "src",
                error.img.src
            );
            expect(
                screen.getByTestId(ERROR_DESCRIPTION_TEST_ID).textContent
            ).toBe(
                transformJSXElementToString(error.description as JSX.Element)
            );
        });
    });

    describe("403 error", () => {
        it("should be able to render", () => {
            const type = "403";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
            expect(
                screen.getByRole("heading", { level: 1, name: error.title })
            ).toBeInTheDocument();

            expect(screen.getByRole("img")).toHaveAttribute(
                "src",
                error.img.src
            );
            expect(
                screen.getByTestId(ERROR_DESCRIPTION_TEST_ID).textContent
            ).toBe(
                transformJSXElementToString(error.description as JSX.Element)
            );
        });
    });

    describe("404 error", () => {
        it("should be able to render", () => {
            const type = "404";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
            expect(
                screen.getByRole("heading", { level: 1, name: error.title })
            ).toBeInTheDocument();

            expect(screen.getByRole("img")).toHaveAttribute(
                "src",
                error.img.src
            );
            expect(
                screen.getByTestId(ERROR_DESCRIPTION_TEST_ID).textContent
            ).toBe(
                transformJSXElementToString(error.description as JSX.Element)
            );
        });
    });

    describe("408 error", () => {
        it("should be able to render", () => {
            const type = "408";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
            expect(
                screen.getByRole("heading", { level: 1, name: error.title })
            ).toBeInTheDocument();

            expect(screen.getByRole("img")).toHaveAttribute(
                "src",
                error.img.src
            );
            expect(
                screen.getByTestId(ERROR_DESCRIPTION_TEST_ID).textContent
            ).toBe(
                transformJSXElementToString(error.description as JSX.Element)
            );
        });
    });

    describe("500 error", () => {
        it("should be able to render", () => {
            const type = "500";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
            expect(
                screen.getByRole("heading", { level: 1, name: error.title })
            ).toBeInTheDocument();

            expect(screen.getByRole("img")).toHaveAttribute(
                "src",
                error.img.src
            );
            expect(
                screen.getByTestId(ERROR_DESCRIPTION_TEST_ID).textContent
            ).toBe(
                transformJSXElementToString(error.description as JSX.Element)
            );
        });
    });

    describe("503 error", () => {
        it("should be able to render", () => {
            const type = "503";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
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
        });
    });

    describe("504 error", () => {
        it("should be able to render", () => {
            const type = "504";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
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
        });
    });

    describe("confirmation", () => {
        it("should be able to render", () => {
            const type = "confirmation";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
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
        });
    });

    describe("inactivity error", () => {
        it("should be able to render", () => {
            const type = "inactivity";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
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
        });
    });

    describe("insufficient credit error", () => {
        it("should be able to render", () => {
            const type = "insufficient-credit";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
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
        });
    });

    describe("link error", () => {
        it("should be able to render", () => {
            const type = "link-error";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
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
        });
    });

    describe("logout error", () => {
        it("should be able to render", () => {
            const type = "logout";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
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
        });
    });

    describe("warning error", () => {
        it("should be able to render", () => {
            const type = "warning";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
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
        });
    });

    describe("maintenance error", () => {
        it("should be able to render", () => {
            const type = "maintenance";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
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
        });

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

    describe("no-item-found error", () => {
        it("should be able to render", () => {
            const type = "no-item-found";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
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
        });
    });

    describe("payment unsuccessful error", () => {
        it("should be able to render", () => {
            const type = "payment-unsuccessful";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
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
        });
    });

    describe("transfer unsuccessful error", () => {
        it("should be able to render", () => {
            const type = "transfer-unsuccessful";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
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
        });
    });

    describe("unsupported browser error", () => {
        it("should be able to render", () => {
            const type = "unsupported-browser";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
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
        });
    });

    describe("partially supported browser error", () => {
        it("should be able to render", () => {
            const type = "partially-supported-browser";
            render(<ErrorDisplay type={type} />);

            const error = ERROR_DISPLAY_DATA.get(type);
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
