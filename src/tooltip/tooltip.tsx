import { useEffect, useRef, useState } from "react";
import debounce from "lodash/debounce";
import { V2_Text } from "../v2_text/text";
import { Arrow, Bubble, BubbleWrap } from "./tooltip.styles";
import { TooltipPosition, TooltipProps } from "./types";

/** @deprecated Use `PopoverV2` */
export const Tooltip = ({
    visible,
    position = "top",
    children,
    ...otherProps
}: TooltipProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const testId = otherProps["data-testid"] || "tooltip";
    const [currPosition, setPosition] = useState<TooltipPosition>(position);
    const bubbleRef = useRef<HTMLDivElement>(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        recalculatePosition();
        window.addEventListener("resize", debounce(handleViewportResize, 300));

        return () => {
            window.removeEventListener(
                "resize",
                debounce(handleViewportResize, 300)
            );
        };
    }, []);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleViewportResize = () => {
        recalculatePosition();
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const recalculatePosition = () => {
        if (bubbleRef.current) {
            const bubbleRect = bubbleRef.current.getBoundingClientRect();
            if (bubbleRect.x < 0) {
                switch (position) {
                    case "left":
                    case "top":
                    case "bottom":
                        setPosition("right");
                        break;
                    case "right":
                        setPosition("top");
                        break;
                    default:
                        break;
                }
            } else if (bubbleRect.x + bubbleRect.width > window.outerWidth) {
                switch (position) {
                    case "right":
                    case "top":
                    case "bottom":
                        setPosition("left");
                        break;
                    case "left":
                        setPosition("top");
                        break;
                    default:
                        break;
                }
            } else {
                // Back to original
                setPosition(position);
            }
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderContent = () =>
        typeof children === "string" ? (
            <V2_Text.BodySmall>{children}</V2_Text.BodySmall>
        ) : (
            children
        );

    return (
        <BubbleWrap
            position={currPosition}
            data-testid={testId}
            visible={visible}
            ref={bubbleRef}
            {...otherProps}
        >
            <Bubble>{renderContent()}</Bubble>
            <Arrow position={currPosition} />
        </BubbleWrap>
    );
};
