import styled from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import { Colour, Spacing } from "../theme";
import { Typography } from "../typography";

export const HeaderArrowButton = styled(ClickableIcon)`
    padding: ${Spacing["spacing-12"]};
    :disabled {
        cursor: not-allowed;
        > svg {
            color: ${Colour["icon-disabled"]};
        }
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Wrapper = styled.div`
    text-align: center;
`;

export const StyledDateText = styled(Typography.BodyBL)`
    white-space: nowrap;
    display: inline-block;
`;

export const StyledDayText = styled(Typography.BodyXS)`
    color: ${Colour["text-subtle"]};
`;
