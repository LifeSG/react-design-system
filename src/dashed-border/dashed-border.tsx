import { forwardRef } from "react";
import { Border, Colour, Radius, useDesignToken } from "../theme";
import { DashedBorderProps } from "./types";

// Temporary fix until we support Linaria css.
import "./dashed-border.css";

const radiusClassMap = {
    [Radius.none]: "fds-dashed-border-radius-none",
    [Radius.xs]: "fds-dashed-border-radius-xs",
    [Radius.sm]: "fds-dashed-border-radius-sm",
    [Radius.md]: "fds-dashed-border-radius-md",
    [Radius.lg]: "fds-dashed-border-radius-lg",
    [Radius.full]: "fds-dashed-border-radius-full",
} as const;

const STROKE_INSET_BY_THICKNESS = {
    [Border["width-005"]]: 0.25,
    [Border["width-010"]]: 0.5,
    [Border["width-020"]]: 1,
    [Border["width-040"]]: 2,
} as const;

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
    const effectiveThickness = resolvedThickness ?? thickness;
    const effectiveRadius = resolvedRadius ?? radius;
    const effectiveColour = resolvedColour ?? colour;
    const effectiveBackgroundColor =
        resolvedBackgroundColor ?? backgroundColor ?? "none";

    const strokeInset =
        STROKE_INSET_BY_THICKNESS[thickness] ??
        STROKE_INSET_BY_THICKNESS[Border["width-040"]];
    const showSvg = enabled || Boolean(backgroundColor);

    const radiusClassName = radiusClassMap[radius] || radiusClassMap[Radius.sm];
    return (
        <div
            ref={ref}
            className={["fds-dashed-border", radiusClassName, className]
                .filter(Boolean)
                .join(" ")}
            {...otherProps}
        >
            {showSvg && (
                <svg
                    aria-hidden="true"
                    className="fds-dashed-border-overlay"
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
