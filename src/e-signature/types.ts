export interface EsignatureProps {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    disabled?: boolean | undefined;
    description?: string | undefined;
    loadingLabel?: string | undefined;
    loadingProgress?: number | undefined;
    /** image dataURL */
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
}
