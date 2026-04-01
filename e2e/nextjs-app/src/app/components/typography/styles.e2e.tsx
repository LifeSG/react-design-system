"use client";
import { Typography } from "@lifesg/react-design-system";

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod quam eget ex tincidunt dapibus.
Donec vitae leo vehicula, fermentum urna vitae, gravida ex. Aenean imperdiet faucibus velit, eu maximus libero facilisis ut.
Donec nulla nisi, fermentum eget lorem at, feugiat ultricies ex. Aliquam volutpat nibh non suscipit rhoncus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod quam eget ex tincidunt dapibus.
Donec vitae leo vehicula, fermentum urna vitae, gravida ex. Aenean imperdiet faucibus velit, eu maximus libero facilisis ut.
Donec nulla nisi, fermentum eget lorem at, feugiat ultricies ex. Aliquam volutpat nibh non suscipit rhoncus.
`;

export default function Story() {
    return (
        <div>
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

            <div data-testid="typography-clamps">
                <Typography.BodyBL
                    data-testid="typography-clamp-1"
                    maxLines={1}
                >
                    This is paragraph text with max 1 line. {longText}
                </Typography.BodyBL>

                <Typography.BodyBL
                    data-testid="typography-clamp-2"
                    maxLines={2}
                >
                    This is paragraph text with max 2 lines. {longText}
                </Typography.BodyBL>
            </div>

            <div data-testid="typography-links">
                <Typography.LinkBL
                    data-testid="typography-link-underline"
                    href="#"
                >
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
        </div>
    );
}
