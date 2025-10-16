import styled from "styled-components";
import { isReact19 } from "../../util";

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
    if (isReact19()) {
        return value;
    }

    return value ? "true" : undefined;
};

export const concatIds = (...selectors: (string | undefined)[]) => {
    return selectors.filter((selector) => !!selector).join(" ");
};

export const formatPhraseWithPrefix = (prefix: string, v: string) => {
    return v ? `${prefix} ${Array.from(v).join(" ")}` : "";
};
