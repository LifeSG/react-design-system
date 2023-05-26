import styled, { css } from "styled-components";
import { InternalCalendar } from "../shared/internal-calendar";
import { Color } from "../color";
import { CalendarProps } from "./types";

export const Calendar = ({
    className,
    styleType = "bordered",
    ...otherProps
}: CalendarProps) => {
    return (
        <Wrapper className={className} $hasBorder={styleType === "bordered"}>
            <InternalCalendar type="standalone" {...otherProps} />
        </Wrapper>
    );
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $hasBorder?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
const Wrapper = styled.div<StyleProps>`
    width: 41rem;
    ${(props) => {
        if (props.$hasBorder) {
            return css`
                border: 1px solid ${Color.Neutral[5](props)};
                border-radius: 12px;
            `;
        }
    }}
`;
