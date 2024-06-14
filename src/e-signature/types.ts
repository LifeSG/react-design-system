import { Ref } from "react";

export interface EsignatureProps {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    description?: string | undefined;
    /** image dataURL */
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
}

export interface ESignatureCanvasProps {
    baseImageDataURL?: string | undefined;
    forwardedRef?: Ref<ESignatureCanvasRef> | undefined;
}

export interface ESignatureCanvasRef {
    clear: VoidFunction;
    export: () => string;
}
