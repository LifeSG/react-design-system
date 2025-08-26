import styled, { createGlobalStyle } from "styled-components";
import { DateNavigator } from "../../date-navigator";
import { Colour, Spacing } from "../../theme";
import { Typography } from "../../typography";
import { Button } from "../../button";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface LeftSectionStyleProps {
    $isMobile?: boolean;
}

interface StyledDateNavigatorStyleProps {
    $isMobile?: boolean;
}

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

export const LeftSection = styled.div<LeftSectionStyleProps>`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-16"]};
    ${(props) => (props.$isMobile ? "width: 100%;" : "width: auto;")}

    ${(props) =>
        props.$isMobile &&
        `> div {
            width: 100%;
        }`}
`;

export const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-16"]};
`;

export const StyledDateNavigator = styled(
    DateNavigator
)<StyledDateNavigatorStyleProps>`
    ${(props) => (props.$isMobile ? `width: 100%;` : `width: 400px;`)}
`;

export const StyledText = styled(Typography.BodyMD)`
    color: ${Colour["text-subtler"]};
`;

export const StyledButton = styled(Button.Default)`
    min-width: 5rem;
`;

// =============================================================================
// CONSTANTS
// =============================================================================
export const DROPDOWN_WIDTH = "240px";
