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
        it("should be able to render custom description", () => {
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

    describe("400 error", () => {
        it("should be able to render", () => {
            const type = "400";
            renderComponent({ type });

            const error = ERROR_DISPLAY_DATA.get(type);
            expect(
                screen.getByRole("heading", { level: 1, name: error.title })
            ).toBeInTheDocument();

            expect(screen.getByRole("img", { name: "error" })).toHaveAttribute(
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
            renderComponent({ type });

            const error = ERROR_DISPLAY_DATA.get(type);
            expect(
                screen.getByRole("heading", { level: 1, name: error.title })
            ).toBeInTheDocument();

            expect(screen.getByRole("img", { name: "error" })).toHaveAttribute(
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
            renderComponent({ type });

            const error = ERROR_DISPLAY_DATA.get(type);
            expect(
                screen.getByRole("heading", { level: 1, name: error.title })
            ).toBeInTheDocument();

            expect(screen.getByRole("img", { name: "error" })).toHaveAttribute(
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
            renderComponent({ type });

            const error = ERROR_DISPLAY_DATA.get(type);
            expect(
                screen.getByRole("heading", { level: 1, name: error.title })
            ).toBeInTheDocument();

            expect(screen.getByRole("img", { name: "error" })).toHaveAttribute(
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
            renderComponent({ type });

            const error = ERROR_DISPLAY_DATA.get(type);
            expect(
                screen.getByRole("heading", { level: 1, name: error.title })
            ).toBeInTheDocument();

            expect(screen.getByRole("img", { name: "error" })).toHaveAttribute(
                "src",
                error.img.src
            );
            expect(
                screen.getByTestId(ERROR_DESCRIPTION_TEST_ID).textContent
            ).toBe(
                transformJSXElementToString(error.description as JSX.Element)
            );
        });

        it("should be able to render reference ID", () => {
            const type = "500";
            const additionalProps = { referenceId: "123" };

            renderComponent({
                type,
                additionalProps,
            });

            const error = ERROR_DISPLAY_DATA.get(type);
            const errorDescription = transformJSXElementToString(
                error.renderDescription(additionalProps) as JSX.Element
            );

            expect(
                screen.getByTestId(ERROR_DESCRIPTION_TEST_ID).textContent
            ).toBe(errorDescription);
        });
    });

    describe("503 error", () => {
        it("should be able to render", () => {
            const type = "503";
            renderComponent({ type });

            const error = ERROR_DISPLAY_DATA.get(type);
            expect(
                screen.getByRole("heading", { level: 1, name: error.title })
            ).toBeInTheDocument();

            expect(screen.getByRole("img", { name: "error" })).toHaveAttribute(
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
            renderComponent({ type });

            const error = ERROR_DISPLAY_DATA.get(type);
            expect(
                screen.getByRole("heading", { level: 1, name: error.title })
            ).toBeInTheDocument();

            expect(screen.getByRole("img", { name: "error" })).toHaveAttribute(
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

            renderComponent({
                type,
                additionalProps,
            });

            const error = ERROR_DISPLAY_DATA.get(type);
            const errorDescription = transformJSXElementToString(
                error.renderDescription(additionalProps) as JSX.Element
            );

            expect(
                screen.getByTestId(ERROR_DESCRIPTION_TEST_ID).textContent
            ).toBe(errorDescription);
        });
    });

    describe("unsupported browser error", () => {
        it("should be able to render", () => {
            const type = "unsupported-browser";
            renderComponent({ type });

            const error = ERROR_DISPLAY_DATA.get(type);
            expect(
                screen.getByRole("heading", { level: 1, name: error.title })
            ).toBeInTheDocument();

            expect(screen.getByRole("img", { name: "error" })).toHaveAttribute(
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
            renderComponent({ type });

            const error = ERROR_DISPLAY_DATA.get(type);
            expect(
                screen.getByRole("heading", { level: 1, name: error.title })
            ).toBeInTheDocument();

            expect(screen.getByRole("img", { name: "error" })).toHaveAttribute(
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

// =============================================================================
// RENDER FUNCTIONS
// =============================================================================
const renderComponent = (props?: Partial<ErrorDisplayProps>) => {
    return render(<ErrorDisplay {...props} type={props?.type || "404"} />);
};
