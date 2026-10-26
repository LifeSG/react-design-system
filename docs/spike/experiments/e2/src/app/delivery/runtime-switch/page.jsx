"use client";
// Two themes loaded up front; the button switches ThemeProvider's theme at runtime.
import "@lifesg/react-design-system/theme/styles/lifesg.css";
import "@lifesg/react-design-system/theme/styles/bookingsg.css";

import { ThemeProvider } from "@lifesg/react-design-system/theme";
import { useState } from "react";

import { Pairs } from "../../consumer/pairs";

export default function Page() {
    const [theme, setTheme] = useState("lifesg");
    return (
        <ThemeProvider theme={theme}>
            <button
                data-testid="switch-theme"
                onClick={() => setTheme("bookingsg")}
            >
                switch
            </button>
            <span
                data-testid="primary-swatch"
                style={{ color: "var(--fds-colour-primary-50)" }}
            >
                swatch
            </span>
            <Pairs />
        </ThemeProvider>
    );
}
