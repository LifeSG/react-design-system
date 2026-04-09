import clsx from "clsx";

import { PopoverTrigger } from "../popover-trigger";
import type { PopoverInlineProps } from "../types";
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
                data-underline-style={underlineStyle}
                data-underline-hover-style={underlineHoverStyle}
            >
                {content}
                {icon && (
                    <StyledIcon
                        className={clsx(
                            hasContent && "popoverInlineIconWithContent"
                        )}
                    >
                        {icon}
                    </StyledIcon>
                )}
            </StyledText>
        </PopoverTrigger>
    );
};
