import { render, screen } from "@testing-library/react";
import { Button } from "src/button";

describe("Button", () => {
    it("should render loading spinner in default, small and large variants", () => {
        const { rerender } = render(
            <Button.Default loading data-testid="test-button">
                Click me
            </Button.Default>
        );

        expect(
            screen.getByTestId("component-loading-spinner")
        ).toBeInTheDocument();

        rerender(
            <Button.Small loading data-testid="test-button">
                Click me
            </Button.Small>
        );

        expect(
            screen.getByTestId("component-loading-spinner")
        ).toBeInTheDocument();

        rerender(
            <Button.Large loading data-testid="test-button">
                Click me
            </Button.Large>
        );

        expect(
            screen.getByTestId("component-loading-spinner")
        ).toBeInTheDocument();
    });

    it("should toggle spinner based on loading state", () => {
        const { rerender } = render(
            <Button.Default loading data-testid="test-button">
                Click me
            </Button.Default>
        );

        expect(
            screen.getByTestId("component-loading-spinner")
        ).toBeInTheDocument();

        rerender(
            <Button.Default data-testid="test-button">Click me</Button.Default>
        );

        expect(
            screen.queryByTestId("component-loading-spinner")
        ).not.toBeInTheDocument();
    });
});
