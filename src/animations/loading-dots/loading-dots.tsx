import { Suspense, lazy } from "react";
import styled from "styled-components";
import { BaseAnimationProps } from "../types";

// lazy load to fix next.js SSR errors
const LottieLoadingDots = lazy(async () => ({
    default: (await import("./lottie-animation")).LottieLoadingDots,
}));

export const LoadingDots = (props: BaseAnimationProps) => {
    return (
        <Container {...props}>
            <Suspense fallback={null}>
                <LottieLoadingDots />
            </Suspense>
        </Container>
    );
};

// =============================================================================
// STYLING
// =============================================================================

const Container = styled.div`
    margin: 0 auto;
`;
