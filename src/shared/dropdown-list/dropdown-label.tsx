import clsx from "clsx";
import { useCallback, useMemo, useRef } from "react";
import { useResizeDetector } from "react-resize-detector";

import { Font } from "../../theme";
import { useApplyStyle } from "../../theme/utils/use-apply-styles";
import { StringHelper } from "../../util/string-helper";
import * as styles from "./dropdown-label.styles";
import type { DropdownVariantType, LabelDisplayType } from "./types";

interface DropdownLabelProps {
    bold?: boolean | undefined;
    displayType?: LabelDisplayType | undefined;
    label: string;
    maxLines?: number | undefined;
    searchTerm?: string | undefined;
    selected?: boolean | undefined;
    disabled?: boolean | undefined;
    sublabel?: string | undefined;
    truncationType?: "middle" | "end" | undefined;
    variant?: DropdownVariantType | undefined;
}

export const DropdownLabel = ({
    bold,
    displayType = "inline",
    label,
    searchTerm,
    maxLines = 2,
    selected,
    disabled,
    sublabel,
    truncationType = "middle",
    variant = "default",
}: DropdownLabelProps): JSX.Element => {
    const fontSize =
        variant === "small"
            ? Font.Spec["body-size-md"]
            : Font.Spec["body-size-baseline"];
    const fontFamily = Font.Spec["font-family"];
    const { ref, width } = useResizeDetector();

    const primaryTextRef = useRef<HTMLDivElement>(null);
    const secondaryTextRef = useRef<HTMLDivElement>(null);

    useApplyStyle(primaryTextRef, {
        [styles.tokens.primaryText.maxLines]: String(maxLines),
    });

    useApplyStyle(secondaryTextRef, {
        [styles.tokens.secondaryText.maxLines]: String(maxLines),
    });

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const hasExceededContainer = useCallback(
        (displayText: string) => {
            if (displayType !== "inline" || !width) {
                return false;
            }

            // best-effort attempt to check if multi-line text will overflow,
            // rendering an actual element in the DOM might be more accurate
            // but might not be performant for large lists
            const textWidth = StringHelper.getTextWidth(
                displayText,
                `${fontSize} '${fontFamily}'`
            );

            // compare against a single line width — if text overflows one line
            // in inline mode, switch to next-line layout with middle truncation.
            // an arbitrary offset accounts for word breaks reducing actual usage
            return textWidth > width - 50;
        },
        [width, displayType, fontSize, fontFamily, maxLines]
    );

    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const shouldTruncateTitle = useMemo(
        () => hasExceededContainer(label),
        [hasExceededContainer, label]
    );
    const shouldTruncateLabel = useMemo(
        () => sublabel && hasExceededContainer(sublabel),
        [hasExceededContainer, sublabel]
    );

    // there's less space than expected due to word breaks, so an
    // arbitary offset is applied
    const itemDisplayType =
        truncationType === "middle" &&
        (shouldTruncateTitle || shouldTruncateLabel)
            ? "next-line"
            : displayType;

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderMatchInBold = (displayText: string) => {
        if (!searchTerm) {
            return displayText;
        }

        const match = searchTerm.toLowerCase().trim();
        const startIndex = displayText.toLowerCase().indexOf(match);
        const endIndex = startIndex + searchTerm.length;

        if (startIndex === -1) {
            return displayText;
        }

        return (
            <>
                {label.slice(0, startIndex)}
                <span className={styles.matchedText}>
                    {label.slice(startIndex, endIndex)}
                </span>
                {label.slice(endIndex)}
            </>
        );
    };

    const renderTruncatedText = (displayText: string): JSX.Element => {
        return (
            <>
                <div
                    className={clsx(
                        styles.baseTruncateStyle,
                        styles.truncateFirstLine,
                        maxLines === 1 && styles.truncateLineSingle
                    )}
                    aria-hidden
                >
                    {renderMatchInBold(displayText)}
                </div>
                <div
                    className={clsx(
                        styles.baseTruncateStyle,
                        styles.truncateSecondLine,
                        maxLines === 1 && styles.truncateLineSingle
                    )}
                    aria-hidden
                >
                    {renderMatchInBold(displayText)}
                </div>
            </>
        );
    };

    return (
        <div
            ref={ref}
            className={clsx(
                styles.label,
                variant === "small" && styles.labelVariantSmall,
                itemDisplayType === "next-line" && styles.labelNextLine
            )}
        >
            <div
                ref={primaryTextRef}
                aria-label={label}
                className={clsx(
                    styles.primaryText,
                    bold && styles.primaryTextBold,
                    disabled && styles.primaryTextDisabled,
                    !disabled && selected && styles.primaryTextSelected,
                    itemDisplayType !== "next-line" &&
                        truncationType !== "end" &&
                        styles.textLabelInline,
                    truncationType === "end" && styles.primaryTextTruncateEnd
                )}
            >
                {truncationType === "middle" && shouldTruncateTitle
                    ? renderTruncatedText(label)
                    : renderMatchInBold(label)}
            </div>
            {sublabel && (
                <div
                    ref={secondaryTextRef}
                    aria-label={sublabel}
                    className={clsx(
                        styles.secondaryText,
                        truncationType === "end" &&
                            styles.secondaryTextTruncateEnd,
                        displayType === "next-line"
                            ? styles.secondaryTextNextLine
                            : styles.secondaryTextInline,
                        itemDisplayType !== "next-line" &&
                            truncationType !== "end" &&
                            styles.secondaryTextLabelInline
                    )}
                >
                    {truncationType === "middle" && shouldTruncateLabel
                        ? renderTruncatedText(sublabel)
                        : sublabel}
                </div>
            )}
        </div>
    );
};
