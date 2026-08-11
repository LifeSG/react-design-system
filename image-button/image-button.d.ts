import React from "react";
import type { ImageButtonProps } from "./types";
/**
 * A button that displays an image alongside optional label content.
 *
 * Use `ImageButton` for selectable image-based choices such as theme pickers or avatar
 * selectors, where each option is represented visually.
 */
export declare const ImageButton: (props: ImageButtonProps & React.RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
