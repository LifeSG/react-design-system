"use client";
// Theme delivered as a plain <link>, outside Next's CSS bundling. React 19 hoists
// <link rel="stylesheet" precedence> into <head>; without `precedence` it stays in place.
import { ThemeProvider } from "@lifesg/react-design-system/theme";

import { Pairs } from "../../consumer/pairs";

export default function Page() {
    return (
        <>
            <link
                rel="stylesheet"
                href="/spike-cdn/lifesg.css"
                precedence="default"
            />
            <ThemeProvider>
                <Pairs />
            </ThemeProvider>
        </>
    );
}
