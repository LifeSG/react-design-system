/// <reference types="react" />
export interface ImageWithFallbackProps {
    src: string;
    alt?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
}
export declare const ImageWithFallback: ({ src, alt, className, "data-testid": testId, }: ImageWithFallbackProps) => JSX.Element;
