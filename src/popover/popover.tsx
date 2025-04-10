import debounce from "lodash/debounce";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Card } from "src/card";
import { Modal } from "../modal/modal";
import { MediaWidths } from "../spec/media-spec";
import { Text } from "../text/text";
import {
    BubbleWrap,
    ContentWrapper,
    MobileModalBox,
    OffsetPosition,
} from "./popover.styles";
import { PopoverProps } from "./types";

/**
 * @deprecated Use `PopoverV2` for improved positioning behaviour. This component will be removed in DS v3.
 */
export const Popover = ({
    children,
    visible,
    onMobileClose,
    ...otherProps
}: PopoverProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const testId = otherProps["data-testid"] || "popover";
    const [offset, _setOffset] = useState<OffsetPosition>("none");
    const bubbleRef = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });

    /**
     * Have to use refs to allow the state values to be accessible
     * by the event listener callback functions
     * Reference:
     * https://stackoverflow.com/questions/55265255/react-usestate-hook-event-handler-using-initial-state
     */
    const offsetStateRef = useRef<OffsetPosition>(offset);

    // =============================================================================
    // REF FUNCTIONS
    // =============================================================================
    const setOffset = (value: OffsetPosition) => {
        offsetStateRef.current = value;
        _setOffset(value);
    };

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        updateOffsetPosition();
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
        updateOffsetPosition();
    };

    const handleMobileClose = () => {
        if (onMobileClose) {
            onMobileClose();
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const updateOffsetPosition = () => {
        const newOffsetPosition = getOffsetPosition();

        if (newOffsetPosition) {
            setOffset(newOffsetPosition);
        }
    };

    const getOffsetPosition = (): OffsetPosition | undefined => {
        if (bubbleRef.current) {
            const bubbleRect = bubbleRef.current?.getBoundingClientRect();
            const paddingBuffer = 24; // buffer for all sides
            const hasExceededTop = bubbleRect.y < paddingBuffer;
            const rightLimit = window.innerWidth - paddingBuffer;

            if (bubbleRect.x < paddingBuffer) {
                // Exceed left
                return hasExceededTop ? "top-left" : "left";
            } else if (bubbleRect.x + bubbleRect.width > rightLimit) {
                // Exceed right
                return hasExceededTop ? "top-right" : "right";
            }

            /**
             * Handle cases where there is more space and we can
             * shift bubble back to center
             */
            if (
                (offsetStateRef.current === "top-left" ||
                    offsetStateRef.current === "left") &&
                bubbleRect.x - bubbleRect.width / 2 > paddingBuffer
            ) {
                return hasExceededTop ? "top-center" : "none";
            }

            if (
                (offsetStateRef.current === "top-right" ||
                    offsetStateRef.current === "right") &&
                bubbleRect.x + bubbleRect.width * 2 < rightLimit
            ) {
                return hasExceededTop ? "top-center" : "none";
            }

            if (hasExceededTop) {
                return "top-center";
            }

            // All ok, do nothing
            return undefined;
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderContent = () =>
        typeof children === "string" ? (
            <Text.BodySmall>{children}</Text.BodySmall>
        ) : (
            children
        );

    return (
        <>
            <BubbleWrap
                ref={bubbleRef}
                data-testid={testId}
                $visible={visible}
                $offset={offset}
                {...otherProps}
            >
                <Card>{renderContent()}</Card>
            </BubbleWrap>
            {isMobile && (
                <Modal show={visible} onOverlayClick={handleMobileClose}>
                    <MobileModalBox onClose={handleMobileClose}>
                        <ContentWrapper>{renderContent()}</ContentWrapper>
                    </MobileModalBox>
                </Modal>
            )}
        </>
    );
};
