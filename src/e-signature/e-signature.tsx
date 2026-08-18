import { EraserIcon, PencilIcon } from "@lifesg/react-icons";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

import { Button } from "../button";
import { DashedBorder } from "../dashed-border";
import { ModalV2 } from "../modal-v2";
import { ProgressBar } from "../shared/progress-bar";
import {
    Border,
    Breakpoint,
    Colour,
    Radius,
    useMaxWidthMediaQuery,
    useMediaQuery,
    useResolvedBreakpointToken,
} from "../theme";
import { Typography } from "../typography";
import * as styles from "./e-signature.styles";
import type { ESignatureCanvasRef } from "./e-signature-canvas";
import type { EsignatureProps } from "./types";

// lazy load to fix next.js SSR errors
const ESignatureCanvas = lazy(async () => ({
    default: (await import("./e-signature-canvas")).ESignatureCanvas,
}));

// @catalog
/**
 * A field that lets users draw and save a signature.
 *
 * Use in forms that require a handwritten signature.
 * @keywords field, form, input, sign, signature
 */
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
    const isMobile = useMaxWidthMediaQuery("sm");
    const mobileBreakpoint = useResolvedBreakpointToken(Breakpoint["sm-max"]);
    const isMobileLandscape = useMediaQuery({
        clauses: [
            {
                feature: "orientation",
                value: "landscape",
            },
            {
                feature: "max-height",
                value: mobileBreakpoint,
            },
        ],
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
                <Button
                    className={styles.addSignatureButton}
                    type="button"
                    styleType="secondary"
                    aria-label="Add signature"
                    id={id}
                    onClick={() => setShowModal(true)}
                    disabled={disabled}
                >
                    Add signature
                </Button>
            );
        }

        return (
            <>
                <img
                    className={styles.signaturePreviewImage}
                    src={dataURL}
                    alt="Signature preview"
                />
                <Button
                    className={styles.editSignatureButton}
                    styleType="light"
                    onClick={() => setShowModal(true)}
                    id={id}
                    icon={<PencilIcon />}
                    aria-label="Edit signature"
                    disabled={disabled}
                />
            </>
        );
    };

    const renderLoadingIndicator = () => {
        return (
            <div className={styles.progressBox}>
                {loadingLabel && (
                    <Typography.BodyMD>{loadingLabel}</Typography.BodyMD>
                )}
                <ProgressBar
                    progress={loadingProgress ?? 0}
                    data-testid={`${id || "e-signature"}-progress-bar`}
                />
            </div>
        );
    };

    const renderModal = () => {
        return (
            <ModalV2
                data-testid="signature-modal"
                show={showModal}
                onClose={() => setShowModal(false)}
            >
                <ModalV2.Card
                    className={styles.modalCard}
                    data-mobile-landscape={isMobileLandscape}
                >
                    <ModalV2.Header
                        title="Signature"
                        closeButtonPosition="right"
                        className={styles.modalHeader}
                        data-mobile-landscape={isMobileLandscape}
                    />
                    <ModalV2.Content
                        className={styles.modalContent}
                        data-mobile-landscape={isMobileLandscape}
                    >
                        <div
                            className={styles.eSignatureContainer}
                            data-mobile-landscape={isMobileLandscape}
                        >
                            <div
                                className={styles.eSignatureDrawable}
                                data-mobile-landscape={isMobileLandscape}
                            >
                                <div
                                    className={styles.signatureLine}
                                    data-mobile-landscape={isMobileLandscape}
                                />
                                <Suspense fallback={null}>
                                    {showModal && (
                                        <ESignatureCanvas
                                            ref={eSignatureCanvasRef}
                                            baseImageDataURL={dataURL}
                                        />
                                    )}
                                </Suspense>
                            </div>
                        </div>
                    </ModalV2.Content>
                    <ModalV2.Footer
                        className={styles.modalButtons}
                        data-mobile-landscape={isMobileLandscape}
                        primaryButton={
                            <Button
                                className={styles.modalActionButton}
                                data-mobile-landscape={isMobileLandscape}
                                sizeType={
                                    isMobileLandscape ? "small" : "default"
                                }
                                type="button"
                                onClick={handleClickSave}
                            >
                                Save
                            </Button>
                        }
                        secondaryButton={
                            <Button
                                className={styles.modalActionButton}
                                data-mobile-landscape={isMobileLandscape}
                                sizeType={
                                    isMobileLandscape ? "small" : "default"
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
                            </Button>
                        }
                    />
                </ModalV2.Card>
            </ModalV2>
        );
    };

    const renderDescription = () => {
        if (!description) return null;
        return (
            <Typography.BodySM className={styles.instructions}>
                {description}
            </Typography.BodySM>
        );
    };

    return (
        <div {...otherProps}>
            <DashedBorder
                className={styles.signatureArea}
                thickness={Border["width-040"]}
                radius={Radius["sm"]}
                colour={disabled ? Colour["border-disabled"] : Colour["border"]}
                backgroundColor={
                    disabled ? Colour["bg-disabled"] : Colour["bg"]
                }
            >
                {typeof loadingProgress === "number"
                    ? renderLoadingIndicator()
                    : renderSignatureArea()}
            </DashedBorder>
            {renderModal()}
            {renderDescription()}
        </div>
    );
};
