import styled from "styled-components";
import { Layout } from "../../src/layout";
import { withNotificationBanner } from "../../src/notification-banner";

interface ContentProps {
    $color?: string | undefined;
}
export const StyledContent = styled(Layout.Content)<ContentProps>`
    [data-id="container"] {
        flex-direction: column;
        background-color: ${(props) => props?.$color};
    }
`;

export const HOCElement = withNotificationBanner([
    {
        type: "text",
        content: "This is rendered using the HOC, and it contains a&nbsp;",
    },
    {
        type: "link",
        content: "hyperlink",
        otherAttributes: {
            href: "https://www.google.com",
            external: true,
            target: "_blank",
        },
    },
    {
        type: "text",
        content:
            "&nbsp;and text with styles like <strong>bold</strong> and <em>italics</em>.",
    },
]);
