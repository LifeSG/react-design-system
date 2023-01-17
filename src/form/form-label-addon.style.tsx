import { ICircleFillIcon } from "@lifesg/react-icons/i-circle-fill";
import styled from "styled-components";
import { Color } from "../color";

export const TriggerArea = styled.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    svg {
        vertical-align: text-bottom;
    }
`;

export const AddonWrapper = styled.div`
    display: inline;
    position: relative;
    width: fit-content;
`;

export const InfoIcon = styled(ICircleFillIcon)`
    height: 1rem;
    width: 1rem;
    color: ${Color.Primary};
`;
