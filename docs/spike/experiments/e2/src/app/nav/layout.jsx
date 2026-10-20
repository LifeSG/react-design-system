"use client";
// Spike 01 / E2 navigation test: same ThemeProvider layout as components/layout.jsx
// plus links, so the measure script can navigate client-side between routes.
import "@lifesg/react-design-system/theme/styles/lifesg.css";

import { ThemeProvider } from "@lifesg/react-design-system/theme";
import Link from "next/link";

const ROUTES = [
    "errors",
    "menu",
    "timeline",
    "toast",
    "footer",
    "banner",
    "textarea",
    "combo-a",
    "combo-b",
];

export default function Layout({ children }) {
    return (
        <ThemeProvider>
            <nav style={{ display: "flex", gap: 12, padding: 8 }}>
                {ROUTES.map((r) => (
                    <Link key={r} href={`/nav/${r}`} data-nav={r}>
                        {r}
                    </Link>
                ))}
            </nav>
            <div style={{ padding: 16 }}>{children}</div>
        </ThemeProvider>
    );
}
