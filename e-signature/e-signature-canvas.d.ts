import { Ref } from "react";
interface ESignatureCanvasProps {
    baseImageDataURL?: string | undefined;
    forwardedRef?: Ref<ESignatureCanvasRef> | undefined;
}
export interface ESignatureCanvasRef {
    clear: VoidFunction;
    export: () => string;
}
export declare const ESignatureCanvas: (props: ESignatureCanvasProps & import("react").RefAttributes<ESignatureCanvasRef>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export {};
