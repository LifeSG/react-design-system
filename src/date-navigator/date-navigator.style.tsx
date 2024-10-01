import styled from "styled-components";
import { Color } from "../color";
import { ClickableIcon } from "../shared/clickable-icon";
import { Text } from "../text";

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
    justify-content: center;
    width: 100%;
`;

export const Wrapper = styled.div`
    text-align: center;
`;

export const StyledDateText = styled(Text.H4)`
    color: ${Color.Neutral[1]};
    white-space: nowrap;
    display: inline-block;
`;

export const StyledDayText = styled(Text.XSmall)`
    color: ${Color.Neutral[2]};
`;
