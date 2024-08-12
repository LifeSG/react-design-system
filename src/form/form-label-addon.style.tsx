import styled from "styled-components";
import { V2_Color } from "../v2_color";

export const TriggerArea = styled.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${V2_Color.Primary};
    }
`;

export const AddonWrapper = styled.div`
    display: inline;
    position: relative;
    width: fit-content;
`;
