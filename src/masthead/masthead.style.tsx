import styled from "styled-components";
import { MediaQuery } from "@/theme";

export const Wrapper = styled.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${MediaQuery.MaxWidth.sm} {
        padding: 0;
    }
`;
