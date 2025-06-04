import styled from "styled-components";
import { MediaQuery } from "../media";

export const Wrapper = styled.div`
    // matches Layout.Container
    // not able to fully align with Layout.Section due to dynamic spacing
    --sgds-mainnav-max-width: 1320px;
    --sgds-mainnav-padding-x: 0.75rem;
    --sgds-mainnav-mobile-padding-x: 0.75rem;

    ${MediaQuery.MaxWidth.desktopM} {
        --sgds-mainnav-max-width: 1140px;
    }

    ${MediaQuery.MaxWidth.tablet} {
        --sgds-mainnav-max-width: 720px;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        --sgds-mainnav-max-width: 100%;
    }
`;
