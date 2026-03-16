import { getPrimitiveColour } from "../../colour-primitive/theme-helper";
import { getSemanticColour } from "../../colour-semantic/theme-helper";
import type { V3_StyledComponentProps } from "../../helpers";
import type { V3_PrimitiveColourSet, V3_SemanticColourSet } from "../../types";
import type { V3_ShadowSet } from "../types";

const createShadow =
    (
        shadowDef: string,
        colourKey: keyof V3_PrimitiveColourSet | keyof V3_SemanticColourSet,
        alpha: number
    ) =>
    (props: V3_StyledComponentProps) => {
        const color =
            getSemanticColour(colourKey as keyof V3_SemanticColourSet)(props) ||
            getPrimitiveColour(colourKey as keyof V3_PrimitiveColourSet)(props);
        return `${shadowDef} rgba(from ${color} r g b / ${alpha * 100}%)`;
    };

export const V3_DefaultShadowSet: V3_ShadowSet = {
    "xs-subtle": createShadow("0 0 4px 1px", "neutral-50", 0.24),
    "xs-strong": createShadow("0 0 4px 1px", "neutral-50", 0.5),
    "xs-focus-strong": createShadow("0 0 4px 1px", "border-focus", 0.5),
    "xs-error-strong": createShadow("0 0 4px 1px", "border-error", 0.5),
    "sm-subtle": createShadow("0 2px 4px 0", "neutral-50", 0.24),
    "sm-strong": createShadow("0 2px 4px 0", "neutral-50", 0.5),
    "md-subtle": createShadow("0 2px 8px 0", "neutral-50", 0.24),
    "md-strong": createShadow("0 2px 8px 0", "neutral-50", 0.5),
    "lg-subtle": createShadow("0 2px 12px 1px", "neutral-50", 0.24),
    "lg-strong": createShadow("0 2px 12px 1px", "neutral-50", 0.5),
};
