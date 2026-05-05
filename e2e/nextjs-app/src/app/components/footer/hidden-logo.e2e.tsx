"use client";
import { Footer } from "@lifesg/react-design-system/footer";

export default function Story() {
    return (
        <Footer
            data-testid="footer-hidden-logo"
            lastUpdated={new Date("2026-01-01T00:00:00Z")}
            hideLogo
            links={[
                [
                    {
                        children: "Home",
                        href: "https://www.life.gov.sg",
                    },
                    {
                        children: "How it works",
                        href: "https://www.life.gov.sg/#how-it-works",
                    },
                    {
                        children: "Ways we help",
                        href: "https://www.life.gov.sg/#ways-we-help",
                    },
                    {
                        children: "Campaigns",
                        href: "https://www.life.gov.sg/#campaigns",
                    },
                    {
                        children: "News and media",
                        href: "https://www.life.gov.sg/#newsandmedia",
                    },
                ],
                [
                    {
                        children: "About us",
                        href: "https://www.life.gov.sg/about-us",
                    },
                    {
                        children: "Help & Support",
                        href: "https://www.life.gov.sg/help-support",
                    },
                    {
                        children: "Get in touch with us",
                        href: "https://www.life.gov.sg/get-in-touch",
                    },
                ],
            ]}
            showDownloadAddon
        />
    );
}
