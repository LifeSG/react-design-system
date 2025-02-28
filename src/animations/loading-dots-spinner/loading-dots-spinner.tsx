import { Suspense, lazy } from "react";
import styled, { useTheme } from "styled-components";
import { Color } from "../../color";
import { BaseTheme } from "../../theme";
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
    const animationColor =
        color || Color.Primary({ theme: theme || BaseTheme });
    return (
        <Container {...otherProps}>
            <Suspense fallback={null}>
                <LottieLoadingDotsSpinner color={animationColor} />
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
