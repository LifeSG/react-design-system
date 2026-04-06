import { lazy, Suspense, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { ComponentToken, parseCSSVariableValue } from "../../theme";
import type { CustomisableAnimationProps } from "../types";

// lazy load to fix next.js SSR errors
const LottieLoadingDotsSpinner = lazy(async () => ({
    default: (await import("./lottie-animation")).LottieLoadingDotsSpinner,
}));

export const LoadingDotsSpinner = ({
    color,
    ...otherProps
}: CustomisableAnimationProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [resolvedTokenColor, setResolvedTokenColor] = useState<
        string | undefined
    >(undefined);

    useEffect(() => {
        if (color) {
            setResolvedTokenColor(undefined);
            return;
        }

        const tokenColor = parseCSSVariableValue(
            ComponentToken.Animation["loading-dots-spinner-colour"],
            containerRef.current
        );
        setResolvedTokenColor(tokenColor || undefined);
    }, [color]);

    const animationColor = color || resolvedTokenColor;
    return (
        <Container ref={containerRef} {...otherProps}>
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
