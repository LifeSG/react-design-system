import { Ref } from "react";
interface ESignatureCanvasProps {
    baseImageDataURL?: string | null | undefined;
    forwardedRef?: Ref<ESignatureCanvasRef> | undefined;
}
export interface ESignatureCanvasRef {
    clear: VoidFunction;
    export: () => string | null;
}
export declare const ESignatureCanvas: (props: ESignatureCanvasProps & import("react").RefAttributes<ESignatureCanvasRef>) => import("react").ReactElement | null;
export {};
