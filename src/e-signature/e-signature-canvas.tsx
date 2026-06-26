import {
    Canvas as FabricCanvas,
    FabricImage,
    filters,
    PencilBrush,
} from "fabric";
import type { Ref } from "react";
import {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";

import { Colour } from "../theme";
import { useDesignTokenOverride } from "../theme/utils";
import * as styles from "./e-signature.styles";

interface ESignatureCanvasProps {
    baseImageDataURL?: string | null | undefined;
    forwardedRef?: Ref<ESignatureCanvasRef> | undefined;
}

export interface ESignatureCanvasRef {
    clear: VoidFunction;
    export: () => string | null;
}

const Component = (
    props: ESignatureCanvasProps,
    ref: Ref<ESignatureCanvasRef>
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const { baseImageDataURL } = props;
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fabricCanvas = useRef<FabricCanvas>();
    const pencilBrush = useRef<PencilBrush>();
    const resolvedColor = useDesignTokenOverride({ token: Colour["text"] });

    // =============================================================================
    // HOOKS
    // =============================================================================
    useImperativeHandle(ref, () => ({
        clear: () => fabricCanvas.current?.clear(),
        export: () => exportAsImage(),
    }));

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const exportAsImage = () => {
        if (!fabricCanvas.current) return null;
        if (!fabricCanvas.current.getObjects().length) return null;
        const dataURL = fabricCanvas.current.toDataURL({
            multiplier: 1,
            format: "png",
            quality: 1,
            enableRetinaScaling: true,
        });
        return dataURL;
    };

    const handleResize = useCallback(async () => {
        // slight delay for fabricjs to update on orientation change
        await new Promise((resolve) => setTimeout(resolve));
        if (containerRef.current && canvasRef.current && fabricCanvas.current) {
            const canvasWidth = containerRef.current.clientWidth;
            const canvasHeight = containerRef.current.clientHeight;
            canvasRef.current.width = canvasWidth;
            canvasRef.current.height = canvasHeight;
            fabricCanvas.current.setDimensions({
                width: canvasWidth,
                height: canvasHeight,
            });

            fabricCanvas.current.forEachObject((obj) => {
                if (fabricCanvas.current) {
                    fabricCanvas.current.centerObject(obj);
                }
            });
        }
    }, []);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    // initialise fabric and brushes
    useEffect(() => {
        if (containerRef.current && canvasRef.current) {
            fabricCanvas.current = new FabricCanvas("eSignatureCanvas");
            fabricCanvas.current.selection = false;
            fabricCanvas.current.isDrawingMode = true;

            pencilBrush.current = new PencilBrush(fabricCanvas.current);
            pencilBrush.current.color = resolvedColor || "#000000";
            pencilBrush.current.width = 3;

            fabricCanvas.current.freeDrawingBrush = pencilBrush.current;

            return () => {
                fabricCanvas.current?.dispose();
            };
        }
    }, []);

    useEffect(() => {
        if (pencilBrush.current && resolvedColor) {
            pencilBrush.current.color = resolvedColor;
        }
    }, [resolvedColor]);

    // resize
    useEffect(() => {
        if (window) {
            window.addEventListener("resize", handleResize);
            screen.orientation?.addEventListener("change", handleResize);
            handleResize();
            return () => {
                window.removeEventListener("resize", handleResize);
                screen.orientation?.removeEventListener("change", handleResize);
            };
        }
    }, [handleResize]);

    // update base image
    useEffect(() => {
        const updateImage = async () => {
            if (baseImageDataURL) {
                const img = await FabricImage.fromURL(baseImageDataURL);
                if (fabricCanvas.current) {
                    fabricCanvas.current.clear();
                    img.selectable = false;
                    img.hoverCursor = "default";

                    if (resolvedColor) {
                        img.filters = [
                            new filters.BlendColor({
                                color: resolvedColor,
                                mode: "tint",
                                alpha: 1,
                            }),
                        ];
                        img.applyFilters();
                    }

                    if (fabricCanvas.current.width && img.width) {
                        img.scale(fabricCanvas.current.width / img.width);
                    }
                    fabricCanvas.current.add(img);
                    fabricCanvas.current.centerObject(img);
                }
            }
        };

        updateImage();
    }, [baseImageDataURL, resolvedColor]);

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <div className={styles.signatureCanvasContainer} ref={containerRef}>
            <canvas
                className={styles.signatureCanvas}
                id="eSignatureCanvas"
                ref={canvasRef}
            />
        </div>
    );
};

export const ESignatureCanvas = forwardRef<
    ESignatureCanvasRef,
    ESignatureCanvasProps
>(Component);
