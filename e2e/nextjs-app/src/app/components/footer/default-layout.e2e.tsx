"use client";
import { Footer } from "@lifesg/react-design-system/footer";
import { links } from "./footer-shared";

export default function Story() {
    return <Footer data-testid="footer-basic-layout" links={links} />;
}
