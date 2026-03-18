import clsx from "clsx";
import { forwardRef, useRef } from "react";

import {
    BorderThickness,
    Colour,
    Radius,
    toCssValue,
    useApplyStyle,
    useResolvedTokenValue,
} from "../theme";
import { mergeRefs } from "../util";
import * as styles from "./dashed-border.styles";
import {
    createSvgBackgroundImage,
    isColourToken,
    isRadiusToken,
    isThicknessToken,
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

    const effectiveThickness = useResolvedTokenValue({
        value: thickness,
        fallback: BorderThickness["width-010"],
        isToken: isThicknessToken,
        normalizeCustom: toCssValue,
    });

    const effectiveRadius = useResolvedTokenValue({
        value: radius,
        fallback: Radius["none"],
        isToken: isRadiusToken,
        normalizeCustom: toCssValue,
    });

    const effectiveColour = useResolvedTokenValue({
        value: colour,
        fallback: Colour["border"],
        isToken: isColourToken,
        normalizeCustom: String,
    });

    const effectiveBackgroundColor = useResolvedTokenValue({
        value: backgroundColor,
        fallback: "none",
        isToken: isColourToken,
        normalizeCustom: String,
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
