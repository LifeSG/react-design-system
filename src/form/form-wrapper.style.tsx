import styled, { css } from "styled-components";
import { Layout } from "../layout";
import { Spacing } from "../theme";

const commonStyles = css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${Spacing["spacing-32"]};
    }
`;

export const Container = styled.div`
    ${commonStyles}
`;

export const ColDivContainer = styled(Layout.ColDiv)`
    ${commonStyles}
`;
