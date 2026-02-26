import type { Metadata } from "next";
import { headers } from "next/headers";
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
    (await headers()).get("x-nonce");

    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
