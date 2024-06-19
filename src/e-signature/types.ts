export interface EsignatureProps {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    description?: string | undefined;
    /** image dataURL */
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
}
