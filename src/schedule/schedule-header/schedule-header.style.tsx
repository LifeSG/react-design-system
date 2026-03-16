import styled from "styled-components";

import { Button } from "../../button";
import { DateNavigator } from "../../date-navigator";
import { Typography } from "../../typography";
import { V3_Colour, V3_MediaQuery, V3_Spacing } from "../../v3_theme";

// =============================================================================
// STYLING
// =============================================================================
export const ScheduleHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${V3_Spacing["spacing-16"]};
    color: ${V3_Colour["text-primary"]};
    gap: ${V3_Spacing["spacing-16"]};
`;

export const LeftSection = styled.div`
    display: flex;
    align-items: center;
    gap: ${V3_Spacing["spacing-16"]};

    ${V3_MediaQuery.MaxWidth.md} {
        flex-direction: column;
        align-items: stretch;
        width: 100%;
    }
`;

export const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: ${V3_Spacing["spacing-16"]};

    ${V3_MediaQuery.MaxWidth.lg} {
        display: none;
    }
`;

export const StyledDateNavigator = styled(DateNavigator)`
    width: 100%;
    max-width: 400px;
`;

export const StyledText = styled(Typography.BodyMD)`
    color: ${V3_Colour["text-subtler"]};
`;

export const StyledButton = styled(Button.Default)`
    min-width: 5rem;

    ${V3_MediaQuery.MaxWidth.lg} {
        display: none;
    }
`;

// =============================================================================
// CONSTANTS
// =============================================================================
export const DROPDOWN_WIDTH = "240px";
