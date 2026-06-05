import { css } from "@linaria/core";

import { Colour, MediaQuery } from "../../theme";

export const thumbnail = css`
    width: 120px;
    height: 120px;

    ${MediaQuery.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`;

export const phoneThumbnail = css`
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
`;

export const emailThumbnail = css`
    .background-circle {
        fill: ${Colour["bg-stronger"]};
    }

    .primary-path {
        fill: ${Colour["icon-primary"]};
    }

    .validation-icon {
        fill: ${Colour["bg-available"]};
    }

    .accent-light-3 {
        fill: ${Colour["icon-primary-subtle"]};
    }

    .accent-light-4 {
        fill: ${Colour["icon-primary-subtlest"]};
    }
`;
