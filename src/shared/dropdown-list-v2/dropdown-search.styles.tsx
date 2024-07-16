import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import styled, { css } from "styled-components";
import { Color } from "../../color";
import { ClickableIcon } from "../clickable-icon";
import { DropdownVariantType } from "../dropdown-list/types";
import { BasicInput, InputStyleProps } from "../input-wrapper/input-wrapper";

//=============================================================================
// STYLE INTERFACE
//=============================================================================
export interface StyleProps {
    $variant?: DropdownVariantType | undefined;
}

//=============================================================================
// STYLING
//=============================================================================
const getIconSize = (variant?: DropdownVariantType) => {
    return variant === "small" ? 1 : 1.125;
};

const getIconDimensions = (variant?: DropdownVariantType) => {
    return css`
        height: ${getIconSize(variant)}rem;
        width: ${getIconSize(variant)}rem;
    `;
};

export const Container = styled.div<StyleProps>`
    background: ${Color.Neutral[7]};
    border-radius: 4px;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${(props) =>
        props.$variant === "small" ? "0.4375rem 0.5rem" : "0.75rem 0.5rem"};
    margin: 0.5rem 0;
`;

export const SearchInput = styled(BasicInput)<InputStyleProps>`
    height: ${(props) => (props.$variant === "small" ? 2.5 : 3)}rem;
    flex: 1;
    padding: 0;
    height: auto;
`;

export const SearchIcon = styled(MagnifierIcon)<StyleProps>`
    color: ${Color.Neutral[3]};
    flex-shrink: 0;
    ${(props) => {
        return getIconDimensions(props.$variant);
    }}
`;

export const ClearButton = styled(ClickableIcon)<StyleProps>`
    margin: -0.9375rem -0.4375rem;
    padding: 0.9375rem 0.4375rem;
    color: ${Color.Neutral[3]};
    cursor: pointer;

    ${(props) => {
        return css`
            svg {
                ${getIconDimensions(props.$variant)}
            }
        `;
    }}
`;
