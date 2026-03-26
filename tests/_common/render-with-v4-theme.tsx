import type { RenderOptions, RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import type React from "react";
import { ThemeProvider } from "src/theme";
import type { ThemeMode, ThemeType } from "src/theme/types";

interface RenderWithV4ThemeOptions extends Omit<RenderOptions, "wrapper"> {
    theme?: ThemeType | undefined;
    mode?: ThemeMode | undefined;
}

export const renderWithV4Theme = (
    ui: React.ReactElement,
    options?: RenderWithV4ThemeOptions
): RenderResult => {
    const {
        theme = "lifesg",
        mode = "light",
        ...renderOptions
    } = options || {};

    return render(
        <ThemeProvider theme={theme} mode={mode}>
            {ui}
        </ThemeProvider>,
        renderOptions
    );
};
