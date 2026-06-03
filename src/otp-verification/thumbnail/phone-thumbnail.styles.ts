import { css } from "@linaria/core";

import { Colour, MediaQuery } from "../../theme";

export const thumbnail = css`
    .background-circle {
        fill: ${Colour["bg-stronger"]};
    }

    .primary-path {
        fill: ${Colour["icon-primary"]};
    }

    .validation-icon {
        fill: ${Colour["bg-available"]};
    }

    .accent-light {
        fill: ${Colour["bg-selected-stronger"]};
    }

    width: 120px;
    height: 120px;

    ${MediaQuery.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`;
