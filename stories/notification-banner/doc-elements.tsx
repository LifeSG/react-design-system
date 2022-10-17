import styled from "styled-components";
import { Layout } from "../../src/layout";
import { withNotificationBanner } from "../../src/notification-banner";

export const StyledContent = styled(Layout.Content)`
    [data-id="container"] {
        flex-direction: column;
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
