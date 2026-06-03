import styled from "styled-components";

import { V3_Colour } from "../../v3_theme";

export const StyledSvg = styled.svg`
    .background-circle {
        fill: ${V3_Colour["bg-stronger"]};
    }

    .primary-path {
        fill: ${V3_Colour["icon-primary"]};
    }

    .validation-icon {
        fill: ${V3_Colour["bg-available"]};
    }

    .accent-light-3 {
        fill: ${V3_Colour["icon-primary-subtle"]};
    }

    .accent-light-4 {
        fill: ${V3_Colour["icon-primary-subtlest"]};
    }
`;
