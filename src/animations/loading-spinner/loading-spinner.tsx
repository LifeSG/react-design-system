import React from "react";
import styled from "styled-components";
import { BaseAnimationProps } from "../types";
import { LottieSpinner } from "./lottie-animation";

export const LoadingSpinner = (props: BaseAnimationProps) => {
    return (
        <Container {...props}>
            <LottieSpinner />
        </Container>
    );
};

// =============================================================================
// STYLING
// =============================================================================

const Container = styled.div`
    margin: 0 auto;
    padding: 1rem 2rem 4rem;
`;
