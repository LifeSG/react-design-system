import { V2_MediaQuery } from "src/v2_media";
import { V2_Text } from "src/v2_text";
import styled from "styled-components";

export const Page = styled.div`
    height: 200vh;

    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 2fr;

    ${V2_MediaQuery.MaxWidth.mobileL} {
        grid-template-columns: 1fr;
    }

    > main {
        padding: 1rem;
    }
`;

const renderSection = (index: number) => (
    <div>
        <V2_Text.H2 style={{ margin: "1rem 0" }}>Title {index}</V2_Text.H2>
        <V2_Text.Body style={{ margin: "1rem 0" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
            tortor vitae magna sagittis bibendum.
        </V2_Text.Body>
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
    <V2_Text.Body style={{ margin: "1rem 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
        tortor vitae magna sagittis bibendum. Proin dui risus, rhoncus eget
        ligula non, tincidunt volutpat erat. Suspendisse vitae mauris pharetra,
        ullamcorper massa id, luctus elit. Aliquam at vestibulum nisi. In hac
        habitasse platea dictumst. Vestibulum sit amet mollis justo, in iaculis
        sem. Vivamus eu blandit sem.
    </V2_Text.Body>
);
