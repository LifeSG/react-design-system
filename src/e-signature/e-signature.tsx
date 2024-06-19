import { EraserIcon, PencilIcon } from "@lifesg/react-icons";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ButtonWithIcon } from "../button-with-icon";
import { MediaWidths } from "../media";
import { ESignatureCanvas, ESignatureCanvasRef } from "./e-signature-canvas";
import {
    AddSignatureButton,
    ESignatureContainer,
    EditSignatureButton,
    GrowContainer,
    Instructions,
    ModalActionButton,
    ModalBox,
    ModalButtons,
    ModalTitle,
    ScrollableModal,
    SignatureArea,
    SignatureLine,
    SignaturePreviewImage,
} from "./e-signature.styles";
import { EsignatureProps } from "./types";

export const ESignature = (props: EsignatureProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const { description, onChange, value, ...otherProps } = props;
    const [showModal, setShowModal] = useState(false);
    const eSignatureCanvasRef = useRef<ESignatureCanvasRef>(null);
    const [dataURL, setDataURL] = useState<string>(value);
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleClearDrawing = () => {
        eSignatureCanvasRef.current.clear();
    };

    const handleClickSave = () => {
        const dataURL = eSignatureCanvasRef.current.export();
        setDataURL(dataURL);
        setShowModal(false);
        onChange?.(dataURL);
    };

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setDataURL(value);
    }, [value]);

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderSignatureArea = () => {
        if (!dataURL) {
            return (
                <AddSignatureButton
                    type="button"
                    styleType="secondary"
                    onClick={() => setShowModal(true)}
                >
                    Add signature
                </AddSignatureButton>
            );
        }

        return (
            <>
                <SignaturePreviewImage src={dataURL} alt="Signature preview" />
                <EditSignatureButton
                    styleType="light"
                    onClick={() => setShowModal(true)}
                    aria-label="Edit signature"
                >
                    <PencilIcon />
                </EditSignatureButton>
            </>
        );
    };

    const renderModal = () => {
        return (
            <ScrollableModal data-testid="signature-modal" show={showModal}>
                <GrowContainer>
                    <ModalBox onClose={() => setShowModal(false)}>
                        <ModalTitle>Signature</ModalTitle>
                        <ESignatureContainer>
                            <SignatureLine />
                            {showModal && (
                                <ESignatureCanvas
                                    ref={eSignatureCanvasRef}
                                    baseImageDataURL={dataURL}
                                />
                            )}
                        </ESignatureContainer>
                        <ModalButtons>
                            <ModalActionButton
                                as={ButtonWithIcon.Default}
                                type="button"
                                styleType={isMobile ? "light" : "link"}
                                icon={<EraserIcon />}
                                onClick={handleClearDrawing}
                            >
                                Clear
                            </ModalActionButton>
                            <ModalActionButton
                                type="button"
                                onClick={handleClickSave}
                            >
                                Save
                            </ModalActionButton>
                        </ModalButtons>
                    </ModalBox>
                </GrowContainer>
            </ScrollableModal>
        );
    };

    const renderDescription = () => {
        if (!description) return null;
        return (
            <Instructions weight="regular" as="p">
                {description}
            </Instructions>
        );
    };

    return (
        <div {...otherProps}>
            <SignatureArea>{renderSignatureArea()}</SignatureArea>
            {renderModal()}
            {renderDescription()}
        </div>
    );
};
