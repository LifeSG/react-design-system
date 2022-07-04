import React from "react";
import { Layout, Text, withNotificationBanner } from "src/components";
import styled from "styled-components";

export const HoldingContainer = styled.div`
    position: relative;
    max-height: 21rem;
    overflow-y: scroll;
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
            "&nbsp;and text of styles like <strong>bold</strong> and <em>italics</em>.",
    },
]);

interface SampleContentProps {
    short?: boolean;
}

export const SampleContent = ({ short = false }: SampleContentProps) => (
    <Layout.Content style={{ paddingTop: "1.5rem" }}>
        <Text.Body paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </Text.Body>
        {!short && (
            <Text.Body paragraph>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
            </Text.Body>
        )}
    </Layout.Content>
);
