import { Layout } from "src/layout";
import styled from "styled-components";

export const Column = styled(Layout.ColDiv)`
    background: #f9b5b2;
    border: 2px dotted #f26664;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`;
Column.displayName = "Layout.ColDiv";

export const Grid = styled(Layout.Content)`
    height: 100vh;
    background: #fdddd7;
    align-content: center;
`;
Grid.displayName = "Layout.Content";
