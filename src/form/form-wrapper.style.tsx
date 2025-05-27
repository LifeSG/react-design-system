import styled, { css } from "styled-components";
import { ColDiv } from "../layout/col-div";
import { Spacing } from "@/theme";
import { V2_ColDiv } from "../v2_layout/col-div";

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

export const ColDivContainer = styled(ColDiv)`
    ${commonStyles}
`;

export const V2_ColDivContainer = styled(V2_ColDiv)`
    ${commonStyles}
`;
