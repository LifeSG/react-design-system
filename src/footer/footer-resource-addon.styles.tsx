import styled from "styled-components";
import { Spacing } from "../v3_theme";

export const Img = styled.img`
    max-height: ${Spacing["spacing-72"]};
    max-width: 100%;
`;

export const Items = styled.div`
    display: flex;
    align-items: flex-start;
    gap: ${Spacing["spacing-32"]};
    margin-top: ${Spacing["spacing-16"]};
`;
