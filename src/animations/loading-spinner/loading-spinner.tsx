import { Suspense, lazy } from "react";
import styled from "styled-components";
import { BaseAnimationProps } from "../types";

// lazy load to fix next.js SSR errors
const LottieSpinner = lazy(async () => ({
    default: (await import("./lottie-animation")).LottieSpinner,
}));

export const LoadingSpinner = (props: BaseAnimationProps) => {
    return (
        <Container {...props}>
            <Suspense fallback={null}>
                <LottieSpinner />
            </Suspense>
        </Container>
    );
};

// =============================================================================
// STYLING
// =============================================================================

const Container = styled.div`
    margin: 0 auto;
    padding: 2rem 1rem;
`;
