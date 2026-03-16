import styled from "styled-components";

import { V3_Colour } from "../../v3_theme";

export const Placeholder = styled.div`
    background-color: ${V3_Colour["bg-stronger"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 48px;
        width: 18%;
        height: auto;
        color: ${V3_Colour["icon-subtle"]};
    }
`;
