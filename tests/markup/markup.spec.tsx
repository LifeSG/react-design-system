import { render, screen } from "@testing-library/react";
import { Markup } from "src/markup";
import { Colour } from "src/theme";

describe("Markup", () => {
    it("renders with base styles when text size is not provided", () => {
        render(<Markup data-testid="markup">content</Markup>);

        const markupElement = screen.getByTestId("markup");
        expect(markupElement).toBeInTheDocument();
        expect(markupElement.tagName).toBe("DIV");
    });

    it("renders as span when inline is true", () => {
        render(
            <Markup data-testid="markup" inline>
                content
            </Markup>
        );

        const markupElement = screen.getByTestId("markup");
        expect(markupElement.tagName).toBe("SPAN");
    });

    it("resolves V4 color token", () => {
        render(
            <Markup data-testid="markup" baseTextColor={Colour.text}>
                content
            </Markup>
        );

        const markupElement = screen.getByTestId("markup");
        expect(markupElement).toHaveStyle({
            color: Colour.text,
        });
    });
});
