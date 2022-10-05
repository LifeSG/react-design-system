import styled from "styled-components";
import { Color } from "../color";

export const SVG = styled.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;

    #path {
        fill: ${Color.Neutral[8]};
    }
`;
