import clsx from "clsx";
import type React from "react";
import { forwardRef, useRef } from "react";

import { useApplyStyle } from "../theme";
import { mergeRefs } from "../util";
import * as styles from "./input-range-slider.styles";

interface ThumbProps extends React.HTMLAttributes<HTMLDivElement> {
    focused: boolean | undefined;
    disabled: boolean | undefined;
    readOnly: boolean | undefined;
}

const InnerThumb = (
    {
        focused,
        disabled,
        readOnly,
        className,
        style,
        ...otherProps
    }: ThumbProps,
    ref: React.Ref<HTMLDivElement>
) => {
    const thumbRef = useRef<HTMLDivElement>(null);

    useApplyStyle(thumbRef, style);

    return (
        <div
            ref={mergeRefs(thumbRef, ref)}
            {...otherProps}
            className={clsx(styles.sliderThumb, className)}
            data-focused={focused ? "true" : undefined}
        >
            <div
                className={clsx(
                    styles.knob,
                    disabled && styles.knobDisabled,
                    !disabled && !readOnly && styles.knobInteractive
                )}
            />
        </div>
    );
};

export const Thumb = forwardRef(InnerThumb);

interface TrackProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: string;
}

const InnerTrack = (
    { color, className, style, ...otherProps }: TrackProps,
    ref: React.Ref<HTMLDivElement>
) => {
    const trackRef = useRef<HTMLDivElement>(null);

    useApplyStyle(trackRef, {
        [styles.tokens.track.backgroundColor]: color,
    });

    useApplyStyle(trackRef, style);

    return (
        <div
            {...otherProps}
            className={clsx(styles.sliderTrack, className)}
            ref={mergeRefs(trackRef, ref)}
        />
    );
};

export const Track = forwardRef(InnerTrack);
