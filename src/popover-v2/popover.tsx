import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "styled-components";
import { Breakpoint } from "../theme";
import { Typography } from "../typography";
import { PopoverCard, PopoverContainer } from "./popover.styles";
import { PopoverV2Props } from "./types";
import { ModalV2 } from "../modal-v2";

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
    const theme = useContext(ThemeContext);
    const mobileBreakpoint = Breakpoint["sm-max"]({ theme });
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
                    data-testid={testId}
                    {...otherProps}
                    id={id}
                    role="dialog"
                    aria-label={ariaLabel ?? "More information"}
                >
                    <PopoverCard $maxHeight={maxHeight} $overflow={overflow}>
                        {renderContent()}
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
                        <ModalV2.Content>{renderContent()}</ModalV2.Content>
                        <ModalV2.CloseButton />
                    </ModalV2.Card>
                </ModalV2>
            )}
        </>
    );
};
