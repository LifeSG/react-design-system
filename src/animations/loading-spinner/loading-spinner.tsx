import styled from "styled-components";
import { BaseAnimationProps } from "../types";
import { LottieSpinner } from "./lottie-animation";
import { Spacing } from "../../theme";

export const LoadingSpinner = (props: BaseAnimationProps) => {
    return (
        <Container {...props}>
            <LottieSpinner />
        </Container>
    );
};

// =============================================================================
// STYLING
// =============================================================================

const Container = styled.div`
    margin: 0 auto;
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]}
        ${Spacing["spacing-64"]};
`;
