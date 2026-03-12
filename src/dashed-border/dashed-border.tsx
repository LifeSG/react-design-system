import { forwardRef } from "react";
import { Border, Colour, Radius } from "../theme";
import { DashedBorderProps } from "./types";

const Component = (
    props: DashedBorderProps,
    ref: React.Ref<HTMLDivElement>
) => {
    const {
        enabled = true,
        thickness = Border["width-010"],
        radius = Radius.none,
        colour = Colour["border"],
        backgroundColor,
        className,
        style,
        children,
        ...otherProps
    } = props;

    return (
        <div
            ref={ref}
            className={className}
            style={{
                borderRadius: radius,
                ...(enabled
                    ? { border: `${thickness} dashed ${colour}` }
                    : undefined),
                ...(backgroundColor ? { backgroundColor } : undefined),
                ...style,
            }}
            {...otherProps}
        >
            {children}
        </div>
    );
};

export const DashedBorder = forwardRef(Component);
