"use client";
import { Footer } from "@lifesg/react-design-system/footer";
import { ThemeProvider } from "@lifesg/react-design-system/theme";
import { links } from "./footer-shared";

export default function Story() {
    return (
        <ThemeProvider theme="mylegacy">
            <Footer
                data-testid="footer-mylegacy-layout"
                lastUpdated={new Date("2026-01-01T00:00:00Z")}
                links={links}
                showResourceAddon
            />
        </ThemeProvider>
    );
}
