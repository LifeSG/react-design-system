import { render, screen } from "@testing-library/react";
import { Markup } from "src/markup";
import { Colour } from "src/theme";

describe("Markup", () => {
    it("renders with base styles when text size is not provided", () => {
        render(<Markup data-testid="markup">content</Markup>);

        expect(screen.getByTestId("markup")).toBeInTheDocument();
    });

    it("resolves V4 color token", () => {
        render(
            <Markup data-testid="markup" baseTextColor={Colour.text}>
                content
            </Markup>
        );

        expect(screen.getByTestId("markup")).toHaveStyle({
            color: Colour.text,
        });
    });
});
