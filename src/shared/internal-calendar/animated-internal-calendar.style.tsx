import { animated } from "react-spring";
import styled from "styled-components";
import { MediaQuery } from "../../media";

export const AnimatedDiv = styled(animated.div)`
    max-width: 41rem;
    overflow: hidden;
    min-width: 21rem;

    ${MediaQuery.MaxWidth.mobileL} {
        min-width: 17.5rem;
    }
`;
