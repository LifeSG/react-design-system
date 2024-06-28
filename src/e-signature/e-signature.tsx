import { EraserIcon, PencilIcon } from "@lifesg/react-icons";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ButtonWithIcon } from "../button-with-icon";
import { MediaWidths } from "../media";
import { ProgressBar } from "../shared/progress-bar";
import { Text } from "../text";
import { ESignatureCanvasRef } from "./e-signature-canvas";
import {
    AddSignatureButton,
    ESignatureContainer,
    ESignatureDrawable,
    EditSignatureButton,
    GrowContainer,
    Instructions,
    ModalActionButton,
    ModalBox,
    ModalButtons,
    ModalTitle,
    ProgressBox,
    ScrollableModal,
    SignatureArea,
    SignatureLine,
    SignaturePreviewImage,
} from "./e-signature.styles";
import { EsignatureProps } from "./types";

// lazy load to fix next.js SSR errors
const ESignatureCanvas = lazy(async () => ({
    default: (await import("./e-signature-canvas")).ESignatureCanvas,
}));

export const ESignature = (props: EsignatureProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const {
        description,
        id,
        loadingProgress,
        loadingLabel = "Uploading...",
        onChange,
        value,
        ...otherProps
    } = props;
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
                    id={id}
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
                    id={id}
                    aria-label="Edit signature"
                >
                    <PencilIcon />
                </EditSignatureButton>
            </>
        );
    };

    const renderLoadingIndicator = () => {
        return (
            <ProgressBox>
                {loadingLabel && (
                    <Text.BodySmall>{loadingLabel}</Text.BodySmall>
                )}
                <ProgressBar
                    progress={loadingProgress}
                    data-testid={`${id || "e-signature"}-progress-bar`}
                />
            </ProgressBox>
        );
    };

    const renderModal = () => {
        return (
            <ScrollableModal data-testid="signature-modal" show={showModal}>
                <GrowContainer>
                    <ModalBox onClose={() => setShowModal(false)}>
                        <ModalTitle>Signature</ModalTitle>
                        <ESignatureContainer>
                            <ESignatureDrawable>
                                <SignatureLine />
                                <Suspense fallback={null}>
                                    {showModal && (
                                        <ESignatureCanvas
                                            ref={eSignatureCanvasRef}
                                            baseImageDataURL={dataURL}
                                        />
                                    )}
                                </Suspense>
                            </ESignatureDrawable>
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
            <SignatureArea>
                {isNaN(loadingProgress)
                    ? renderSignatureArea()
                    : renderLoadingIndicator()}
            </SignatureArea>
            {renderModal()}
            {renderDescription()}
        </div>
    );
};
