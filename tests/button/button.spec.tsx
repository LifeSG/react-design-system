import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../../src/button";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Button", () => {
    describe.each([
        ["Button.Default", Button.Default],
        ["Button.Small", Button.Small],
        ["Button.Large", Button.Large],
    ] as const)("%s", (_name, Component) => {
        it("should render children", () => {
            render(<Component>Click me</Component>);
            expect(screen.getByText("Click me")).toBeInTheDocument();
        });

        it("should use the default data-testid", () => {
            render(<Component>Click</Component>);
            expect(screen.getByTestId("button")).toBeInTheDocument();
        });

        it("should use a custom data-testid when provided", () => {
            render(<Component data-testid="my-button">Click</Component>);
            expect(screen.getByTestId("my-button")).toBeInTheDocument();
        });

        it("should apply a consumer className", () => {
            render(<Component className="custom-class">Click</Component>);
            expect(screen.getByTestId("button")).toHaveClass("custom-class");
        });

        it("should call onClick when clicked", () => {
            const handleClick = jest.fn();
            render(<Component onClick={handleClick}>Click</Component>);
            fireEvent.click(screen.getByTestId("button"));
            expect(handleClick).toHaveBeenCalledTimes(1);
        });

        describe("when disabled", () => {
            it("should set aria-disabled", () => {
                render(<Component disabled>Click</Component>);
                expect(screen.getByTestId("button")).toHaveAttribute(
                    "aria-disabled",
                    "true"
                );
            });

            it("should set the HTML disabled attribute", () => {
                render(<Component disabled>Click</Component>);
                expect(screen.getByTestId("button")).toBeDisabled();
            });

            it("should not call onClick when clicked", () => {
                const handleClick = jest.fn();
                render(
                    <Component disabled onClick={handleClick}>
                        Click
                    </Component>
                );
                fireEvent.click(screen.getByTestId("button"));
                expect(handleClick).not.toHaveBeenCalled();
            });
        });

        describe("when focusableWhenDisabled", () => {
            it("should set aria-disabled but not the HTML disabled attribute", () => {
                render(
                    <Component disabled focusableWhenDisabled>
                        Click
                    </Component>
                );
                const button = screen.getByTestId("button");
                expect(button).toHaveAttribute("aria-disabled", "true");
                expect(button).not.toBeDisabled();
            });

            it("should not call onClick when clicked", () => {
                const handleClick = jest.fn();
                render(
                    <Component
                        disabled
                        focusableWhenDisabled
                        onClick={handleClick}
                    >
                        Click
                    </Component>
                );
                fireEvent.click(screen.getByTestId("button"));
                expect(handleClick).not.toHaveBeenCalled();
            });
        });

        describe("when loading", () => {
            it("should set aria-busy", () => {
                render(<Component loading>Click</Component>);
                expect(screen.getByTestId("button")).toHaveAttribute(
                    "aria-busy",
                    "true"
                );
            });

            it("should render the loading spinner", () => {
                render(<Component loading>Click</Component>);
                expect(
                    screen.getByTestId("component-loading-spinner")
                ).toBeInTheDocument();
            });

            it("should not render the loading spinner when not loading", () => {
                render(<Component>Click</Component>);
                expect(
                    screen.queryByTestId("component-loading-spinner")
                ).not.toBeInTheDocument();
            });
        });
    });
});
