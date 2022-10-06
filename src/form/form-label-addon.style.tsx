import { Color } from "../color";
import styled from "styled-components";

export const TriggerArea = styled.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    svg {
        #path {
            fill: ${Color.Primary};
        }
    }
`;

export const AddonWrapper = styled.div`
    display: inline;
    position: relative;
    width: fit-content;
`;
