import { RefObject } from "react";
import { useIsomorphicLayoutEffect } from "../../util";

type StyleValue = string | number | null | undefined;

// TODO: Update to FDSVariableName once 9839 merged
type CSSVariableKey = `--${string}`;

export type ApplyStyleMap = {
    [K in keyof React.CSSProperties]?: StyleValue;
} & {
    [key in CSSVariableKey]?: StyleValue;
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
