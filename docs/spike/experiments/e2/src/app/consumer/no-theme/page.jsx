"use client";
// E7: theme stylesheet never imported (no order statement, no tokens)

import { ThemeProvider } from "@lifesg/react-design-system/theme";

import { Pairs } from "../pairs";

export default function Page() {
    return (
        <ThemeProvider>
            <Pairs />
        </ThemeProvider>
    );
}
