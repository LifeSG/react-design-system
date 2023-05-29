import { animated } from "react-spring";
import styled from "styled-components";
import { Color } from "../../color";

export const AnimatedDiv = styled(animated.div)`
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    width: calc(100% + 2px);
    max-width: 41rem;
    background: ${Color.Neutral[8]};
    overflow: hidden;
    z-index: 1;
`;
