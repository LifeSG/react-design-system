import React from "react";
import styled from "styled-components";

interface SchedulerBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export const SchedulerBody = ({
    children,
    ...otherprops
}: SchedulerBodyProps) => {
    return <Wrapper {...otherprops}>{children}</Wrapper>;
};
// =============================================================================
// STYLING
// =============================================================================
const Wrapper = styled.div``;
