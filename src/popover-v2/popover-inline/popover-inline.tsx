import { PopoverTrigger } from "../popover-trigger";
import { PopoverInlineProps } from "../types";
import { StyledIcon, StyledText } from "./popover-inline.styles";

export const PopoverInline = ({
    content,
    icon,
    underlineStyle = "default",
    underlineHoverStyle = "default",
    ...otherProps
}: PopoverInlineProps) => {
    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <PopoverTrigger {...otherProps}>
            <StyledText
                role="button"
                aria-haspopup="dialog"
                tabIndex={0}
                $defaultStyle={underlineStyle}
                $hoverStyle={underlineHoverStyle}
            >
                {content}
                {icon && <StyledIcon $standalone={!content}>{icon}</StyledIcon>}
            </StyledText>
        </PopoverTrigger>
    );
};
