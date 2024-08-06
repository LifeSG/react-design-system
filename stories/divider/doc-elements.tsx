import styled from "styled-components";
import { v2_Layout } from "../../src/v2_layout";
import { v2_Text } from "../../src/v2_text";

export const Wrapper = styled(v2_Layout.V2_Content)`
    padding: 5rem;
`;

export const TextComponent = styled(v2_Text.Body)`
    margin-bottom: 1rem;
`;

export const DisplayText = ({ children }: { children: React.ReactNode }) => {
    return (
        <v2_Layout.V2_ColDiv desktopCols={12} tabletCols={8} mobileCols={4}>
            <TextComponent>{children}</TextComponent>
        </v2_Layout.V2_ColDiv>
    );
};
