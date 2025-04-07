import { Suspense, lazy } from "react";
import styled, { useTheme } from "styled-components";
import { Colour } from "../../theme";
import { CustomisableAnimationProps } from "../types";

// lazy load to fix next.js SSR errors
const LottieLoadingDotsSpinner = lazy(async () => ({
    default: (await import("./lottie-animation")).LottieLoadingDotsSpinner,
}));

export const LoadingDotsSpinner = ({
    color,
    ...otherProps
}: CustomisableAnimationProps) => {
    const theme = useTheme();
    const animationColor = color || Colour["icon-primary"]({ theme });
    return (
        <Container {...otherProps}>
            <Suspense fallback={<Placeholder />}>
                <LottieLoadingDotsSpinner color={animationColor} />
            </Suspense>
        </Container>
    );
};

const Placeholder = () => {
    return (
        <div
            style={{
                height: "200px",
                width: "200px",
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
