import { Layout } from "src/layout";
import styled from "styled-components";

export const LayoutGrid = styled(Layout.Content)`
    [data-id="container"] {
        gap: 1rem;
    }
`;
LayoutGrid.displayName = "Layout.Content";
