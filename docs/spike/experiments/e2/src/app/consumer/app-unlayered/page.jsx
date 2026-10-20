"use client";
// E6: theme first, then an unlayered app override
import "@lifesg/react-design-system/theme/styles/lifesg.css";
import "../app-override.css";

import { ThemeProvider } from "@lifesg/react-design-system/theme";

import { Pairs } from "../pairs";

export default function Page() {
    return (
        <ThemeProvider>
            <Pairs />
        </ThemeProvider>
    );
}
