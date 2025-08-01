import styled, { createGlobalStyle } from "styled-components";
import { DateNavigator } from "../../date-navigator";
import { Colour, Spacing } from "../../theme";
import { Typography } from "../../typography";
import { Button } from "../../button";

export const ScheduleHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${Spacing["spacing-16"]};
    color: ${Colour["text-primary"]};
`;

export const LeftSection = styled.div<{ $isMobile?: boolean }>`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-16"]};
    ${({ $isMobile }) => ($isMobile ? "width: 100%;" : "width: auto;")}

    ${({ $isMobile }) =>
        $isMobile &&
        `> div {
            width: 100%;
        }`}
`;

export const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-16"]};
`;

export const StyledDateNavigator = styled(DateNavigator)<{
    $isMobile?: boolean;
}>`
    ${({ $isMobile }) => ($isMobile ? `width: 100%;` : `width: 400px;`)}
`;

export const StyledText = styled(Typography.BodyMD)`
    color: ${Colour["text-subtler"]};
`;

export const StyledButton = styled(Button.Default)`
    min-width: 80px;
`;

export const DropdownGlobalStyles = createGlobalStyle`
    [data-testid="dropdown-container"] {
        min-width: 16rem;
    }
`;
