import React from "react";
import styled from "styled-components";

interface ScheduleBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export const ScheduleBody = ({
    children,
    ...otherprops
}: ScheduleBodyProps) => {
    return <Wrapper {...otherprops}>{children}</Wrapper>;
};
// =============================================================================
// STYLING
// =============================================================================
const Wrapper = styled.div`
    height: 100%;
`;
