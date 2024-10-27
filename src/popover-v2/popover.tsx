import { useMediaQuery } from "react-responsive";
import { Modal } from "../modal/modal";
import { MediaWidths } from "../spec/media-spec";
import {
    ContentWrapper,
    MobileModalBox,
    PopoverCard,
    PopoverContainer,
} from "./popover.styles";
import { PopoverV2Props } from "./types";
import { Typography } from "../typography";

export const PopoverV2 = ({
    children,
    visible,
    onMobileClose,
    ...otherProps
}: PopoverV2Props): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const testId = otherProps["data-testid"] || "popover";
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });

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
                    <PopoverCard>{renderContent()}</PopoverCard>
                </PopoverContainer>
            )}
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
