import styled from "styled-components";

import { V3_Colour, V3_Font } from "../../../v3_theme";

export const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`;

export const HeaderCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${V3_Font["body-sm-semibold"]};
    color: ${V3_Colour["text"]};
`;

export const RowDayCell = styled.div`
    grid-column: 1 / -1;
    display: flex;
`;
