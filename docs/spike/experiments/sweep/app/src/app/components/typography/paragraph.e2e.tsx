"use client";
import { Typography } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div data-testid="typography-paragraph">
            <Typography.BodyBL paragraph>
                This is paragraph text with additional bottom spacing.
            </Typography.BodyBL>

            <Typography.BodyBL paragraph>
                This is paragraph text with additional bottom spacing.
            </Typography.BodyBL>

            <Typography.BodyBL paragraph>
                This is paragraph text with additional bottom spacing.
            </Typography.BodyBL>
        </div>
    );
}
