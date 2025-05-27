import styled from "styled-components";
import { Colour } from "@/theme";
import { PopoverInlineStyle } from "../types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================

interface StyledTextProps {
    $defaultStyle: PopoverInlineStyle;
    $hoverStyle: PopoverInlineStyle;
}

interface StyledIconProps {
    $standalone: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
const getTextStyle = (style: PopoverInlineStyle) => {
    switch (style) {
        case "underline":
            return "text-decoration: underline 1px;";
        case "underline-dashed":
            return "text-decoration: underline dashed 1px;";
    }
};

export const StyledText = styled.span<StyledTextProps>`
    color: ${Colour["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({ $defaultStyle }) => getTextStyle($defaultStyle)}

    &:hover,
    &:focus-visible {
        color: ${Colour["text-hover"]};
        ${({ $hoverStyle }) => getTextStyle($hoverStyle)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`;

export const StyledIcon = styled.span<StyledIconProps>`
    ${(props) => !props.$standalone && "margin-left: 0.25rem;"}
`;
