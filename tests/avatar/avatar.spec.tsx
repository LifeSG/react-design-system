import { render, screen } from "@testing-library/react";
import { Avatar } from "src/avatar";

const DEFAULT_NAME = "Maximilian";

describe("Avatar", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe("string children", () => {
        it("should render with string content", () => {
            render(<Avatar>{DEFAULT_NAME}</Avatar>);

            expect(screen.getByText("M")).toBeInTheDocument();
        });

        it("should render uppercase first character of string", () => {
            render(<Avatar>maximilian</Avatar>);

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
});
