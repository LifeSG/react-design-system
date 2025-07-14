import React from "react";
import styled from "styled-components";

interface SchedulerBodyProps {
    children: React.ReactNode;
}

export const SchedulerBody = ({ children }: SchedulerBodyProps) => {
    return <Wrapper>{children}</Wrapper>;
};

// =============================================================================
// STYLING
// =============================================================================
const Wrapper = styled.div`
    flex: 1;
    overflow: auto;
    position: relative;
`;
