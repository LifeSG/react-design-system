"use client";
// Trimmed copy of e2e/nextjs-app/src/app/components/[component]/[story]/layout.tsx:
// one theme stylesheet instead of twenty, no search-param theming.
import "@lifesg/react-design-system/theme/styles/lifesg.css";

import { ThemeProvider } from "@lifesg/react-design-system/theme";

import styles from "./layout.module.css";

export default function Layout({ children }) {
    return (
        <ThemeProvider>
            <div data-testid="story-layout" className={styles["story-layout"]}>
                {children}
            </div>
        </ThemeProvider>
    );
}
