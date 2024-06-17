import { useCallback, useMemo } from "react";
import { StringHelper } from "../../util/string-helper";
import {
    Label,
    PrimaryText,
    SecondaryText,
    TruncateFirstLine,
    TruncateSecondLine,
} from "./dropdown-label.styles";
import { DropdownVariantType, LabelDisplayType } from "../dropdown-list/types";

interface DropdownLabelProps {
    containerRef: React.MutableRefObject<HTMLDivElement>;
    label: string;
    sublabel: string;
    displayType?: LabelDisplayType | undefined;
    maxLines?: number | undefined;
    truncationType?: "middle" | "end" | undefined;
    variant?: DropdownVariantType | undefined;
}

export const DropdownLabel = ({
    containerRef: containerRef,
    label,
    sublabel,
    displayType = "inline",
    maxLines = 2,
    truncationType = "middle",
    variant,
}: DropdownLabelProps): JSX.Element => {
    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const hasExceededContainer = useCallback(
        (displayText: string) => {
            if (displayType !== "inline") {
                return false;
            }

            let widthOfElement = 0;
            if (containerRef && containerRef.current) {
                widthOfElement =
                    containerRef.current.getBoundingClientRect().width - 60;
            }

            const textWidth = StringHelper.getTextWidth(
                displayText,
                "1.125rem 'Open Sans'"
            );
            return textWidth > widthOfElement * maxLines;
        },
        [displayType, maxLines, containerRef]
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
        <Label $labelDisplayType={itemDisplayType}>
            <PrimaryText
                aria-label={label}
                $maxLines={maxLines}
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
