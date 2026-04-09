import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import styled, { css } from "styled-components";

import { V3_Colour, V3_Font, V3_Radius, V3_Spacing } from "../../v3_theme";
import { ClickableIcon } from "../clickable-icon";
import { BasicInput } from "../input-wrapper";
import type { DropdownVariantType } from "./types";

//=============================================================================
// STYLE INTERFACE
//=============================================================================
export interface StyleProps {
    $variant: DropdownVariantType | undefined;
}

//=============================================================================
// STYLING
//=============================================================================
export const Container = styled.div<StyleProps>`
    background: ${V3_Colour["bg-strong"]};
    border-radius: ${V3_Radius["sm"]};
    display: flex;
    align-items: center;

    ${(props) =>
        props.$variant === "small"
            ? V3_Font["body-md-regular"]
            : V3_Font["body-baseline-regular"]}
`;

export const SearchBox = styled.label<StyleProps>`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${V3_Spacing["spacing-8"]};
    padding: ${(props) =>
        props.$variant === "small"
            ? css`
                  ${V3_Spacing["spacing-8"]} ${V3_Spacing["spacing-16"]}
              `
            : // TODO: confirm vertical spacing
              css`10px ${V3_Spacing["spacing-8"]}`};
`;

export const SearchInput = styled(BasicInput)`
    flex: 1;
`;

export const SearchIcon = styled(MagnifierIcon)`
    color: ${V3_Colour["icon"]};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`;

export const ClearButton = styled(ClickableIcon)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${V3_Spacing["spacing-8"]};
    margin-left: -${V3_Spacing["spacing-8"]};
    color: ${V3_Colour["icon"]};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;
