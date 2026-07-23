import clsx from "clsx";

import { PopoverTrigger } from "../popover-trigger";
import * as styles from "./popover-inline.styles";
import type { PopoverInlineProps } from "./types";

/**
 * An inline text or icon element that opens a popover on interaction.
 *
 * Use `PopoverInline` to embed a labelled trigger directly within a body of content.
 */
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
            <span
                aria-label={ariaLabel ?? (hasContent ? undefined : "More info")}
                role="button"
                aria-haspopup="dialog"
                tabIndex={0}
                className={styles.popoverInlineText}
                data-underline-style={underlineStyle}
                data-underline-hover-style={underlineHoverStyle}
            >
                {content}
                {icon && (
                    <span
                        className={clsx(
                            hasContent && styles.popoverInlineIconWithContent
                        )}
                    >
                        {icon}
                    </span>
                )}
            </span>
        </PopoverTrigger>
    );
};
