import { CrossIcon } from "@lifesg/react-icons/cross";
import styled from "styled-components";

import { BasicButton, BasicInput, InputBox } from "../shared/input-wrapper";
import { Colour, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const InputElement = styled(BasicInput)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    &.bordered {
        &.padding-left {
            padding-left: ${Spacing["spacing-16"]};
        }

        &.padding-right {
            padding-right: ${Spacing["spacing-16"]};
        }
    }
`;

export const ClearButton = styled(BasicButton)`
    height: auto;
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};

    cursor: pointer;
    color: ${Colour.icon};

    &.no-border {
        margin-right: -${Spacing["spacing-12"]};
    }
`;

export const ClearIcon = styled(CrossIcon)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;

export const NoBorderWrapper = styled.div`
    display: flex;
    width: 100%;
`;

export const DefaultWrapper = styled(InputBox)`
    display: flex;
    align-items: center;
    width: 100%;
`;
