import { useMediaQuery } from "react-responsive";

import { Markup } from "../markup";
import { ModalV2 } from "../modal-v2";
import { Breakpoint, useDesignToken } from "../theme";
import { Typography } from "../typography";
import { PopoverCard, PopoverContainer } from "./popover.styles";
import type { PopoverV2Props } from "./types";

export const PopoverV2 = ({
    children,
    visible,
    onMobileClose,
    maxHeight,
    overflow,
    ariaLabel,
    id,
    ...otherProps
}: PopoverV2Props): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const testId = otherProps["data-testid"] || "popover";
    const mobileBreakpoint = useDesignToken(Breakpoint["sm-max"]);
    const isMobile = useMediaQuery({ maxWidth: mobileBreakpoint });

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
            {visible && (
                <PopoverContainer
                    tabIndex={0}
                    data-testid={testId}
                    {...otherProps}
                    id={id}
                    role="dialog"
                    aria-label={ariaLabel ?? "More information"}
                >
                    <PopoverCard $maxHeight={maxHeight} $overflow={overflow}>
                        <Markup baseTextSize="body-md">
                            {renderContent()}
                        </Markup>
                    </PopoverCard>
                </PopoverContainer>
            )}
            {isMobile && (
                <ModalV2
                    show={visible ?? false}
                    onOverlayClick={handleMobileClose}
                    onClose={handleMobileClose}
                    id={id}
                    role="dialog"
                    aria-label={ariaLabel ?? "More information"}
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
