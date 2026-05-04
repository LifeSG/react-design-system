import styled from "styled-components";

import { V3_Spacing } from "../v3_theme";

export const Img = styled.img`
    max-height: ${V3_Spacing["spacing-72"]};
    max-width: 100%;
`;

export const Items = styled.div`
    display: flex;
    align-items: flex-start;
    gap: ${V3_Spacing["spacing-32"]};
    margin-top: ${V3_Spacing["spacing-16"]};
`;
