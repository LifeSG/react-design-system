import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import styled, { css } from "styled-components";

import { V3_Colour, V3_Radius, V3_Spacing } from "../../v3_theme";
import { ClickableIcon } from "../clickable-icon";
import type { InputStyleProps } from "../input-wrapper";
import { BasicInput } from "../input-wrapper";
import type { DropdownVariantType, IconProps } from "./types";

const getIconSize = (variant?: DropdownVariantType) => {
    return variant === "small" ? 1 : 1.375;
};
const getCssHeightAndWidth = (variant?: DropdownVariantType) => {
    return css`
        height: ${getIconSize(variant)}rem;
        width: ${getIconSize(variant)}rem;
    `;
};

export const Container = styled.li`
    background: ${V3_Colour["bg-strong"]};
    display: flex;
    border-radius: ${V3_Radius["sm"]};
    align-items: center;
`;

export const SearchInput = styled(BasicInput)<InputStyleProps>`
    height: ${(props) => (props.$variant === "small" ? 2.5 : 3)}rem;
    flex: 1;
    padding: 0 ${V3_Spacing["spacing-8"]} 0 0;
    width: 100%;
`;

export const SearchIcon = styled(MagnifierIcon)<IconProps>`
    ${(props) => {
        return getCssHeightAndWidth(props.$variant);
    }}
    margin: 0 ${V3_Spacing["spacing-8"]};
    color: ${V3_Colour["icon"]};
`;

export const CancelButton = styled(ClickableIcon)<IconProps>`
    ${(props) => {
        return getCssHeightAndWidth(props.$variant);
    }}
    padding: 0;
    margin: 0 ${V3_Spacing["spacing-8"]};
    color: ${V3_Colour["icon"]};
    cursor: pointer;
    ${(props) => {
        if (props.$variant === "small")
            // override svg style in ClickableIcon
            return css`
                svg {
                    ${getCssHeightAndWidth(props.$variant)}
                }
            `;
    }}
`;
