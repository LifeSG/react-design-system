import React from "react";
import styled from "styled-components";

interface TimeslotBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export const TimeslotBody = ({
    children,
    ...otherprops
}: TimeslotBodyProps) => {
    return <Wrapper {...otherprops}>{children}</Wrapper>;
};
// =============================================================================
// STYLING
// =============================================================================
const Wrapper = styled.div`
    height: 100%;
`;
