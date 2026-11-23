"use client";

import "@lifesg/react-design-system/theme/styles/lifesg.css";

import { ThemeProvider } from "@lifesg/react-design-system/theme";

/**
 * Deliberately does not pass a `nonce` to `ThemeProvider`, so the inline script
 * is only permitted by its hash in the CSP header.
 */
export default function Page() {
    return (
        <ThemeProvider theme="lifesg">
            <div>Page rendered successfully</div>
        </ThemeProvider>
    );
}
