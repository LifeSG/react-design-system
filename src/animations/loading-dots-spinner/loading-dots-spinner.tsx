import styled, { useTheme } from "styled-components";
import { Colour } from "../../theme";
import { CustomisableAnimationProps } from "../types";
import { LottieLoadingDotsSpinner } from "./lottie-animation";

export const LoadingDotsSpinner = ({
    color,
    ...otherProps
}: CustomisableAnimationProps) => {
    const theme = useTheme();
    const animationColor = color || Colour["icon-primary"]({ theme });
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
