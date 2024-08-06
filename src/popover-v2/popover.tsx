import { useMediaQuery } from "react-responsive";
import { Modal } from "../modal/modal";
import { MediaWidths } from "../spec/media-spec";
import { V2_Text } from "../v2_text/text";
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
            <V2_Text.BodySmall>{children}</V2_Text.BodySmall>
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
