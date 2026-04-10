import clsx from "clsx";
import { useMemo, useRef } from "react";

import { Card } from "../card";
import { Markup } from "../markup";
import { ModalV2 } from "../modal-v2";
import {
    Breakpoint,
    useApplyStyle,
    useDesignToken,
    useSafeMaxWidthMediaQuery,
} from "../theme";
import { Typography } from "../typography";
import * as styles from "./popover.styles";
import type { PopoverV2Props } from "./types";

export const PopoverV2 = ({
    children,
    visible = false,
    onMobileClose,
    maxHeight,
    overflow,
    ariaLabel = "More information",
    id,
    className,
    "data-testid": _testId,
    ...otherProps
}: PopoverV2Props): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const testId = _testId || "popover";
    const mobileBreakpoint = useDesignToken(Breakpoint["sm-max"]);
    const isMobile = useSafeMaxWidthMediaQuery(mobileBreakpoint);
    const popoverContainerRef = useRef<HTMLDivElement>(null);
    const popoverCardStyle = useMemo(
        () => ({
            [styles.tokens.popoverCard.maxHeight]:
                maxHeight === undefined ? null : `${maxHeight}px`,
            [styles.tokens.popoverCard.overflowY]: overflow ?? null,
        }),
        [maxHeight, overflow]
    );
    useApplyStyle(popoverContainerRef, popoverCardStyle);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleMobileClose = () => {
        if (onMobileClose) {
            onMobileClose();
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderContent = () =>
        typeof children === "string" ? (
            <Typography.BodyMD>{children}</Typography.BodyMD>
        ) : (
            children
        );

    return (
        <>
            {visible && !isMobile && (
                <div
                    ref={popoverContainerRef}
                    tabIndex={0}
                    data-testid={testId}
                    {...otherProps}
                    className={clsx(styles.popoverContainer, className)}
                    id={id}
                    role="dialog"
                    aria-label={ariaLabel}
                >
                    <Card
                        className={clsx(
                            styles.popoverCard,
                            maxHeight !== undefined &&
                                styles.popoverCardWithMaxHeight,
                            overflow && styles.popoverCardWithOverflow
                        )}
                    >
                        <Markup baseTextSize="body-md">
                            {renderContent()}
                        </Markup>
                    </Card>
                </div>
            )}
            {isMobile && (
                <ModalV2
                    show={visible}
                    onOverlayClick={handleMobileClose}
                    onClose={handleMobileClose}
                    id={id}
                    role="dialog"
                    aria-label={ariaLabel}
                >
                    <ModalV2.Card>
                        <ModalV2.Content>
                            <Markup>{renderContent()}</Markup>
                        </ModalV2.Content>
                        <ModalV2.CloseButton />
                    </ModalV2.Card>
                </ModalV2>
            )}
        </>
    );
};
