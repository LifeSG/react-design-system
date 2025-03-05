/// <reference types="react" />
interface SignatureAreaProps {
    $disabled: boolean;
}
export declare const SignatureArea: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SignatureAreaProps, never>;
export declare const AddSignatureButton: import("styled-components").StyledComponent<(props: import("../button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export declare const EditSignatureButton: import("styled-components").StyledComponent<(props: import("../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export declare const SignaturePreviewImage: import("styled-components").StyledComponent<"img", import("styled-components").DefaultTheme, {}, never>;
export declare const ProgressBox: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Instructions: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../typography").TypographyProps, never>;
export declare const ScrollableModal: import("styled-components").StyledComponent<(({ id, show, animationFrom, children, enableOverlayClick, rootComponentId, zIndex, onOverlayClick, dismissKeyboardOnShow, ...otherProps }: import("../modal").ModalProps) => JSX.Element) & {
    Box: ({ id, children, onClose, showCloseButton, ...otherProps }: import("../modal").ModalBoxProps) => import("react/jsx-runtime").JSX.Element;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const GrowContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ModalBox: import("styled-components").StyledComponent<({ id, children, onClose, showCloseButton, ...otherProps }: import("../modal").ModalBoxProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const ModalTitle: import("styled-components").StyledComponent<"h2", import("styled-components").DefaultTheme, {}, never>;
export declare const ESignatureContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ESignatureDrawable: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const SignatureLine: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ModalButtons: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ModalActionButton: import("styled-components").StyledComponent<(props: import("../button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export declare const SignatureCanvasContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const SignatureCanvas: import("styled-components").StyledComponent<"canvas", import("styled-components").DefaultTheme, {}, never>;
export {};
