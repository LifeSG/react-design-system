import type { EsignatureProps } from "../../e-signature/types";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.ESignature`, combining e-signature props with the shared
 * form field layout.
 */
export interface FormESignatureProps
    extends EsignatureProps,
        BaseFormElementProps {}
