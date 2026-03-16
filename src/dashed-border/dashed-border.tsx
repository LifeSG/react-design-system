import clsx from "clsx";
import { forwardRef } from "react";
import { Border, Colour, Radius, useDesignToken } from "../theme";
import {
    overlayClassName,
    radiusClassMap,
    rootClassName,
} from "./dashed-border.styles";
import { DashedBorderProps } from "./types";

const STROKE_INSET_BY_THICKNESS = {
    [Border["width-005"]]: 0.25,
    [Border["width-010"]]: 0.5,
    [Border["width-020"]]: 1,
    [Border["width-040"]]: 2,
} as const;

const getResolvedValue = (resolved: string | undefined, fallback: string) => {
    return resolved && resolved.trim().length > 0 ? resolved : fallback;
};

const Component = (
    props: DashedBorderProps,
    ref: React.Ref<HTMLDivElement>
) => {
    const {
        enabled = true,
        thickness = Border["width-040"],
        radius = Radius["sm"],
        colour = Colour["border"],
        backgroundColor,
        className,
        children,
        ...otherProps
    } = props;

    const resolvedThickness = useDesignToken(thickness);
    const resolvedRadius = useDesignToken(radius);
    const resolvedColour = useDesignToken(colour);
    const resolvedBackgroundColor = useDesignToken(
        backgroundColor ?? Colour.bg
    );
    const effectiveThickness = getResolvedValue(resolvedThickness, thickness);
    const effectiveRadius = getResolvedValue(resolvedRadius, radius);
    const effectiveColour = getResolvedValue(resolvedColour, colour);
    const effectiveBackgroundColor = getResolvedValue(
        resolvedBackgroundColor,
        backgroundColor ?? "none"
    );

    const strokeInset =
        STROKE_INSET_BY_THICKNESS[thickness] ??
        STROKE_INSET_BY_THICKNESS[Border["width-040"]];
    const showSvg = enabled || !!backgroundColor;

    const radiusClassName = radiusClassMap[radius] || radiusClassMap[Radius.sm];

    return (
        <div
            ref={ref}
            className={clsx(rootClassName, radiusClassName, className)}
            {...otherProps}
        >
            {showSvg && (
                <svg
                    aria-hidden="true"
                    className={overlayClassName}
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                >
                    <rect
                        x={strokeInset}
                        y={strokeInset}
                        width={`calc(100% - ${strokeInset * 2}px)`}
                        height={`calc(100% - ${strokeInset * 2}px)`}
                        fill={
                            backgroundColor ? effectiveBackgroundColor : "none"
                        }
                        rx={effectiveRadius}
                        ry={effectiveRadius}
                        stroke={enabled ? effectiveColour : "none"}
                        strokeWidth={enabled ? effectiveThickness : 0}
                        strokeDasharray="4, 8"
                        strokeDashoffset="0"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {children}
        </div>
    );
};

export const DashedBorder = forwardRef(Component);
