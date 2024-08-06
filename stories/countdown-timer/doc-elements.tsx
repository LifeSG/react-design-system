import styled from "styled-components";
import { v2_MediaQuery } from "../../src/v2_media";

const Page = styled.div`
    height: 160vh;
    width: 65vw;
    margin: auto;

    ${v2_MediaQuery.MaxWidth.mobileL} {
        width: 100vw;
    }
`;

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    ${v2_MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: center;
    }
`;

const Spaces = styled.div`
    height: 168px;
`;

interface CountdownViewProps {
    children: [JSX.Element, JSX.Element];
}

export const CountdownView = ({ children }: CountdownViewProps) => {
    const [elem1, elem2] = children;
    return (
        <Page>
            <Spaces />
            <Section>
                <div>{elem1}</div>
                <div>{elem2}</div>
            </Section>
        </Page>
    );
};
