import styled from "styled-components";
import { Layout } from "../../src/layout";
import { Text } from "../../src/text";

export const Wrapper = styled(Layout.Content)`
    padding: 5rem;
`;

export const TextComponent = styled(Text.Body)`
    margin-bottom: 1rem;
`;

export const DisplayText = ({ children }: { children: JSX.Element }) => {
    return (
        <Layout.ColDiv desktopCols={12} tabletCols={8} mobileCols={4}>
            <TextComponent>{children}</TextComponent>
        </Layout.ColDiv>
    );
};
