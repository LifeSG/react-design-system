"use client";
// E6: theme first, then the same override inside @layer main (globals.css declares main, fds)
import "@lifesg/react-design-system/theme/styles/lifesg.css";
import "../app-override-layered.css";

import { ThemeProvider } from "@lifesg/react-design-system/theme";

import { Pairs } from "../pairs";

export default function Page() {
    return (
        <ThemeProvider>
            <Pairs />
        </ThemeProvider>
    );
}
