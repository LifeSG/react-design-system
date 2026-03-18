import clsx from "clsx";
import { forwardRef, useRef } from "react";

import {
    BorderThickness,
    Colour,
    Radius,
    useApplyStyle,
    useDesignToken,
} from "../theme";
import { mergeRefs } from "../util";
import * as styles from "./dashed-border.styles";
import {
    createSvgBackgroundImage,
    getBackgroundColorToken,
    getColourToken,
    getEffectiveBackgroundColor,
    getEffectiveColour,
    getEffectiveRadius,
    getEffectiveThickness,
    getRadiusToken,
    getThicknessToken,
} from "./dashed-border.utils";
import type { DashedBorderProps } from "./types";

const Component = (
    props: DashedBorderProps,
    ref: React.Ref<HTMLDivElement>
) => {
    const {
        enabled = true,
        thickness = BorderThickness["width-010"],
        radius = Radius["none"],
        colour = Colour["border"],
        backgroundColor,
        className,
        children,
        ...otherProps
    } = props;

    const thicknessToken = getThicknessToken(thickness);
    const radiusToken = getRadiusToken(radius);
    const colourToken = getColourToken(colour);
    const backgroundColorToken = getBackgroundColorToken(backgroundColor);

    const resolvedThickness = useDesignToken(thicknessToken);
    const resolvedRadius = useDesignToken(radiusToken);
    const resolvedColour = useDesignToken(colourToken);
    const resolvedBackgroundColor = useDesignToken(backgroundColorToken);
    const effectiveThickness = getEffectiveThickness({
        thickness,
        resolvedThickness,
    });
    const effectiveRadius = getEffectiveRadius({ radius, resolvedRadius });
    const effectiveColour = getEffectiveColour({ colour, resolvedColour });
    const effectiveBackgroundColor = getEffectiveBackgroundColor({
        backgroundColor,
        resolvedBackgroundColor,
    });

    const showSvg = enabled || !!backgroundColor;
    const overlayBackgroundImage = createSvgBackgroundImage({
        radius: effectiveRadius,
        colour: effectiveColour,
        thickness: effectiveThickness,
        enabled,
    });
    const rootRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const mergedRootRef = ref ? mergeRefs(rootRef, ref) : rootRef;

    useApplyStyle(rootRef, {
        [styles.tokens.rootRadius]: effectiveRadius,
        [styles.tokens.rootBackgroundColor]: backgroundColor
            ? effectiveBackgroundColor
            : null,
    });

    useApplyStyle(overlayRef, {
        [styles.tokens.overlayBackgroundImage]: showSvg
            ? overlayBackgroundImage
            : null,
    });

    return (
        <div
            ref={mergedRootRef}
            className={clsx(styles.root, className)}
            {...otherProps}
        >
            {showSvg && (
                <div
                    aria-hidden="true"
                    className={styles.overlay}
                    ref={overlayRef}
                />
            )}
            {children}
        </div>
    );
};

export const DashedBorder = forwardRef(Component);
