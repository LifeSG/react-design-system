import { RefObject } from "react";
import { useIsomorphicLayoutEffect } from "../../util";

type StyleValue<TProps> =
    | string
    | number
    | ((props: TProps) => string)
    | null
    | undefined;

type CSSVariableKey = `--${string}`;

export type ApplyStyleMap<TProps> = {
    [K in keyof React.CSSProperties]?: StyleValue<TProps>;
} & {
    [key in CSSVariableKey]?: StyleValue<TProps>;
};

export function useApplyStyle<TElement extends HTMLElement, TProps>(
    ref: RefObject<TElement>,
    styles: ApplyStyleMap<TProps>,
    props: TProps
) {
    useIsomorphicLayoutEffect(() => {
        const element = ref?.current;
        if (!element) return;

        Object.entries(styles).forEach(([key, value]) => {
            if (value == null) {
                element.style.setProperty(key, "");
                return;
            }

            const resolved =
                typeof value === "function" ? value(props) : String(value);

            element.style.setProperty(key, resolved);
        });
    }, [ref, styles, props]);
}
