import {
    InnerRing1,
    InnerRing2,
    InnerRing3,
    InnerRing4,
    OuterRing,
} from "./component-loading-spinner.style";

/**
 * This component is mainly used within components and is not to be confused
 * with the main loading spinner in animations/loading-spinner
 */
export interface ComponentLoadingSpinnerProps {
    className?: string | undefined;
    /** Measurement in px */
    size?: number | undefined;
    color?: string | undefined;
}

export const ComponentLoadingSpinner = ({
    color,
    className,
    size = 18,
}: ComponentLoadingSpinnerProps): JSX.Element => {
    const borderWidth = 2;

    return (
        <OuterRing
            className={className}
            $size={size}
            $color={color}
            data-testid={"component-loading-spinner"}
        >
            <InnerRing1
                id="inner1"
                $size={size - borderWidth}
                $borderWidth={borderWidth}
                $color={color}
            />
            <InnerRing2
                id="inner2"
                $size={size - borderWidth}
                $borderWidth={borderWidth}
                $color={color}
            />
            <InnerRing3
                id="inner3"
                $size={size - borderWidth}
                $borderWidth={borderWidth}
                $color={color}
            />
            <InnerRing4
                id="inner4"
                $size={size - borderWidth}
                $borderWidth={borderWidth}
                $color={color}
            />
        </OuterRing>
    );
};
