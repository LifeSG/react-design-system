import React from "react";
import styled from "styled-components";
import { BaseAnimationProps } from "../types";
import { LottieLoadingDots } from "./lottie-animation";

export const LoadingDots = (props: BaseAnimationProps) => {
    return (
        <Container {...props}>
            <LottieLoadingDots />
        </Container>
    );
};

// =============================================================================
// STYLING
// =============================================================================

const Container = styled.div`
    margin: 0 auto;
`;
