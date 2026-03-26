/**
 * Props for the ESignature component, a canvas-based electronic signature input
 * that allows users to draw and submit their signature.
 *
 * @keywords e-signature, signature, canvas, draw, sign
 */
export interface EsignatureProps {
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Disables user interaction with the component. */
    disabled?: boolean | undefined;
    /** Instructional text displayed beneath the signature canvas. */
    description?: string | undefined;
    /** Label shown while the signature upload is in progress. */
    loadingLabel?: string | undefined;
    /** Upload progress value between 0 and 100, shown alongside `loadingLabel`. */
    loadingProgress?: number | undefined;
    /** The current signature as an image data URL. */
    value?: string | undefined;
    /** Callback fired when the signature changes. Receives the data URL or `null` when cleared. */
    onChange?: ((value: string | null) => void) | undefined;
}
