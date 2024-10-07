import { Layout } from "src/layout";
import styled from "styled-components";

const Content = styled.div`
    background: #f9b5b2;
    border: 2px dotted #f26664;
    height: 100vh;
    flex: 1;
`;

const Background = styled.div`
    background: #fdddd7;
`;

export const StretchDisplay = () => {
    return (
        <Background>
            <Layout.Container type="flex" stretch>
                <Content />
            </Layout.Container>
        </Background>
    );
};
