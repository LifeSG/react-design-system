import styled from "styled-components";
import { MediaQuery } from "../theme";

export const Wrapper = styled.div`
    --header-bottom-spacing: 0.5rem;

    ${MediaQuery.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`;
