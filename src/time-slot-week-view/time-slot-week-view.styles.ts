import { css } from "@linaria/core";

import { MediaQuery } from "../theme";

export const wrapper = css`
    --header-bottom-spacing: 0.5rem;

    ${MediaQuery.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`;
