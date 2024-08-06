import styled from "styled-components";
import { Layout } from "../../src/layout";
import { v2_Text } from "../../src/v2_text";

export const Wrapper = styled(Layout.Content)`
    padding: 5rem;
`;

export const TextComponent = styled(v2_Text.Body)`
    margin-bottom: 1rem;
`;

export const DisplayText = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout.ColDiv desktopCols={12} tabletCols={8} mobileCols={4}>
            <TextComponent>{children}</TextComponent>
        </Layout.ColDiv>
    );
};
