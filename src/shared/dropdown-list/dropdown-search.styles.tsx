import { CrossIcon } from "@lifesg/react-icons/cross";
import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import styled, { css } from "styled-components";
import { Color } from "../../color";
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
    background: ${Color.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`;

export const SearchInput = styled(BasicInput)<InputStyleProps>`
    height: ${(props) => (props.$variant === "small" ? 2.5 : 3)}rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`;

export const SearchIcon = styled(MagnifierIcon)<IconProps>`
    ${(props) => {
        return getCssHeightAndWidth(props.$variant);
    }}
    margin: 0 0.5rem;
    color: ${Color.Neutral[3]};
`;

export const CancelButton = styled(ClickableIcon)<IconProps>`
    ${(props) => {
        return getCssHeightAndWidth(props.$variant);
    }}
    padding: 0;
    margin: 0 0.5rem;
    color: ${Color.Neutral[3]};
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
