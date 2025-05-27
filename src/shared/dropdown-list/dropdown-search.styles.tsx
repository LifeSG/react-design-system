import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import styled, { css } from "styled-components";
import { Colour, Radius, Spacing } from "@/theme";
import { ClickableIcon } from "../clickable-icon";
import { BasicInput, InputStyleProps } from "../input-wrapper/input-wrapper";
import { DropdownVariantType, IconProps } from "./types";

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
    background: ${Colour["bg-strong"]};
    display: flex;
    border-radius: ${Radius["sm"]};
    align-items: center;
`;

export const SearchInput = styled(BasicInput)<InputStyleProps>`
    height: ${(props) => (props.$variant === "small" ? 2.5 : 3)}rem;
    flex: 1;
    padding: 0 ${Spacing["spacing-8"]} 0 0;
    width: 100%;
`;

export const SearchIcon = styled(MagnifierIcon)<IconProps>`
    ${(props) => {
        return getCssHeightAndWidth(props.$variant);
    }}
    margin: 0 ${Spacing["spacing-8"]};
    color: ${Colour["icon"]};
`;

export const CancelButton = styled(ClickableIcon)<IconProps>`
    ${(props) => {
        return getCssHeightAndWidth(props.$variant);
    }}
    padding: 0;
    margin: 0 ${Spacing["spacing-8"]};
    color: ${Colour["icon"]};
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
