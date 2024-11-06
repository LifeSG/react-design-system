import styled from "styled-components";
import { V2_Color } from "../v2_color";
import { ClickableIcon } from "../shared/clickable-icon";
import { V2_Text } from "../v2_text";

export const HeaderArrowButton = styled(ClickableIcon)`
    height: 2.5rem;
    padding: 1rem;
    :disabled {
        cursor: not-allowed;
        > svg {
            color: ${V2_Color.Neutral[5]};
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

export const StyledDateText = styled(V2_Text.H4)`
    color: ${V2_Color.Neutral[1]};
    white-space: nowrap;
    display: inline-block;
`;

export const StyledDayText = styled(V2_Text.XSmall)`
    color: ${V2_Color.Neutral[2]};
`;
