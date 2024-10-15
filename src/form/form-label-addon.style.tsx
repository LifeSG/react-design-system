import styled from "styled-components";
import { Color } from "../color";

export const TriggerArea = styled.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Color.Primary};
    }
`;

export const AddonWrapper = styled.div`
    padding-left: 0.25rem;
    display: inline;
`;
