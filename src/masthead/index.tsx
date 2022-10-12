import "@govtechsg/sgds-masthead/dist/sgds-masthead/sgds-masthead.css";
import { SgdsMasthead } from "@govtechsg/sgds-masthead-react";
import styled from "styled-components";

export const Masthead = (): JSX.Element => (
    <Wrapper>
        <SgdsMasthead />
    </Wrapper>
);

const Wrapper = styled.div`
    background: hsl(0, 0%, 94%);
    padding: 0 1rem;
`;
