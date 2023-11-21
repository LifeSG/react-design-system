import styled, { css } from "styled-components";
import { Layout } from "../layout";

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

export const ColDivContainer = styled(Layout.ColDiv)`
    ${commonStyles}
`;
