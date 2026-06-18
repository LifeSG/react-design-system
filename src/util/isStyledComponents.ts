import type { StyledComponentBrand } from "./utility-types";

export default function isStyledComponent(
    target: any
): target is StyledComponentBrand {
    return (
        target != null &&
        (typeof target === "function" || typeof target === "object") &&
        "styledComponentId" in target
    );
}
