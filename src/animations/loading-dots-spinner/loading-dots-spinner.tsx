import styled, { useTheme } from "styled-components";
import { Color } from "../../color";
import { BaseTheme } from "../../theme";
import { CustomisableAnimationProps } from "../types";
import { LottieLoadingDotsSpinner } from "./lottie-animation";

export const LoadingDotsSpinner = ({
    color,
    id,
    "data-testid": testId,
}: CustomisableAnimationProps) => {
    const theme = useTheme();
    const animationColor =
        color || Color.Primary({ theme: theme || BaseTheme });
    return (
        <Container data-testid={testId} id={id}>
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
