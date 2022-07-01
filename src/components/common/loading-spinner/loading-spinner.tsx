import React from "react";
import {
    InnerRing1,
    InnerRing2,
    InnerRing3,
    InnerRing4,
    OuterRing,
} from "./loading-spinner.style";
import { IComponentLoadingSpinnerProps } from "./types";

/**
 * This component is mainly used within components and is not to be confused
 * with the main loading spinner in animations/loading-spinner
 */
export const ComponentLoadingSpinner = (
    props: IComponentLoadingSpinnerProps
): JSX.Element => {
    const { color, className } = props;
    const size = props.size || 18;
    const borderWidth = 2;

    return (
        <OuterRing className={className} size={size} color={color}>
            <InnerRing1
                id="inner1"
                size={size - borderWidth}
                borderWidth={borderWidth}
            />
            <InnerRing2
                id="inner2"
                size={size - borderWidth}
                borderWidth={borderWidth}
            />
            <InnerRing3
                id="inner3"
                size={size - borderWidth}
                borderWidth={borderWidth}
            />
            <InnerRing4
                id="inner4"
                size={size - borderWidth}
                borderWidth={borderWidth}
            />
        </OuterRing>
    );
};
