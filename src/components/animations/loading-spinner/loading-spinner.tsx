import React from "react";
import styled from "styled-components";
import { LottieSpinner } from "./lottie-animation";

export const LoadingSpinner = () => {
    return (
        <Container>
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
