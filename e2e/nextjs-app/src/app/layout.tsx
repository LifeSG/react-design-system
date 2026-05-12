import type { Metadata } from "next";
import { headers } from "next/headers";
import StyledComponentsRegistry from "../lib/registry";
import E2EDateSeedBootstrap from "./e2e-date-seed-bootstrap";

import "./globals.css";

export const metadata: Metadata = {
    title: "NextJS App",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // trigger side effect to force dynamic rendering of all pages
    const nonce = (await headers()).get("x-nonce");

    return (
        <html lang="en">
            <body>
                <E2EDateSeedBootstrap />
                <StyledComponentsRegistry nonce={nonce}>
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
