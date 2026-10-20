"use client";
// E7: theme stylesheet imported AFTER the components, so the order statement comes
// after the component layers in source order.
import { ThemeProvider } from "@lifesg/react-design-system/theme";

import { Pairs } from "../pairs";
import { LateTheme } from "./late-theme";

export default function Page() {
    return (
        <ThemeProvider>
            <Pairs />
            <LateTheme />
        </ThemeProvider>
    );
}
