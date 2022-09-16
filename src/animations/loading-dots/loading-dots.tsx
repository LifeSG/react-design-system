import React from "react";
import styled from "styled-components";
import { LottieLoadingDots } from "./lottie-animation";

export const LoadingDots = () => {
    return (
        <Container>
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
