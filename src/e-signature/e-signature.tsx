import { EraserIcon, PencilIcon } from "@lifesg/react-icons";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";
import { Button } from "../button";
import { ButtonWithIcon } from "../button-with-icon";
import { ProgressBar } from "../shared/progress-bar";
import { Breakpoint } from "../theme";
import { Typography } from "../typography";
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
        disabled,
        ...otherProps
    } = props;
    const [showModal, setShowModal] = useState(false);
    const eSignatureCanvasRef = useRef<ESignatureCanvasRef>(null);
    const [dataURL, setDataURL] = useState<string | null | undefined>(value);
    const theme = useTheme();
    const mobileBreakpoint = Breakpoint["sm-max"]({ theme });
    const isMobile = useMediaQuery({ maxWidth: mobileBreakpoint });
    const isMobileLandscape = useMediaQuery({
        maxHeight: mobileBreakpoint,
        orientation: "landscape",
    });

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleClearDrawing = () => {
        eSignatureCanvasRef.current?.clear();
    };

    const handleClickSave = () => {
        if (eSignatureCanvasRef.current) {
            const dataURL = eSignatureCanvasRef.current.export();
            setDataURL(dataURL);
            setShowModal(false);
            onChange?.(dataURL);
        }
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
                    aria-label="Add signature"
                    id={id}
                    onClick={() => setShowModal(true)}
                    disabled={disabled}
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
                    disabled={disabled}
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
                    <Typography.BodyMD>{loadingLabel}</Typography.BodyMD>
                )}
                <ProgressBar
                    progress={loadingProgress ?? 0}
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
                                as={
                                    isMobileLandscape
                                        ? ButtonWithIcon.Small
                                        : ButtonWithIcon.Default
                                }
                                type="button"
                                styleType={
                                    isMobile && !isMobileLandscape
                                        ? "light"
                                        : "link"
                                }
                                icon={<EraserIcon />}
                                onClick={handleClearDrawing}
                            >
                                Clear
                            </ModalActionButton>
                            <ModalActionButton
                                as={
                                    isMobileLandscape
                                        ? Button.Small
                                        : Button.Default
                                }
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
        return <Instructions>{description}</Instructions>;
    };

    return (
        <div {...otherProps}>
            <SignatureArea $disabled={disabled}>
                {typeof loadingProgress === "number"
                    ? renderLoadingIndicator()
                    : renderSignatureArea()}
            </SignatureArea>
            {renderModal()}
            {renderDescription()}
        </div>
    );
};
