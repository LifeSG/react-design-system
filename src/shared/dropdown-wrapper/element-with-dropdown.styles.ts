import { css } from "@linaria/core";

// hack to force child to respect max-height of parent
// even though parent does not have explicit height
export const dropdownContainer = css`
    display: flex;
    flex-direction: column;
`;
