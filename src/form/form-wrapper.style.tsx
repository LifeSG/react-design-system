import styled, { css } from "styled-components";
import { V2_Layout } from "../v2_layout";

const commonStyles = css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`;

export const Container = styled.div`
    ${commonStyles}
`;

export const ColDivContainer = styled(V2_Layout.ColDiv)`
    ${commonStyles}
`;
