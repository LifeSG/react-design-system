/** Props for the `ESignature` component. */
export interface EsignatureProps {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    disabled?: boolean | undefined;
    /**
     * Text rendered below the signature area.
     */
    description?: string | undefined;
    /**
     * Label displayed alongside the upload progress bar.
     *
     * @default "Uploading..."
     */
    loadingLabel?: string | undefined;
    /**
     * When set to a number, replaces the signature area with an upload progress
     * indicator. Remove or set to `undefined` to restore the signature area.
     */
    loadingProgress?: number | undefined;
    /**
     * The current signature as a base64 image dataURL.
     * Pass `undefined` or omit to render the empty "Add signature" state.
     */
    value?: string | undefined;
    /**
     * Called when the user saves a signature.
     *
     * @param value The new signature as a base64 image dataURL, or `null` if
     * the canvas was empty when saved.
     */
    onChange?: ((value: string | null) => void) | undefined;
}
