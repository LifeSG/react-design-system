import styled, { useTheme } from "styled-components";
import { V2_Color } from "../../v2_color";
import { V2_BaseTheme } from "../../v2_theme";
import { CustomisableAnimationProps } from "../types";
import { LottieLoadingDotsSpinner } from "./lottie-animation";

export const LoadingDotsSpinner = ({
    color,
    ...otherProps
}: CustomisableAnimationProps) => {
    const theme = useTheme();
    const animationColor =
        color || V2_Color.Primary({ theme: theme || V2_BaseTheme });
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
