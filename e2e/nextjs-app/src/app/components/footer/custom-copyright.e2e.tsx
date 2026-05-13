"use client";
import { Footer } from "@lifesg/react-design-system/footer";
import { links } from "./footer-shared";

export default function Story() {
    return (
        <Footer
            data-testid="footer-custom-copyright"
            copyrightInfo="Custom copyright information."
            links={links}
        />
    );
}
