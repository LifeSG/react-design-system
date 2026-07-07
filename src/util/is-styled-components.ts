/*
    Extracted isStyledComponent function from styled-components repo 
    Refer to the original implementation here:
    https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/isStyledComponent.ts
*/

type StyledComponentBrand = { readonly _sc: symbol };

export default function isStyledComponent(
    target: any
): target is StyledComponentBrand {
    return (
        target != null &&
        (typeof target === "function" || typeof target === "object") &&
        "styledComponentId" in target
    );
}
