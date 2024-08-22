import styled from "styled-components";
import { Color } from "../../color";
import { ClickableIcon } from "../../shared/clickable-icon";
import { Text } from "../../text";

export const HeaderArrowButton = styled(ClickableIcon)`
    height: 2.5rem;
    padding: 1rem;

    :disabled {
        cursor: not-allowed;
        > svg {
            color: ${Color.Neutral[5]};
        }
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 0.625rem;
    justify-content: center;
`;

export const Wrapper = styled.div`
    text-align: center;
    padding: 0 !important;
`;

export const StyledDateText = styled(Text.H4)`
    color: ${Color.Neutral[1]};
`;

export const StyledDayText = styled(Text.XSmall)`
    color: ${Color.Neutral[2]};
`;
