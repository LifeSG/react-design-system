import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "styled-components";
import { Modal } from "../modal/modal";
import { Breakpoint } from "../theme";
import { Typography } from "../typography";
import {
    ContentWrapper,
    MobileModalBox,
    PopoverCard,
    PopoverContainer,
} from "./popover.styles";
import { PopoverV2Props } from "./types";

export const PopoverV2 = ({
    children,
    visible,
    onMobileClose,
    maxHeight,
    overflow,
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
                <PopoverContainer data-testid={testId} {...otherProps}>
                    <PopoverCard $maxHeight={maxHeight} $overflow={overflow}>
                        {renderContent()}
                    </PopoverCard>
                </PopoverContainer>
            )}
            {isMobile && (
                <Modal
                    show={visible ?? false}
                    onOverlayClick={handleMobileClose}
                >
                    <MobileModalBox onClose={handleMobileClose}>
                        <ContentWrapper>{renderContent()}</ContentWrapper>
                    </MobileModalBox>
                </Modal>
            )}
        </>
    );
};
