import type { Metadata } from "next";
import { headers } from "next/headers";
import E2EDateSeedBootstrap from "./e2e-date-seed-bootstrap";

import "./globals.css";

const CDN_STYLE_ASSETS = [
    "/cdn/react-design-system/v3/css/main.css",
    "/cdn/react-design-system/v3/css/atkinson-hyperlegible-next.css",
    "/cdn/react-design-system/v3/css/plus-jakarta-sans.css",
    "/cdn/react-design-system/v3/css/open-sans.css",
    "/cdn/react-design-system/v3/css/inter.css",
    "/cdn/react-design-system/v3/css/montserrat.css",
    "/cdn/react-design-system/v3/css/lato.css",
    "/cdn/react-design-system/v3/css/libre-franklin.css",
    "/cdn/react-design-system/v3/css/public-sans.css",
];

export const metadata: Metadata = {
    title: "NextJS App",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // trigger side effect to force dynamic rendering of all pages
    await headers();

    return (
        <html lang="en">
            <head>
                {CDN_STYLE_ASSETS.map((href) => (
                    <link key={href} rel="stylesheet" href={href} />
                ))}
            </head>
            <body>
                <E2EDateSeedBootstrap />
                {children}
            </body>
        </html>
    );
}
