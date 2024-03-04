import React from "react";
export interface StatefulImageProps {
    src: string;
    className?: string | undefined;
    alt?: string | undefined;
    fit?: React.CSSProperties["objectFit"] | undefined;
    placeholder?: React.ReactNode | undefined;
}
export declare const StatefulImage: ({ src, className, alt, fit, placeholder, }: StatefulImageProps) => JSX.Element;
