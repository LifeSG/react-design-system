import styled from "styled-components";
import { DateNavigator } from "../../date-navigator";
import { Colour, Spacing } from "../../theme";
import { Typography } from "../../typography";

export const TimeSlotHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${Spacing["spacing-16"]};
    position: sticky;
    top: 0;
    z-index: 10;
    color: ${Colour["text-primary"]};
`;

export const LeftSection = styled.div`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-16"]};
`;

export const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-16"]};
`;

export const StyledDateNavigator = styled(DateNavigator)`
    width: 400px;
`;

export const StyledText = styled(Typography.BodyMD)`
    color: ${Colour["text-subtler"]};
`;
