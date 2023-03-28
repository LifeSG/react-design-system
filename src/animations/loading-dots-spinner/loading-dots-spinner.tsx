import React from "react";
import styled from "styled-components";
import { LottieLoadingDotsSpinner } from "./lottie-animation";
import { LoadingDotsSpinnerProps } from "./types";

export const LoadingDotsSpinner = ({
    color,
    "data-testid": testId,
}: LoadingDotsSpinnerProps) => {
    return (
        <Container data-testid={testId}>
            <LottieLoadingDotsSpinner color={color} />
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
