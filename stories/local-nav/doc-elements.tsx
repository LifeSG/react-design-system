import { MediaQuery } from "src/theme";
import { Typography } from "src/typography";
import styled from "styled-components";

export const Page = styled.div`
    height: 200vh;

    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 2fr;

    ${MediaQuery.MaxWidth.sm} {
        grid-template-columns: 1fr;
    }

    > main {
        padding: 1rem;
    }
`;
Page.displayName = "Page";

const renderSection = (index: number) => (
    <div>
        <Typography.HeaderMD style={{ margin: "1rem 0" }}>
            Title {index}
        </Typography.HeaderMD>
        <Typography.BodyBL style={{ margin: "1rem 0" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
            tortor vitae magna sagittis bibendum.
        </Typography.BodyBL>
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
    <Typography.BodyBL style={{ margin: "1rem 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
        tortor vitae magna sagittis bibendum. Proin dui risus, rhoncus eget
        ligula non, tincidunt volutpat erat. Suspendisse vitae mauris pharetra,
        ullamcorper massa id, luctus elit. Aliquam at vestibulum nisi. In hac
        habitasse platea dictumst. Vestibulum sit amet mollis justo, in iaculis
        sem. Vivamus eu blandit sem.
    </Typography.BodyBL>
);
