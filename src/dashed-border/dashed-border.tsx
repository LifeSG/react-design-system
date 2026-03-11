import { Border, Colour, Radius, useDesignToken } from "../theme";
import { DashedBorderProps } from "./types";

export const DashedBorder = (props: DashedBorderProps) => {
    const {
        thickness = Border["width-040"],
        radius = Radius["sm"],
        colour = Colour["border"],
        backgroundColor,
        className,
        style,
        ...otherProps
    } = props;

    const resolvedThickness = useDesignToken(thickness);
    const resolvedRadius = useDesignToken(radius);
    const resolvedColour = useDesignToken(colour);

    const svg = `<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${resolvedRadius}' ry='${resolvedRadius}' stroke='${resolvedColour}' stroke-width='${resolvedThickness}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`;
    const encodedSvg = encodeURIComponent(svg);

    return (
        <div
            className={className}
            style={{
                backgroundImage: `url("data:image/svg+xml,${encodedSvg}")`,
                borderRadius: `${resolvedRadius}`,
                ...(backgroundColor ? { backgroundColor } : undefined),
                ...style,
            }}
            {...otherProps}
        />
    );
};
