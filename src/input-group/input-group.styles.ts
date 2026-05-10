import styled from "styled-components";

import { Input } from "../input/input";
import { InputBox } from "../shared/input-wrapper";
import { Colour, Font, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const AddonWrapper = styled(InputBox)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${Spacing["spacing-16"]};

    &.addonWrapperReadOnly {
        padding: 0;
    }

    &.addonWrapperNoBorder {
        padding: 0;
    }

    &.addonWrapperPositionRight {
        flex-direction: row-reverse;
    }
`;

export const NoAddonWrapper = styled(InputBox)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${Spacing["spacing-16"]};

    &.noAddonWrapperReadOnly {
        padding: 0;
    }

    &.noAddonWrapperNoBorder {
        padding: 0;
    }

    &.noAddonWrapperPositionRight {
        flex-direction: row-reverse;
    }
`;

export const MainInput = styled(Input)``;

export const LabelAddonContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-right: ${Spacing["spacing-12"]};

    ${Font["body-baseline-regular"]}
    color: ${Colour["text"]};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    &.labelAddonContainerDisabled {
        color: ${Colour["text-subtler"]};
    }

    &.labelAddonContainerPositionRight {
        margin-right: 0;
        margin-left: ${Spacing["spacing-12"]};
    }

    &.labelAddonContainerReadOnly {
        margin-right: ${Spacing["spacing-4"]};
    }

    &.labelAddonContainerPositionRight.labelAddonContainerReadOnly {
        margin-right: 0;
        margin-left: ${Spacing["spacing-4"]};
    }
`;
