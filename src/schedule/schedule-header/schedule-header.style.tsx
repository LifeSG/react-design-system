import styled from "styled-components";
import { DateNavigator } from "../../date-navigator";
import { Colour, Spacing } from "../../theme";
import { Typography } from "../../typography";
import { Button } from "../../button";
import { MediaQuery } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================
export const ScheduleHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${Spacing["spacing-16"]};
    color: ${Colour["text-primary"]};
    gap: ${Spacing["spacing-16"]};
`;

export const LeftSection = styled.div`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.md} {
        flex-direction: column;
        align-items: stretch;
        width: 100%;
    }
`;

export const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.lg} {
        display: none;
    }
`;

export const StyledDateNavigator = styled(DateNavigator)`
    width: 100%;
    max-width: 400px;
`;

export const StyledText = styled(Typography.BodyMD)`
    color: ${Colour["text-subtler"]};
`;

export const StyledButton = styled(Button.Default)`
    min-width: 5rem;

    ${MediaQuery.MaxWidth.lg} {
        display: none;
    }
`;

// =============================================================================
// CONSTANTS
// =============================================================================
export const DROPDOWN_WIDTH = "240px";
