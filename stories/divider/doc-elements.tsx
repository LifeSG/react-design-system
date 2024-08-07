import styled from "styled-components";
import { V2_Layout } from "../../src/v2_layout";
import { V2_Text } from "../../src/v2_text";

export const Wrapper = styled(V2_Layout.Content)`
    padding: 5rem;
`;

export const TextComponent = styled(V2_Text.Body)`
    margin-bottom: 1rem;
`;

export const DisplayText = ({ children }: { children: React.ReactNode }) => {
    return (
        <V2_Layout.ColDiv desktopCols={12} tabletCols={8} mobileCols={4}>
            <TextComponent>{children}</TextComponent>
        </V2_Layout.ColDiv>
    );
};
