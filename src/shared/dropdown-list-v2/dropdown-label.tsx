import { useCallback, useMemo } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useTheme } from "styled-components";
import { v2_TextStyle } from "../../v2_text";
import { BaseTheme } from "../../theme";
import { StringHelper } from "../../util/string-helper";
import { DropdownVariantType, LabelDisplayType } from "../dropdown-list/types";
import {
    Label,
    PrimaryText,
    SecondaryText,
    TruncateFirstLine,
    TruncateSecondLine,
} from "./dropdown-label.styles";

interface DropdownLabelProps {
    displayType?: LabelDisplayType | undefined;
    label: string;
    maxLines?: number | undefined;
    selected?: boolean | undefined;
    sublabel: string;
    truncationType?: "middle" | "end" | undefined;
    variant?: DropdownVariantType | undefined;
}

export const DropdownLabel = ({
    displayType = "inline",
    label,
    maxLines = 2,
    selected,
    sublabel,
    truncationType = "middle",
    variant,
}: DropdownLabelProps): JSX.Element => {
    const theme = useTheme() || BaseTheme;
    const fontSize = v2_TextStyle.Body.fontSize({ theme });
    const fontFamily = v2_TextStyle.Body.fontFamily({ theme });
    const { ref, width } = useResizeDetector();

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const hasExceededContainer = useCallback(
        (displayText: string) => {
            if (displayType !== "inline") {
                return false;
            }

            // best-effort attempt to check if multi-line text will overflow,
            // rendering an actual element in the DOM might be more accurate
            // but might not be performant for large lists
            const textWidth = StringHelper.getTextWidth(
                displayText,
                `${fontSize}rem '${fontFamily}'`
            );

            // there's less space than expected due to word breaks, so an
            // arbitary offset is applied
            return textWidth > width * maxLines - 50;
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

    // css cannot truncate inline elements so force the display to render
    // them separately
    const itemDisplayType =
        shouldTruncateTitle || shouldTruncateLabel ? "next-line" : displayType;

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderTruncatedText = (displayText: string): JSX.Element => {
        return (
            <>
                <TruncateFirstLine $maxLines={maxLines} aria-hidden>
                    {displayText}
                </TruncateFirstLine>
                <TruncateSecondLine $maxLines={maxLines} aria-hidden>
                    {displayText}
                </TruncateSecondLine>
            </>
        );
    };

    return (
        <Label ref={ref} $labelDisplayType={itemDisplayType}>
            <PrimaryText
                aria-label={label}
                $maxLines={maxLines}
                $selected={selected}
                $truncateType={truncationType}
                $variant={variant}
            >
                {truncationType === "middle" && shouldTruncateTitle
                    ? renderTruncatedText(label)
                    : label}
            </PrimaryText>
            {sublabel && (
                <SecondaryText
                    aria-label={sublabel}
                    $maxLines={maxLines}
                    $truncateType={truncationType}
                    $labelDisplayType={displayType}
                >
                    {truncationType === "middle" && shouldTruncateLabel
                        ? renderTruncatedText(sublabel)
                        : sublabel}
                </SecondaryText>
            )}
        </Label>
    );
};
