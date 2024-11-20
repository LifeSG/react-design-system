import { MediaQuery } from "src/media";
import { Text } from "src/text";
import styled from "styled-components";

export const Page = styled.div`
    height: 200vh;

    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 2fr;

    ${MediaQuery.MaxWidth.mobileL} {
        grid-template-columns: 1fr;
    }

    > main {
        padding: 1rem;
    }
`;

const renderSection = (index: number) => (
    <div>
        <Text.H2 style={{ margin: "1rem 0" }}>Title {index}</Text.H2>
        <Text.Body style={{ margin: "1rem 0" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
            tortor vitae magna sagittis bibendum.
        </Text.Body>
    </div>
);

export const Content = () => (
    <>
        {renderSection(1)}
        {renderSection(2)}
        {renderSection(3)}
    </>
);

export const TopContent = () => (
    <Text.Body style={{ margin: "1rem 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
        tortor vitae magna sagittis bibendum. Proin dui risus, rhoncus eget
        ligula non, tincidunt volutpat erat. Suspendisse vitae mauris pharetra,
        ullamcorper massa id, luctus elit. Aliquam at vestibulum nisi. In hac
        habitasse platea dictumst. Vestibulum sit amet mollis justo, in iaculis
        sem. Vivamus eu blandit sem.
    </Text.Body>
);
