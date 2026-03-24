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
            <Suspense fallback={<Placeholder />}>
                <LottieLoadingDots />
            </Suspense>
        </Container>
    );
};

const Placeholder = () => {
    return (
        <div
            style={{
                height: "16px",
                width: "64px",
            }}
        />
    );
};

// =============================================================================
// STYLING
// =============================================================================

const Container = styled.div`
    margin: 0 auto;
`;
