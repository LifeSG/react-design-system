import { PopoverTrigger } from "../popover-trigger";
import { PopoverInlineProps } from "../types";
import { StyledIcon, StyledText } from "./popover-inline.styles";

export const PopoverInline = ({
    ariaLabel,
    content,
    icon,
    underlineStyle = "default",
    underlineHoverStyle = "default",
    ...otherProps
}: PopoverInlineProps) => {
    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const hasContent = !!content;

    return (
        <PopoverTrigger {...otherProps}>
            <StyledText
                aria-label={ariaLabel ?? (hasContent ? undefined : "More info")}
                role="button"
                aria-haspopup="dialog"
                tabIndex={0}
                $defaultStyle={underlineStyle}
                $hoverStyle={underlineHoverStyle}
            >
                {content}
                {icon && (
                    <StyledIcon $standalone={!hasContent}>{icon}</StyledIcon>
                )}
            </StyledText>
        </PopoverTrigger>
    );
};
