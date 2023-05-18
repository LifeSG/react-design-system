import styled from "styled-components";
import { InternalCalendar } from "../shared/internal-calendar";
import { Color } from "../color";
import { CalendarProps } from "./types";

export const Calendar = ({ className, ...otherProps }: CalendarProps) => {
    return (
        <Wrapper className={className}>
            <InternalCalendar type="standalone" {...otherProps} />
        </Wrapper>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const Wrapper = styled.div`
    width: 41rem;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 12px;
`;
