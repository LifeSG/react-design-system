import { EraserIcon, PencilIcon } from "@lifesg/react-icons";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

import { Button } from "../button";
import { DashedBorder } from "../dashed-border";
import { Modal } from "../modal";
import { ProgressBar } from "../shared/progress-bar";
import {
    Border,
    Breakpoint,
    Colour,
    DEFAULT_MOBILE_MAX_WIDTH_BREAKPOINT,
    Radius,
    useDesignTokenOverride,
    useMaxWidthMediaQuery,
    useMediaQuery,
    useResolvedBreakpointToken,
} from "../theme";
import { Typography } from "../typography";
import * as styles from "./e-signature.styles";
import { recolorImage } from "./e-signature.utils";
import type { ESignatureCanvasRef } from "./e-signature-canvas";
import type { EsignatureProps } from "./types";

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
    const [previewDataURL, setPreviewDataURL] = useState<string | null>();
    const isMobile = useMaxWidthMediaQuery("sm");
    const mobileBreakpoint = useResolvedBreakpointToken(
        Breakpoint["sm-max"],
        DEFAULT_MOBILE_MAX_WIDTH_BREAKPOINT
    );
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
    const resolvedColor = useDesignTokenOverride({ token: Colour["text"] });

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

    useEffect(() => {
        if (dataURL && resolvedColor) {
            recolorImage(dataURL, resolvedColor).then(setPreviewDataURL);
        } else {
            setPreviewDataURL(dataURL ?? null);
        }
    }, [dataURL, resolvedColor]);

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
                    src={previewDataURL ?? undefined}
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
            <Modal
                className={styles.scrollableModal}
                data-testid="signature-modal"
                show={showModal}
            >
                <div
                    className={styles.growContainer}
                    data-mobile-landscape={isMobileLandscape}
                >
                    <Modal.Box
                        className={styles.modalBox}
                        data-mobile-landscape={isMobileLandscape}
                        onClose={() => setShowModal(false)}
                    >
                        <h2
                            className={styles.modalTitle}
                            data-mobile-landscape={isMobileLandscape}
                        >
                            Signature
                        </h2>
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
                        <div
                            className={styles.modalButtons}
                            data-mobile-landscape={isMobileLandscape}
                        >
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
                        </div>
                    </Modal.Box>
                </div>
            </Modal>
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
