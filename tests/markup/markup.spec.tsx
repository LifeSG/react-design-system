import { screen } from "@testing-library/react";
import { Markup } from "src/markup";
import { Colour } from "src/theme";

import { renderWithV4Theme } from "../common";

describe("Markup", () => {
    it("renders with base styles when text size is not provided", () => {
        renderWithV4Theme(<Markup data-testid="markup">content</Markup>);

        expect(screen.getByTestId("markup")).toBeInTheDocument();
    });

    it("resolves V4 color token when wrapped with V4 ThemeProvider", () => {
        renderWithV4Theme(
            <Markup data-testid="markup" baseTextColor={Colour.text}>
                content
            </Markup>
        );

        expect(screen.getByTestId("markup")).toHaveStyle({
            color: Colour.text,
        });
    });
});
