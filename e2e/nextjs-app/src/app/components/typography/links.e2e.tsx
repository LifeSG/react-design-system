"use client";
import { Typography } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div data-testid="typography-links">
            <Typography.LinkBL data-testid="typography-link-underline" href="#">
                Underline link
            </Typography.LinkBL>

            <Typography.LinkBL
                data-testid="typography-link-no-underline"
                href="#"
                underlineStyle="none"
            >
                No underline link
            </Typography.LinkBL>
        </div>
    );
}
