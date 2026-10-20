"use client";
// E7 documented setup: theme stylesheet imported before any component
import "@lifesg/react-design-system/theme/styles/lifesg.css";

import { ThemeProvider } from "@lifesg/react-design-system/theme";

import { Pairs } from "../pairs";

export default function Page() {
    return (
        <ThemeProvider>
            <Pairs />
        </ThemeProvider>
    );
}
