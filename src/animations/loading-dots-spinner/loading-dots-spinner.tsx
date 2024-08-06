import styled, { useTheme } from "styled-components";
import { v2_Color } from "../../v2_color";
import { BaseTheme } from "../../theme";
import { CustomisableAnimationProps } from "../types";
import { LottieLoadingDotsSpinner } from "./lottie-animation";

export const LoadingDotsSpinner = ({
    color,
    ...otherProps
}: CustomisableAnimationProps) => {
    const theme = useTheme();
    const animationColor =
        color || v2_Color.Primary({ theme: theme || BaseTheme });
    return (
        <Container {...otherProps}>
            <LottieLoadingDotsSpinner color={animationColor} />
        </Container>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const Container = styled.div`
    margin: 0 auto;
`;
