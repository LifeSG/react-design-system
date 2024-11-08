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

export const Content = () => (
    <>
        <Text.Body style={{ margin: "1rem 0" }}>this is title 1</Text.Body>
        <Text.Body style={{ margin: "1rem 0" }}>this is title 2</Text.Body>
        <Text.Body style={{ margin: "1rem 0" }}>this is title 3</Text.Body>
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
