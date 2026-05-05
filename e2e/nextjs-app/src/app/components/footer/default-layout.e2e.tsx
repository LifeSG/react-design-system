"use client";
import { Footer } from "@lifesg/react-design-system/footer";
import { links } from "./footer-shared";

export default function Story() {
    return (
        <Footer
            data-testid="footer-basic-layout"
            lastUpdated={new Date("2026-01-01T00:00:00Z")}
            links={links}
            showDownloadAddon
        />
    );
}
