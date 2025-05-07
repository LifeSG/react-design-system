import React from "react";
export interface StatefulImageProps {
    src: string;
    className?: string | undefined;
    alt?: string | undefined;
    fit?: React.CSSProperties["objectFit"] | undefined;
    placeholder?: React.ReactNode | undefined;
    retrieveImageDimension?: boolean;
    setDimension?: ({ src, width, height, }: {
        src: string;
        width: number;
        height: number;
    }) => void;
}
export declare const StatefulImage: ({ src, className, alt, fit, placeholder, retrieveImageDimension, setDimension, }: StatefulImageProps) => import("react/jsx-runtime").JSX.Element;
