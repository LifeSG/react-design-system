import { animated } from "react-spring";
import styled from "styled-components";
import { MediaQuery } from "../../media";

export const AnimatedDiv = styled(animated.div)`
    position: absolute;
    top: calc(100% + 0.5rem);
    left: -1px;
    width: calc(100% + 2px);
    max-width: 41rem;
    overflow: hidden;
    z-index: 1;
    min-width: 21rem;

    ${MediaQuery.MaxWidth.mobileL} {
        min-width: 17.5rem;
    }
`;
