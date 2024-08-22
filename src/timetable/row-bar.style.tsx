import styled, { css } from "styled-components";

interface RowCellContainerProps {
    $isFirst: boolean;
}

export const RowCellContainer = styled.div<RowCellContainerProps>`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #e0e4e5;
`;
