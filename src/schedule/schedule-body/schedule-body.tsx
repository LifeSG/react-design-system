import React from "react";
import styled from "styled-components";

interface ScheduleBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const ScheduleBody = React.forwardRef<HTMLDivElement, ScheduleBodyProps>(
    ({ children, ...otherprops }, ref) => {
        return (
            <Wrapper ref={ref} {...otherprops}>
                {children}
            </Wrapper>
        );
    }
);
// =============================================================================
// STYLING
// =============================================================================
const Wrapper = styled.div`
    height: 100%;
    position: relative;
    overflow: hidden;
`;
