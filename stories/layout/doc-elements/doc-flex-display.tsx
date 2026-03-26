import { Layout } from "src/layout";
import styled from "styled-components";

const Content = styled.div`
    background: #f9b5b2;
    border: 2px dotted #f26664;
    height: 100vh;
    flex: 1;
`;

const VerticalContent = styled.div`
    background: #f9b5b2;
    border: 2px dotted #f26664;
    height: 50vh;
    padding: 4px;
`;

const Background = styled.div`
    background: #fdddd7;
`;

export const FlexDisplay = () => {
    return (
        <Background>
            <Layout.Content type="flex">
                <Content />
            </Layout.Content>
        </Background>
    );
};

export const FlexColumnDisplay = () => {
    return (
        <Background>
            <Layout.Content type="flex-column">
                <VerticalContent>First item</VerticalContent>
                <VerticalContent>Second item</VerticalContent>
            </Layout.Content>
        </Background>
    );
};
