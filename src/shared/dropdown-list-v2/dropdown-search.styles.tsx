import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import styled, { css } from "styled-components";
import { Colour, Font, Radius, Spacing } from "@/theme";
import { ClickableIcon } from "../clickable-icon";
import { DropdownVariantType } from "../dropdown-list/types";
import { BasicInput, InputStyleProps } from "../input-wrapper/input-wrapper";

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
    background: ${Colour["bg-strong"]};
    border-radius: ${Radius["sm"]};
    display: flex;
    align-items: center;

    ${(props) =>
        props.$variant === "small"
            ? Font["body-md-regular"]
            : Font["body-baseline-regular"]}
`;

export const SearchBox = styled.label<StyleProps>`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-8"]};
    padding: ${(props) =>
        props.$variant === "small"
            ? css`
                  ${Spacing["spacing-8"]} ${Spacing["spacing-16"]}
              `
            : // TODO: confirm vertical spacing
              css`10px ${Spacing["spacing-16"]}`};
`;

export const SearchInput = styled(BasicInput)<InputStyleProps>`
    flex: 1;
`;

export const SearchIcon = styled(MagnifierIcon)`
    color: ${Colour["icon"]};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`;

export const ClearButton = styled(ClickableIcon)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Spacing["spacing-8"]};
    margin-left: -${Spacing["spacing-8"]};
    color: ${Colour["icon"]};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;
