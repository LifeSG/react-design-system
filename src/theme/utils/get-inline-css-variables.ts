import type { CSSProperties } from "react";

type InlineCssVariables = Record<`--${string}`, string>;

const mergeInlineCssVariables = (
    element: HTMLElement,
    target: InlineCssVariables
) => {
    const { style } = element;
    if (style.length === 0) return;

    for (let i = 0; i < style.length; i++) {
        const propertyName = style.item(i);
        if (!propertyName?.startsWith("--")) continue;

        const value = style.getPropertyValue(propertyName).trim();
        if (!value) continue;

        target[propertyName as `--${string}`] = value;
    }
};

/**
 * Extracts inherited inline CSS custom properties from an ancestry path.
 * Variables defined on descendants override ancestors, mirroring CSS variable
 * inheritance as seen by the reference element.
 */
export const getInheritedInlineCssVariables = (
    referenceElement: HTMLElement | null,
    boundaryElement: HTMLElement | null = null
): CSSProperties => {
    if (!referenceElement) return {};

    const variables: InlineCssVariables = {};

    let current: HTMLElement | null = referenceElement;
    while (current) {
        mergeInlineCssVariables(current, variables);

        if (boundaryElement && current === boundaryElement) break;

        current = current.parentElement;
    }

    return variables;
};
