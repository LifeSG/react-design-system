import React from "react";
import styled from "styled-components";
import { LottieLoadingDotsSpinner } from "./lottie-animation";

export const LoadingDotsSpinner = () => {
    return (
        <Container>
            <LottieLoadingDotsSpinner />
        </Container>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const Container = styled.div`
    margin: 0 auto;
    padding-top: 1rem;
`;
