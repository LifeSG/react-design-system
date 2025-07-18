import styled from "styled-components";
import { version } from "react";

export const VisuallyHidden = styled.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;

/**
 * Handle compatibility of `inert` across React versions.
 * 19+ provides official support as a boolean, while it is handled as string in older versions
 */
export const inertValue = (value: boolean | undefined) => {
    const pieces = version.split(".");
    const major = parseInt(pieces[0], 10);
    if (major >= 19) {
        return value;
    }

    return value ? true : undefined;
};
