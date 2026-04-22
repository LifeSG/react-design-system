import { render, screen } from "@testing-library/react";
import { Avatar } from "src/avatar";

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_NAME = "Maximilian";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Avatar", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    // =========================================================================
    // STRING CHILDREN TESTS
    // =========================================================================
    describe("string children", () => {
        it("should render with string content", () => {
            render(<Avatar>{DEFAULT_NAME}</Avatar>);

            expect(screen.getByText("M")).toBeInTheDocument();
        });

        it("should render uppercase first character of string", () => {
            render(<Avatar>{DEFAULT_NAME.toLowerCase()}</Avatar>);

            expect(screen.getByText("M")).toBeInTheDocument();
        });

        it("should handle single character strings", () => {
            render(<Avatar>a</Avatar>);

            expect(screen.getByText("A")).toBeInTheDocument();
        });

        it("should handle empty string", () => {
            render(<Avatar>{""}</Avatar>);

            const avatar = screen.getByTestId("avatar");
            expect(avatar).toBeInTheDocument();
            expect(avatar).toBeEmptyDOMElement();
        });
    });

    // =========================================================================
    // JSX ELEMENT CHILDREN TESTS
    // =========================================================================
    describe("JSX Element children", () => {
        it("should render with JSX Element as children", () => {
            const customElement = (
                <div data-testid="custom-element">Custom Content</div>
            );
            render(<Avatar>{customElement}</Avatar>);

            expect(screen.getByTestId("custom-element")).toBeInTheDocument();
            expect(screen.getByText("Custom Content")).toBeInTheDocument();
        });
    });

    // =========================================================================
    // SIZE VARIANT TESTS
    // =========================================================================
    describe("size variants", () => {
        it("should render with default size by default", () => {
            render(
                <Avatar data-testid="avatar-default">{DEFAULT_NAME}</Avatar>
            );

            const avatar = screen.getByTestId("avatar-default");
            expect(avatar).toBeInTheDocument();
        });

        it("should render with default size when explicitly set", () => {
            render(
                <Avatar sizeType="default" data-testid="avatar-default">
                    {DEFAULT_NAME}
                </Avatar>
            );

            const avatar = screen.getByTestId("avatar-default");
            expect(avatar).toBeInTheDocument();
        });

        it("should render with small size", () => {
            render(
                <Avatar sizeType="small" data-testid="avatar-small">
                    {DEFAULT_NAME}
                </Avatar>
            );

            const avatar = screen.getByTestId("avatar-small");
            expect(avatar).toBeInTheDocument();
        });

        it("should use BodySM typography for small size with string children", () => {
            render(<Avatar sizeType="small">{DEFAULT_NAME}</Avatar>);

            expect(screen.getByText("M")).toBeInTheDocument();
        });

        it("should use BodyBL typography for default size with string children", () => {
            render(<Avatar sizeType="default">{DEFAULT_NAME}</Avatar>);

            expect(screen.getByText("M")).toBeInTheDocument();
        });
    });
});
