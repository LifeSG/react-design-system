import type { RefObject } from "react";

import { useIsomorphicLayoutEffect } from "../../util";
import { CSSVariableKey } from "../types";

type StyleValue = string | number | null | undefined;

export type ApplyStyleMap = {
    [K in keyof React.CSSProperties]?: StyleValue;
} & {
    [K in CSSVariableKey]?: StyleValue;
} & {
    [K in `--${string}`]?: StyleValue;
};

export function useApplyStyle<TElement extends HTMLElement>(
    ref: RefObject<TElement>,
    styles: ApplyStyleMap
) {
    useIsomorphicLayoutEffect(() => {
        const element = ref?.current;
        if (!element) return;

        Object.entries(styles).forEach(([key, value]) => {
            if (value == null) {
                element.style.setProperty(key, "");
                return;
            }

            element.style.setProperty(key, String(value));
        });
    }, [ref, styles]);
}
