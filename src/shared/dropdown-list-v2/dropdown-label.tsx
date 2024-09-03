import { useCallback, useMemo } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useTheme } from "styled-components";
import { TextStyle } from "../../text";
import { BaseTheme } from "../../theme";
import { StringHelper } from "../../util/string-helper";
import { DropdownVariantType, LabelDisplayType } from "../dropdown-list/types";
import {
    Label,
    MatchedText,
    PrimaryText,
    SecondaryText,
    TruncateFirstLine,
    TruncateSecondLine,
} from "./dropdown-label.styles";

interface DropdownLabelProps {
    bold?: boolean | undefined;
    displayType?: LabelDisplayType | undefined;
    label: string;
    maxLines?: number | undefined;
    searchTerm?: string | undefined;
    selected?: boolean | undefined;
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
    sublabel,
    truncationType = "middle",
    variant,
}: DropdownLabelProps): JSX.Element => {
    const theme = useTheme() || BaseTheme;
    const fontSize = TextStyle.Body.fontSize({ theme });
    const fontFamily = TextStyle.Body.fontFamily({ theme });
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
                <MatchedText $variant={variant}>
                    {label.slice(startIndex, endIndex)}
                </MatchedText>
                {label.slice(endIndex)}
            </>
        );
    };

    const renderTruncatedText = (displayText: string): JSX.Element => {
        return (
            <>
                <TruncateFirstLine $maxLines={maxLines} aria-hidden>
                    {renderMatchInBold(displayText)}
                </TruncateFirstLine>
                <TruncateSecondLine $maxLines={maxLines} aria-hidden>
                    {renderMatchInBold(displayText)}
                </TruncateSecondLine>
            </>
        );
    };

    return (
        <Label ref={ref} $labelDisplayType={itemDisplayType}>
            <PrimaryText
                aria-label={label}
                $bold={bold}
                $maxLines={maxLines}
                $selected={selected}
                $truncateType={truncationType}
                $variant={variant}
            >
                {truncationType === "middle" && shouldTruncateTitle
                    ? renderTruncatedText(label)
                    : renderMatchInBold(label)}
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
